# Construcción del proyecto
Write-Host "🔨 Construyendo el proyecto..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completado exitosamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📦 Archivos listos en la carpeta 'out'" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Para desplegar en Cloudflare Pages:" -ForegroundColor Cyan
    Write-Host "1. Ve a https://dash.cloudflare.com" -ForegroundColor White
    Write-Host "2. Workers & Pages > Create application > Pages" -ForegroundColor White
    Write-Host "3. Conecta tu repositorio Git" -ForegroundColor White
    Write-Host "4. Build command: npm run build" -ForegroundColor White
    Write-Host "5. Build output directory: out" -ForegroundColor White
    Write-Host ""
    Write-Host "O usa Wrangler CLI:" -ForegroundColor Cyan
    Write-Host "wrangler pages deploy out --project-name=tienda-tazas-termicas" -ForegroundColor White
} else {
    Write-Host "❌ Error en el build. Revisa los errores arriba." -ForegroundColor Red
}
