# PowerShell script для запуска SonarQube сканера
# Использование: .\run-sonar.ps1

param(
    [string]$SonarQubeUrl = "http://host.docker.internal:9000",
    [string]$ProjectKey = "sapatechmain",
    [string]$AuthToken = "sqp_db4d88fcd4fc0cb9485445324e226147ac72bbe7"
)

# Проверка наличия Docker
Write-Host "Проверка Docker..." -ForegroundColor Cyan
try {
    $dockerVersion = docker --version
    Write-Host "Docker найден: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "Ошибка: Docker не установлен или не доступен" -ForegroundColor Red
    Write-Host "Установите Docker Desktop: https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
    exit 1
}

# Проверка доступности SonarQube сервера
Write-Host "`nПроверка доступности SonarQube сервера..." -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri "$SonarQubeUrl/api/system/status" -UseBasicParsing -TimeoutSec 5 -ErrorAction Stop
    Write-Host "SonarQube сервер доступен" -ForegroundColor Green
} catch {
    Write-Host "Ошибка: SonarQube сервер недоступен по адресу $SonarQubeUrl" -ForegroundColor Red
    Write-Host "Убедитесь, что SonarQube сервер запущен:" -ForegroundColor Yellow
    Write-Host "  docker-compose -f docker-compose.sonar.yml up -d" -ForegroundColor Yellow
    Write-Host "Или проверьте URL в настройках скрипта" -ForegroundColor Yellow
    exit 1
}

# Получаем абсолютный путь к репозиторию
$RepoPath = (Get-Location).Path

# Проверка наличия sonar-project.properties
if (-not (Test-Path "sonar-project.properties")) {
    Write-Host "`nПредупреждение: файл sonar-project.properties не найден" -ForegroundColor Yellow
    Write-Host "Создайте файл sonar-project.properties в корне проекта" -ForegroundColor Yellow
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Запуск SonarQube сканера" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "URL: $SonarQubeUrl" -ForegroundColor White
Write-Host "Project Key: $ProjectKey" -ForegroundColor White
Write-Host "Repository Path: $RepoPath" -ForegroundColor White
Write-Host "========================================`n" -ForegroundColor Cyan

# Запускаем Docker контейнер с SonarQube сканером
Write-Host "Запуск сканера..." -ForegroundColor Green
Write-Host "Это может занять несколько минут...`n" -ForegroundColor Yellow

try {
    docker run `
        --rm `
        --network host `
        -e SONAR_HOST_URL="$SonarQubeUrl" `
        -e SONAR_SCANNER_OPTS="-Dsonar.projectKey=$ProjectKey -Dsonar.login=$AuthToken" `
        -v "${RepoPath}:/usr/src" `
        -w /usr/src `
        sonarsource/sonar-scanner-cli:latest

    $exitCode = $LASTEXITCODE

    if ($exitCode -eq 0) {
        Write-Host "`n========================================" -ForegroundColor Green
        Write-Host "Сканирование завершено успешно!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "`nРезультаты доступны на:" -ForegroundColor Cyan
        Write-Host "$SonarQubeUrl/dashboard?id=$ProjectKey" -ForegroundColor White
        Write-Host "`nОткрыть в браузере? (Y/N): " -ForegroundColor Yellow -NoNewline
        
        $response = Read-Host
        if ($response -eq 'Y' -or $response -eq 'y') {
            Start-Process "$SonarQubeUrl/dashboard?id=$ProjectKey"
        }
    } else {
        Write-Host "`n========================================" -ForegroundColor Red
        Write-Host "Ошибка при сканировании" -ForegroundColor Red
        Write-Host "========================================" -ForegroundColor Red
        Write-Host "Код выхода: $exitCode" -ForegroundColor Red
        Write-Host "`nПроверьте:" -ForegroundColor Yellow
        Write-Host "1. Доступность SonarQube сервера" -ForegroundColor Yellow
        Write-Host "2. Правильность токена и ключа проекта" -ForegroundColor Yellow
        Write-Host "3. Наличие файла sonar-project.properties" -ForegroundColor Yellow
        exit $exitCode
    }
} catch {
    Write-Host "`nКритическая ошибка при запуске сканера" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
