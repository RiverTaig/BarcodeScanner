
:: For the person creating the project structure:
:: replace the variable values in the 3 lines below
:: and execute this batch script.
::
:: CLIENT should be a short name representing the client. It will be used to identify the version of Essentials to be used, in the environment variable
:: ORG represents a sub-organization for the client. If not relevant, this can be set to the same as CLIENT. This will be used for the CommonResources folder in Sites, and will also be used in namespaces and dll/xap names
:: PROJECT will be used in xap names, dll names, and namespaces. It should be a short name or acronym describing the project. Talk to the PM if you do not know what to use here
:: SITE is the id of the initial site created for the project
set CLIENT=Schneider
set ORG=Schneider
set PROJECT=LINK
set SITE=BarcodeScanner

rename "%~dp0..\..\Site\_SITE_\Viewers\_SITE_hv" %SITE%_hv
rename "%~dp0..\..\Site\_SITE_" %SITE%
rename "%~dp0..\..\Site\CommonResources\$ORG$" %ORG%
rename "%~dp0..\..\GeocortexProjectTemplate.sln" %SITE%.sln
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\..\README_ENV_SETUP.txt" $CLIENT$ "%CLIENT%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\EnvironmentSetup\CreateJunctions.bat" $CLIENT$ "%CLIENT%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\EnvironmentSetup\CreateJunctions.bat" $SITE$ "%SITE%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\EnvironmentSetup\CreateJunctions.bat" $ORG$ "%ORG%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\EnvironmentSetup\RemoveJunctions.bat" $CLIENT$ "%CLIENT%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\EnvironmentSetup\RemoveJunctions.bat" $SITE$ "%SITE%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\EnvironmentSetup\RemoveJunctions.bat" $ORG$ "%ORG%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\EnvironmentSetup\SetEnvironmentVariable.bat" $CLIENT$ "%CLIENT%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\SiteMigration\SiteMigrationConfigurationTemplate.xml" $SITE$ "%SITE%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\SiteMigration\SiteMigrationConfigurationTemplate.xml" $ORG$ "%ORG%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\SiteMigration\MigrateSite.bat" $CLIENT$ "%CLIENT%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\SiteMigration\MigrateSite.bat" $SITE$ "%SITE%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\..\Site\Site.csproj" $ORG$ "%ORG%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\..\Site\Site.csproj" $SITE$ "%SITE%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\..\Site\%SITE%\Site.xml" $SITE$ "%SITE%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\..\Site\%SITE%\Viewers\%SITE%_hv\VirtualDirectory\Resources\Config\Default\_Example_Snippets.json.js" $SITE$ "%SITE%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\..\Viewer\HTML5\HTML5ViewerModules\HTML5ViewerModules.csproj" $SITE$ "%SITE%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\..\Viewer\HTML5\HTML5ViewerModules\HTML5ViewerModules.csproj" $SITE$ "%SITE%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\..\Viewer\HTML5\HTML5ViewerModules\ResourceManifest.xml" $SITE$ "%SITE%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\..\WorkflowActivities\WorkflowActivities.csproj" $ORG$ "%ORG%"
"%~dp0..\FindAndReplaceText.exe" "%~dp0..\..\WorkflowActivities\WorkflowActivities.csproj" $PROJECT$ "%PROJECT%"

echo Project structure updated
pause