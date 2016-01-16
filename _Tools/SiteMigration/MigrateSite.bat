@echo off
if not defined ESSENTIALS_INSTANCE_Schneider (
  echo ESSENTIALS_INSTANCE_Schneider has not been set
  pause
  exit /B 1
)
if %ESSENTIALS_INSTANCE_Schneider% == Default (
  set ESSENTIALS_WEBINSTANCE=/
) else (
  set ESSENTIALS_WEBINSTANCE=/%ESSENTIALS_INSTANCE_Schneider%/
)
copy /Y "%~dp0SiteMigrationConfigurationTemplate.xml" "%~dp0SiteMigrationConfiguration.xml"
"%~dp0..\FindAndReplaceText.exe" "%~dp0SiteMigrationConfiguration.xml" {Instance} %ESSENTIALS_INSTANCE_Schneider%
"%~dp0..\FindAndReplaceText.exe" "%~dp0SiteMigrationConfiguration.xml" Essentials/{WebInstance}/REST Essentials%ESSENTIALS_WEBINSTANCE%REST
SiteMigration.exe BarcodeScanner dev sandbox

echo Site migration complete
pause