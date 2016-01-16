



"modules" : [{
            "libraryId" : "BarcodeScanner_Modules", 
            "moduleName" : "TSTemplateModule",
            "moduleType" : "geocortex.services.BarcodeScanner_Modules.TSTemplateModule",
            "configuration"  : { },
            "views" : [ { 
                "id" : "TSTemplateModuleView", 
                "viewModelId" : "TSTemplateModuleViewModel", 
                "type" : "geocortex.services.BarcodeScanner_Modules.TSTemplateModuleView", 
                "markup" : "Modules/TSTemplate/TSTemplateModuleView.html", 
                "region" : "BarcodeScannerContainerRegion",
                "visible" : true,
                "title" : "TypeScript Module",
                "configuration" : { 
                    "css" : [ "Modules/TSTemplate/TSTemplateModule.css" ] 
                } 
            }], 
            "viewModels" : [ { 
                "id" : "TSTemplateModuleViewModel", 
                "type" : "geocortex.services.BarcodeScanner_Modules.TSTemplateModuleViewModel", 
                "configuration" : {
                    "greeting" : "TypeScript Module, Hello From Config!"
                } 
            }]
        }, {
            "libraryId" : "BarcodeScanner_Modules", 
            "moduleName" : "JSTemplateModule",
            "title" : "Javascript Module",
            "moduleType" : "geocortex.services.BarcodeScanner_Modules.JSTemplateModule",
            "configuration"  : { },
            "views" : [ { 
                "id" : "JSTemplateModuleView", 
                "viewModelId" : "JSTemplateModuleViewModel", 
                "type" : "geocortex.services.BarcodeScanner_Modules.JSTemplateModuleView", 
                "markup" : "Modules/JSTemplate/JSTemplateModuleView.html", 
                "region" : "BarcodeScannerContainerRegion",
                "visible" : true,
                "title" : "JavaScript Module",
                "configuration" : { 
                    "css" : [ "Modules/JSTemplate/TSTemplateModule.css" ] 
                } 
            }], 
            "viewModels" : [ { 
                "id" : "JSTemplateModuleViewModel", 
                "type" : "geocortex.services.BarcodeScanner_Modules.JSTemplateModuleViewModel", 
                "configuration" : {
                    "greeting" : "Javascript Module, Hello From Config!"
                } 
            }]
        }
	]
	

ViewContainer	
	
	{ 
		"id" : "BarcodeScannerContainerView",
		"viewModelId" : "BarcodeScannerContainerViewModel",
		"visible" : true,
		"isManaged" : true,
		"title" : "BarcodeScanner Modules",
		"iconUri" : "Resources/Images/Icons/data-edit-24.png",
		"libraryId" : "Framework.UI",
		"type" : "geocortex.framework.ui.ViewContainer.ViewContainerView",
		"markup" : "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
		"region" : "DataRegion",
		"configuration" : { }
	}
	
	{ 
		"id" : "BarcodeScannerContainerViewModel",
		"type" : "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
		"configuration" : { 
			"containerRegionName" : "BarcodeScannerContainerRegion",
			"headerIsVisible" : true,
			"backButtonOnRootView" : false,
			"showBackButtonAsX" : false,
			"showHostedViews" : true,
			"ordering" : { 
				"TSTemplateModuleView" : 0,
				"JSTemplateModuleView" : 1
			}
		}
	}