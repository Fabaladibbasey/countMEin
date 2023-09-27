FROM mcr.microsoft.com/dotnet/sdk:7.0.203 AS build-env

WORKDIR /app
EXPOSE 8080

# Install fonts
RUN apt-get update && apt-get install -y fonts-liberation

# install fontconfig
RUN apt-get update; apt-get install -y fontconfig

# refresh system font cache
RUN fc-cache -f -v

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0.4
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "API.dll"]