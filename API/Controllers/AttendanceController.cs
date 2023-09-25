using System.Security.Claims;
using System.Text;
using System.Text.RegularExpressions;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static Google.Apis.Auth.GoogleJsonWebSignature;
using PdfSharp.Pdf;
using PdfSharp.Drawing;

namespace API.Controllers;

public partial class AttendanceController : BaseApiController
{
    private readonly ApplicationDbContext _context;
    private readonly IConfiguration _config;
    private readonly UserManager<AppUser> _userManager;
    private readonly TokenService _tokenService;
    private readonly IMapper _mapper;

    public AttendanceController(ApplicationDbContext context, IConfiguration config, UserManager<AppUser> userManager, TokenService tokenService, IMapper mapper)
    {
        _mapper = mapper;
        _tokenService = tokenService;
        _userManager = userManager;
        _context = context;
        _config = config;
    }

    [AllowAnonymous]
    [HttpPost("createAttendee/{sessionId}")]
    public async Task<ActionResult<AttendeeDto>> CreateAttendee(string sessionId, string accessToken, string linkToken)
    {
        var session = await _context.Sessions
            .Include(x => x.Attendees)
            .FirstOrDefaultAsync(x => x.Id == Guid.Parse(sessionId));

        if (session == null)
        {
            return BadRequest("Invalid session id");
        }

        if (session.SessionExpiresAt < DateTime.UtcNow)
        {
            return BadRequest("Session expired");
        }

        var tokenValidated = _tokenService.ValidateAttendanceLinkToken(linkToken);
        if (!tokenValidated) return BadRequest("Invalid token");


        //google access token validation
        var validationSettings = new ValidationSettings
        {
            Audience = new[] {
                _config["Google:ClientId"]
            }
        };

        var payload = await ValidateAsync(accessToken, validationSettings);

        if (payload == null)
        {
            return BadRequest("Invalid access token");
        }

        //check if the user already exists in the attendance link
        var attendee = await _context.Attendees
            .FirstOrDefaultAsync(x => x.Email == payload.Email && x.Session == session);

        if (attendee != null)
        {
            return BadRequest("You already joined this session");
        }

        //create a new attendee
        attendee = new Attendee
        {
            Email = payload.Email,
            FirstName = payload.GivenName,
            LastName = payload.FamilyName,
            Session = session,
            MATNumber = MyRegex().Match(payload.Email).Value ?? "000000"
            // MATNumber = Regex.Match(payload.Email, @"\d+").Value ?? "000000"

        };

        _context.Attendees.Add(attendee);
        var saved = await _context.SaveChangesAsync();

        if (saved < 1)
            return BadRequest("Failed to create attendee");

        return _mapper.Map<AttendeeDto>(attendee);
    }

    [Authorize]
    [HttpGet("sessionAttendees/{sessionId}")]
    public async Task<ActionResult<SessionAttendeesDto>> SessionAttendees(string sessionId, [FromQuery] SessionAttendeeParams sessionAttendeeParams)
    {
        var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

        var session = await _context.Sessions
            .Include(x => x.Host)
            .Where(x => x.Host == user && x.Id == Guid.Parse(sessionId))
            .AsNoTracking()
            .FirstOrDefaultAsync();

        if (session == null) return BadRequest("Invalid session id");

        var query = _context.Attendees
            .Where(x => x.Session == session)
            .SortSessionAttendees(sessionAttendeeParams.OrderBy ?? "attendeeCreatedAtDesc")
            .SearchSessionAttendees(sessionAttendeeParams.SearchTerm)
            .AsNoTracking()
            .AsQueryable();

        var attendees = await PageList<Attendee>.CreateAsync(query, sessionAttendeeParams.PageNumber, sessionAttendeeParams.PageSize);

        Response.AddPaginationHeader(attendees.MetaData);

        session.Attendees = attendees;

        return _mapper.Map<SessionAttendeesDto>(session);
    }



    [GeneratedRegex("\\d+")]
    private static partial Regex MyRegex();

    [Authorize]
    [HttpGet("ExportToPDF/{sessionId}")]
    public async Task<IActionResult> ExportToPdf(string sessionId)
    {
        // create a new PDF document
        var pdf = new PdfDocument();

        // get the date session was created and also get the list of attendees
        var createdOn = _context.Sessions.OrderByDescending(x => x.CreatedAt).FirstOrDefault().CreatedAt.ToString("dd/MM/yyyy");
        var attendees = await _context.Attendees.ToListAsync();

        // font definitions
        var normalFont = new XFont("Arial", 14);
        var headerFont = new XFont("Arial", 18, XFontStyle.Bold);
        var columnheaderFont = new XFont("Arial", 14, XFontStyle.Bold);

        // page configuration
        int currentAttendeeIndex = 0;
        int attendeesPerPage = 25;
        int totalPages = (int)Math.Ceiling((double)attendees.Count / attendeesPerPage);

        // loop through the total number of pages
        for (int pageIdx = 0; pageIdx < totalPages; pageIdx++)
        {
            // create a new page
            var page = pdf.AddPage();

            // get an XGraphics object for drawing
            var gfx = XGraphics.FromPdfPage(page);

            // set the page size
            int yPos = 50;

            // divide the page into four columns
            double columnWidth = (page.Width - 5) / 4;

            // Width for the "#" column
            double numberColumnWidth = 5;

            // Header
            gfx.DrawString("Attendees", headerFont, XBrushes.Black, new XRect(0, yPos, page.Width, page.Height), XStringFormats.TopCenter);
            gfx.DrawString(createdOn, headerFont, XBrushes.Black, new XRect(0, yPos, page.Width - 20, page.Height), XStringFormats.TopRight);
            yPos += 50;

            // Column headers
            gfx.DrawString("#", columnheaderFont, XBrushes.Black, new XRect(5, yPos, numberColumnWidth, page.Height), XStringFormats.TopLeft);
            gfx.DrawString("First Name", columnheaderFont, XBrushes.Black, new XRect(30, yPos, columnWidth, page.Height), XStringFormats.TopLeft);
            gfx.DrawString("Last Name", columnheaderFont, XBrushes.Black, new XRect(170, yPos, columnWidth, page.Height), XStringFormats.TopLeft);
            gfx.DrawString("MAT Number", columnheaderFont, XBrushes.Black, new XRect(310, yPos, columnWidth, page.Height), XStringFormats.TopLeft);
            gfx.DrawString("Email", columnheaderFont, XBrushes.Black, new XRect(450, yPos, columnWidth, page.Height), XStringFormats.TopLeft);
            yPos += 20;

            // draw a line to separate the column headers from the content
            gfx.DrawLine(XPens.Black, 5, yPos, page.Width - 5, yPos);
            yPos += 5;

            // loop through the attendees for the current page
            for (int i = 0; i < attendeesPerPage && currentAttendeeIndex < attendees.Count; i++)
            {
                var attendee = attendees[currentAttendeeIndex];

                gfx.DrawString($"{currentAttendeeIndex + 1}", normalFont, XBrushes.Black, new XRect(5, yPos, numberColumnWidth, page.Height), XStringFormats.TopLeft);
                gfx.DrawString($"{attendee.FirstName}", normalFont, XBrushes.Black, new XRect(30, yPos, columnWidth, page.Height), XStringFormats.TopLeft);
                gfx.DrawString($"{attendee.LastName}", normalFont, XBrushes.Black, new XRect(170, yPos, columnWidth, page.Height), XStringFormats.TopLeft);
                gfx.DrawString($"{attendee.MATNumber}", normalFont, XBrushes.Black, new XRect(310, yPos, columnWidth, page.Height), XStringFormats.TopLeft);
                gfx.DrawString($"{attendee.Email}", normalFont, XBrushes.Black, new XRect(450, yPos, columnWidth, page.Height), XStringFormats.TopLeft);
                yPos += 25; // Add some space between attendees
                currentAttendeeIndex++;
            }

            // Page number
            string pageNumber = $"Page {pageIdx + 1} of {totalPages}";
            gfx.DrawString(pageNumber, normalFont, XBrushes.Black, new XRect(0, page.Height - 20, page.Width, 20), XStringFormats.BottomCenter);
        }

        var pdfStream = new MemoryStream();
        pdf.Save(pdfStream, false);
        pdfStream.Seek(0, SeekOrigin.Begin);

        return File(pdfStream, "application/pdf", "Attendees.pdf");
    }


    [HttpGet("ExportToCSV/{sessionId}")]
    public async Task<ActionResult> SaveToCSV(string sessionId)
    {
        var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

        var session = await _context.Sessions
            .Include(x => x.Attendees)
            .Include(x => x.Host)
            .Where(x => x.Id == Guid.Parse(sessionId) && x.Host == user)
            .AsNoTracking()
            .FirstOrDefaultAsync();

        if (session == null) return BadRequest("Invalid session id");

        var csvData = new StringBuilder();

        csvData.AppendLine("FirstName,LastName,MATNumber,Email");

        foreach (var attendee in session.Attendees)
        {
            csvData.AppendLine($"{attendee.FirstName},{attendee.LastName},{attendee.MATNumber},{attendee.Email}");
        }

        var csvBtes = Encoding.UTF8.GetBytes(csvData.ToString());

        return File(csvBtes, "text/csv", "Attendees.csv");
    }
}

