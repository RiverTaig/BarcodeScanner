@echo off
:: Set appropriate program files directory
set ESSENTIALS_PROGRAMDIR=C:\Program Files
if exist "C:\Program Files (x86)" set ESSENTIALS_PROGRAMDIR=C:\Program Files (x86)

set SOURCE_PATH=%~dp0..\..\

if not exist "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\" (
echo Missing or invalid environment variable ESSENTIALS_INSTANCE_Schneider
type "%~dp0beep"
pause
exit /B 1
)

:: Ensure Essentials has access to all necessary files & folders
cacls "%~dp0..\..\Site" /E /T /C /G "Essentials":R > "%~dp0cacls.log"
cacls "%~dp0..\..\Site" /E /T /C /G "EssentialsAdmin":F >> "%~dp0cacls.log"
cacls "%~dp0..\..\Site" /E /T /C /G "IIS_IUSRS":F >> "%~dp0cacls.log"

:: Create CommonResources folder
if not exist "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\CommonResources" (
mkdir "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\CommonResources"
)

:: Re-create symlink to CommonResources
if exist "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\CommonResources\Schneider" (
"%~dp0junction" -d "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\CommonResources\Schneider"
)
if exist "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\CommonResources\Schneider" (
echo Could not create junction to "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\CommonResources\Schneider" - file or directory already exists.
type "%~dp0beep"
pause
exit /B 1
)
"%~dp0junction" "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\CommonResources\Schneider" "%SOURCE_PATH%\Site\CommonResources\Schneider"

:: Re-create new junction to Site
if exist "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\BarcodeScanner" (
"%~dp0junction" -d "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\BarcodeScanner"
)
if exist "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\BarcodeScanner" (
echo Could not create junction to "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\BarcodeScanner" - file or directory already exists.
type "%~dp0beep"
pause
exit /B 1
)
"%~dp0junction" "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%\REST Elements\Sites\BarcodeScanner" "%SOURCE_PATH%\Site\BarcodeScanner"

:: Re-set current version of Essentials
if exist "%SOURCE_PATH%\GeocortexEssentials" (
"%~dp0junction" -d "%SOURCE_PATH%\GeocortexEssentials"
)
if exist "%SOURCE_PATH%\GeocortexEssentials" (
echo Could not create junction to "%SOURCE_PATH%\GeocortexEssentials" - file or directory already exists.
type "%~dp0beep"
pause
exit /B 1
)
"%~dp0junction" "%SOURCE_PATH%\GeocortexEssentials" "%ESSENTIALS_PROGRAMDIR%\SchneiderElectric\ArcFM Web\%ESSENTIALS_INSTANCE_Schneider%"

:: Copy presentation wf dll to make available to VStudio
copy /Y "%SOURCE_PATH%\GeocortexEssentials\Workflow Designer\Geocortex.Workflow.Activities.dll" "%SOURCE_PATH%\_Libraries\Geocortex.Workflow.Activities.dll"
copy /Y "%SOURCE_PATH%\GeocortexEssentials\Workflow Designer\Geocortex.Workflow.Activities.Presentation.dll" "%SOURCE_PATH%\_Libraries\Geocortex.Workflow.Activities.Design.dll"

if %ESSENTIALS_INSTANCE_Schneider% == Default (
SET INSTANCE_TOKEN=/
) else (
SET INSTANCE_TOKEN=/%ESSENTIALS_INSTANCE_Schneider%/
)

echo Junctions created
pause