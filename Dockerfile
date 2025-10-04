# 1) Build & publish
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# bağımlılık katmanlarını önbelleklemek için önce csproj
COPY DogruAdres.csproj ./
RUN dotnet restore

# kaynakları kopyala ve publish et
COPY . ./
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

# 2) Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# publish çıktısını kopyala (statik dosyalar dahil)
COPY --from=build /app/publish ./

# prod URL
ENV ASPNETCORE_URLS=http://0.0.0.0:4949
EXPOSE 4949

ENTRYPOINT ["dotnet", "DogruAdres.dll"]
