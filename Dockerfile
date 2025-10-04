# .NET 8.0 SDK image'ını base olarak kullan
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Çalışma dizinini ayarla
WORKDIR /app

# Proje dosyasını kopyala
COPY DogruAdres.csproj .

# Dependencies'leri restore et
RUN dotnet restore

# Tüm kaynak kodları kopyala
COPY . .

# Uygulamayı build et
RUN dotnet build -c Release -o /app/build

# Publish işlemi için yeni stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

# Çalışma dizinini ayarla
WORKDIR /app

# Build edilmiş dosyaları kopyala
COPY --from=build /app/build .

# 4949 portunu expose et
EXPOSE 4949

# Uygulamayı 4949 portunda çalıştır
ENTRYPOINT ["dotnet", "DogruAdres.dll", "--urls", "http://0.0.0.0:4949"]
