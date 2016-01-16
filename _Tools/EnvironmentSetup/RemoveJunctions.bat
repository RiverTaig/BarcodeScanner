@echo off
:: Set appropriate program files directory
set ESSENTIALS_PROGRAMDIR=C:\Program Files
if exist "C:\Program Files (x86)" set ESSENTIALS_PROGRAMDIR=C:\Program Files (x86)

set SOURCE_PATH=%~dp0..\..\

"%~dp0junction" -d "%ESSENTIALS_PROGRAMDIR%\Latitude Geographics\Geocortex Essentials\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\CommonResources\Schneider"
"%~dp0junction" -d "%ESSENTIALS_PROGRAMDIR%\Latitude Geographics\Geocortex Essentials\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\BarcodeScanner"
"%~dp0junction" -d "%SOURCE_PATH%\GeocortexEssentials"

echo Junctions deleted
pause