# Script de despliegue a GitHub Pages
# Ejecutar después de crear el repositorio en: https://github.com/new?name=facilities-bolivar-angular

$username = $args[0]
if (-not $username) { $username = Read-Host "Ingresa tu usuario de GitHub" }
if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Error: Debes ingresar tu usuario de GitHub." -ForegroundColor Red
    exit 1
}

$remote = "https://github.com/$username/facilities-bolivar-angular.git"
Write-Host "Conectando a $remote ..." -ForegroundColor Cyan

git remote add origin $remote 2>$null
if ($LASTEXITCODE -ne 0) {
    git remote set-url origin $remote
}

git push -u origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "`nListo. El workflow desplegará en 2-3 minutos." -ForegroundColor Green
    Write-Host "URL: https://$username.github.io/facilities-bolivar-angular/" -ForegroundColor Green
    Write-Host "Activa Pages: Settings > Pages > Source: GitHub Actions" -ForegroundColor Yellow
} else {
    Write-Host "`nAsegúrate de crear el repo en: https://github.com/new?name=facilities-bolivar-angular" -ForegroundColor Yellow
}
