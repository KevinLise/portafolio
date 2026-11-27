$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

Write-Host 'Compilando...' -ForegroundColor Cyan
npm run build

$deploy = Join-Path $env:TEMP 'portafolio-deploy'
Remove-Item -Recurse -Force $deploy -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $deploy | Out-Null

Copy-Item -Recurse -Force 'dist\*' $deploy
New-Item -ItemType File -Path (Join-Path $deploy '.nojekyll') -Force | Out-Null

Set-Location $deploy
git init -b gh-pages | Out-Null
git add -A
git commit -m "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')" | Out-Null
git remote add origin https://github.com/KevinLise/portafolio.git
git push -f origin gh-pages

Write-Host ''
Write-Host 'Publicado en https://kevinlise.github.io/portafolio/' -ForegroundColor Green
