$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$nodeDir = Join-Path $env:ProgramFiles 'nodejs'
if (Test-Path $nodeDir) { $env:Path = "$nodeDir;$env:Path" }

$npm = Join-Path $nodeDir 'npm.cmd'
if (-not (Test-Path $npm)) { $npm = 'npm.cmd' }

Write-Host 'Compilando...' -ForegroundColor Cyan
& $npm run build
if ($LASTEXITCODE -ne 0) { throw 'La compilacion fallo.' }

$deploy = Join-Path $env:TEMP 'portafolio-deploy'
Remove-Item -Recurse -Force $deploy -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $deploy | Out-Null

Copy-Item -Recurse -Force 'dist\*' $deploy
New-Item -ItemType File -Path (Join-Path $deploy '.nojekyll') -Force | Out-Null

Set-Location $deploy
git init -b gh-pages | Out-Null
git config user.name 'Kevin Escorcia'
git config user.email 'kescorci5@gmail.com'
git add -A
git commit -m "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')" | Out-Null
if ($LASTEXITCODE -ne 0) { throw 'No se pudo crear el commit del deploy.' }

git remote add origin https://github.com/KevinLise/portafolio.git
git push -f origin gh-pages
if ($LASTEXITCODE -ne 0) { throw 'No se pudo subir a gh-pages.' }

Write-Host ''
Write-Host 'Publicado en https://kevinlise.github.io/portafolio/' -ForegroundColor Green
