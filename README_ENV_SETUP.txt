This project is dependent on a local installation of
Geocortex Essentials.  To register the site and viewer correctly
with your local Essentials instance, do the following BEFORE
opening Visual Studio:

1. Create a system environment variable with the following name:
   ESSENTIALS_INSTANCE_Schneider
   Set the value for this environment variable to the name of the
   Essentials instance used for this project (e.g. Default, Web310, GE310).
   
   ** Note that you may edit and run SetEnvironmentVariable.bat as
      a convenience for this.
   
2. Verify the user account running the application pool for your Essentials
   instance.  If it is the default (Essentials and EssentialsAdmin users
   running Essentials and REST Manager respectively), you do not need to do
   anything.  If you have set the application pools to run as a different
   user account, you must change lines 16 and 17 in the following file:
   
   _Tools\EnvironmentSetup\CreateJunctions.bat
   
   Change the user names Essentials and/or EssentialsAdmin to match the
   user accounts used in your environment, and save the file.  Do not 
   commit this change back to Subversion.
   
3. Execute _Tools\EnvironmentSetup\CreateJunctions.bat as administrator.
   
Notes:

The viewer .xap files have been unzipped inside the SilverlightViewer's
ClientBin directory.  Assembly references required inside other projects 
such as SilverlightViewerModules should be added directly from this 
ClientBin directory.

Assembly references required inside other projects for core Geocortex 
Essentials components should be added directly from the GeocortexEssentials
junction's REST\bin or Workflow Designer directory.

Upgrades:

To upgrade the Essentials version used by the project:
 * Exit out of Visual Studio.
 * Execute _Tools\EnvironmentSetup\RemoveJunctions.bat.
 * Install Geocortex Essentials as normal. 
 * Follow steps 1 and 2 from the top of this README file.  You will likely be
   using a different Essentials instance name in SetEnvironmentVariable.bat.

To upgrade the Silverlight or HTML5 Viewer version used by the project:
 * Change the svn:external property for the SilverlightViewer or HTML5Viewer on the parent
   Viewer\Silverlight or Viewer\HTML5 folder to reflect the new viewer version
   you want.  If the version you need is not already in SVN in the external
   directory, this will need to be added first - see documentation on 
   steps required for this.
 * Commit the property change to SVN.
 * Update from SVN - this will pull down the new viewer

Note you should have a local copy of the SilverlightViewer management pack
installed into your Essentials instance - you need to use REST Manager to
upgrade the viewer configs appropriately for the new SilverlightViewer
version once you upgrade the Silverlight Viewer in the dev environment.
