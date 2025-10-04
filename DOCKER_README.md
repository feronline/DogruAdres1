# DoğruAdres - Docker Kurulumu

Bu proje Docker ile 4949 portunda çalışacak şekilde yapılandırılmıştır.

## Gereksinimler

- Docker Desktop veya Docker Engine
- Docker Compose (opsiyonel)

## Çalıştırma

### Yöntem 1: Docker Compose (Önerilen)

```bash
# Projeyi build et ve çalıştır
docker-compose up --build

# Arka planda çalıştır
docker-compose up -d --build
```

### Yöntem 2: Docker Commands

```bash
# Docker image'ını build et
docker build -t dogruadres .

# Container'ı çalıştır
docker run -p 4949:4949 dogruadres
```

## Erişim

Proje çalıştıktan sonra aşağıdaki adreslerden erişebilirsiniz:

- **Ana Sayfa**: http://localhost:4949
- **Acil Numaralar**: http://localhost:4949/AcilNumaralar
- **Deprem Afet**: http://localhost:4949/DepremAfet
- **Giyim Yemek**: http://localhost:4949/GiyimYemek
- **Savaş Yardımları**: http://localhost:4949/SavasYardimlari
- **Sokak Hayvanları**: http://localhost:4949/SokakHayvanlari
- **Yangın Olayları**: http://localhost:4949/YanginOlaylari

## Docker Komutları

```bash
# Container'ları durdur
docker-compose down

# Container'ları yeniden başlat
docker-compose restart

# Logları görüntüle
docker-compose logs -f

# Container'a bağlan
docker exec -it dogruadres-app bash
```

## Port Değiştirme

Eğer farklı bir port kullanmak istiyorsanız, `docker-compose.yml` dosyasındaki port mapping'i değiştirin:

```yaml
ports:
  - "8080:4949"  # 8080 portundan erişim
```

Veya Docker run komutunda:

```bash
docker run -p 8080:4949 dogruadres
```
