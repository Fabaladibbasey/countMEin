namespace API.Entities;
public class RefereshAppUserToken
{
    public int Id { get; set; }
    public AppUser AppUser { get; set; }
    public string Token { get; set; }
    public DateTime Expires { get; set; }

    public bool IsExpired => DateTime.UtcNow >= Expires;

    public DateTime? Revoked { get; set; }
    public bool IsActive => Revoked == null && !IsExpired;
}