# SonarQube - Инструкция по использованию

## Быстрый старт

### 1. Убедитесь, что SonarQube сервер запущен

```powershell
# Проверка статуса
docker ps | Select-String sonarqube

# Если не запущен, запустите сервер (см. инструкцию ниже)
```

### 2. Запустите сканер

```powershell
.\run-sonar.ps1
```

Скрипт автоматически:
- Проверит доступность Docker
- Проверит доступность SonarQube сервера
- Запустит сканирование проекта
- Откроет результаты в браузере (по запросу)

## Настройки проекта

**Project Key:** `sapatechmain`  
**SonarQube URL:** `http://host.docker.internal:9000`  
**Token:** Настроен в скрипте

## Запуск SonarQube сервера

Если сервер еще не запущен, создайте файл `docker-compose.sonar.yml`:

```yaml
version: '3.8'

services:
  sonarqube:
    image: sonarqube:9.9-community
    container_name: sonarqube
    restart: unless-stopped
    environment:
      - SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true
    ports:
      - "9000:9000"
    volumes:
      - sonarqube_data:/opt/sonarqube/data
      - sonarqube_extensions:/opt/sonarqube/extensions
      - sonarqube_logs:/opt/sonarqube/logs

volumes:
  sonarqube_data:
  sonarqube_extensions:
  sonarqube_logs:
```

Запуск:
```powershell
docker-compose -f docker-compose.sonar.yml up -d
```

Первый запуск может занять несколько минут. Проверьте логи:
```powershell
docker logs sonarqube -f
```

## Первоначальная настройка SonarQube

1. Откройте http://localhost:9000
2. Логин по умолчанию: `admin` / `admin`
3. При первом входе потребуется сменить пароль
4. Токен уже настроен в скрипте `run-sonar.ps1`

## Просмотр результатов

После завершения сканирования результаты будут доступны по адресу:
```
http://localhost:9000/dashboard?id=sapatechmain
```

Скрипт предложит открыть эту ссылку автоматически.

## Конфигурация

Все настройки проекта находятся в файле `sonar-project.properties`:
- Исключения файлов из анализа
- Пути к исходному коду
- Настройки для TypeScript/JavaScript

## Устранение проблем

### Ошибка: SonarQube сервер недоступен
- Убедитесь, что сервер запущен: `docker ps | Select-String sonarqube`
- Проверьте, что порт 9000 свободен
- Попробуйте открыть http://localhost:9000 в браузере

### Ошибка: Docker не найден
- Установите Docker Desktop: https://www.docker.com/products/docker-desktop
- Убедитесь, что Docker запущен

### Ошибка авторизации
- Проверьте токен в файле `run-sonar.ps1`
- Создайте новый токен в SonarQube: My Account → Security → Generate Token

## Дополнительная информация

Подробная инструкция находится в файле `SONAR_SETUP.md` (если доступен).
