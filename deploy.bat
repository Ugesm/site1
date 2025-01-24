@echo off
color 0A
cls
echo ===================================
echo    Deploiement du site UGESM
echo ===================================
echo.

echo Verification des modifications...
git status
echo.

set /p message=Entrez votre message de commit (ou appuyez sur Enter pour message par defaut): 
if "%message%"=="" set message=Mise a jour automatique: %date% %time%

echo.
echo Ajout des fichiers modifies...
git add .

echo.
echo Creation du commit...
git commit -m "%message%"

echo.
echo Envoi vers GitHub...
git push origin main

echo.
echo ===================================
echo    Deploiement termine avec succes
echo ===================================
echo.
echo Appuyez sur une touche pour fermer...
pause > nul
