{
  "configuration": {
    "version": "2.5",
    "application": {
      "proxyUri": "proxy.ashx?",
      "allowUnsafeContent": false,
      "offlineStorageSpaceMb": "50",
      "geometryServiceUrl": "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer"
    },
    "defaultLibraryId": "Mapping",
    "libraries": [
      {
        "id": "Framework.UI",
        "uri": "Resources/Compiled/Framework.UI.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Framework.UI.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping.Infrastructure",
        "uri": "Resources/Compiled/Mapping.Infrastructure.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.Infrastructure.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping",
        "uri": "Resources/Compiled/Mapping.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.en-US.json.js"
          }
        ]
      },
      {
        "id": "Charting",
        "uri": "Resources/Compiled/Charting.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Charting.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping.Charting",
        "uri": "Resources/Compiled/Mapping.Charting.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.Charting.en-US.json.js"
          }
        ]
      }
    ],
    "modules": [
      {
        "moduleName": "Log",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogModule",
        "views": [
          {
            "id": "LogView",
            "viewModelId": "LogViewModel",
            "visible": false,
            "markup": "Mapping/modules/Log/LogView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogView",
            "region": "ApplicationRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "LogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Accessibility",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityModule",
        "configuration": {
          "keyboardFocusIndicatorEnabled": true,
          "expandedMapKeyboardAccessibility": true,
          "automaticElementFocusing": true,
          "providers": [
            {
              "id": "MapTextProvider",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.MapTextProvider",
              "decimalPrecision": 4,
              "readAttributionInformation": false,
              "isEnabled": true
            },
            {
              "id": "ViewActivatorProvider",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.ViewActivatorProvider",
              "isEnabled": true,
              "notifications": {
                "LogView": "@language-accessibility-map-debug-log",
                "TabbedToolbarView": "@language-accessibility-map-toolbar",
                "ResultsTableView": "@language-accessibility-map-results-table",
                "FeatureDetailsExpandedView": "@language-accessibility-map-feature-details-expanded",
                "CompactToolbarView": "@language-accessibility-map-compact-toolbar",
                "ChartingView": "@language-accessibility-map-charting",
                "ExternalComponentView": "@language-accessibility-map-external-component",
                "PrintingView": "@language-accessibility-map-printing",
                "ExportMapView": "@language-accessibility-map-export-map",
                "IWantToMenuView": "@language-accessibility-map-iwtm",
                "BookmarksView": "@language-accessibility-map-bookmarks",
                "ClearDataView": "@language-accessibility-map-clear-offline-data",
                "ShareView": "@language-accessibility-map-share",
                "ServiceLayersFailureView": "@language-accessibility-map-service-layers-failure",
                "SignInErrorView": "@language-accessibility-map-sign-in-error"
              },
              "subviewNotifications": {
                "TemplatePickerView": "@language-accessibility-map-create-feature",
                "EditorView": "@language-accessibility-map-edit-feature",
                "CreateOrEditView": "@language-accessibility-map-create-or-edit",
                "MultiFeatureSelectorView": "@language-accessibility-map-select-feature-for-editing",
                "AttachFileView": "@language-accessibility-map-attach-file",
                "MapDataMenuView": "@language-accessibility-map-offline-management-options",
                "EditLogView": "@language-accessibility-map-edit-log-view",
                "FeatureLayerDetailsView": "@language-accessibility-map-feature-layer-details",
                "FeatureLayerListView": "@language-accessibility-map-feature-layer-list",
                "LayerListView": "@language-accessibility-map-layer-list",
                "LayerActionsView": "@language-accessibility-map-layer-actions",
                "LegendView": "@language-accessibility-map-legend",
                "VisualizationView": "@language-accessibility-map-visualization-view",
                "InfoView": "@language-accessibility-map-info",
                "ResultsListView": "@language-accessibility-map-results-list",
                "FeatureDetailsCompactView": "@language-accessibility-map-feature-details-compact",
                "BufferOptionsView": "@language-accessibility-map-buffer-options",
                "IdentifyLayerSelectorView": "@language-accessibility-map-identifiable-layers",
                "SnappingLayerSelectorView": "@language-accessibility-map-snappable-layers",
                "SimpleQueryBuilderView": "@language-accessibility-map-simple-query",
                "SimpleFilterBuilderView": "@language-accessibility-map-simple-filter",
                "PlaceholderView": "@language-accessibility-map-placeholder",
                "WorkflowListView": "@language-accessibility-map-workflows"
              }
            }
          ]
        },
        "views": [
          {
            "id": "AccessibilityView",
            "viewModelId": "AccessibilityViewModel",
            "visible": true,
            "type": "geocortex.framework.ui.ViewBase",
            "markup": "Mapping/modules/Accessibility/AccessibilityView.html",
            "region": "AccessibilityRegion"
          },
          {
            "id": "AccessibilityIconView",
            "viewModelId": "AccessibilityIconViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityIconView",
            "markup": "Mapping/modules/Accessibility/AccessibilityIconView.html",
            "region": "ModalWindowRegion"
          }
        ],
        "viewModels": [
          {
            "id": "AccessibilityViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityViewModel",
            "configuration": {}
          },
          {
            "id": "AccessibilityIconViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityIconViewModel",
            "configuration": {
              "included": true,
              "content": "%3Cp%3E%0AThis%20application%20provides%20enhanced%20access%20to%20end-users%20with%20disabilities%3A%20it%20enables%20full%20keyboard%20control%2C%20is%20screen%20reader%20friendly%2C%20and%20contains%20other%20features%20to%20make%20mapping%20technology%20more%20accessible%20to%20the%20largest%20possible%20audience%20of%20potential%20users%2C%20regardless%20of%20their%20level%20of%20ability.%20%3Cbr%3E%3Cbr%3E%20Geocortex%20Viewer%20for%20HTML5%20conforms%20to%20%3Ca%20href%3D%22http%3A%2F%2Fwww.w3.org%2FTR%2FWCAG20%2F%22%20target%3D%22_blank%22%3EWCAG%202.0%3C%2Fa%3E%20level%20AA%20(international%20%26amp%3B%20United%20States)%2C%20as%20part%20of%20Latitude%20Geographics'%20Geocortex%20Essentials%20technology%20for%20Esri's%20ArcGIS%20platform.%0A%3C%2Fp%3E",
              "title": "@language-accessibility-map-title"
            }
          }
        ]
      },
      {
        "moduleName": "Alert",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.alert.AlertModule",
        "configuration": {
          "alertRegion": "ModalWindowRegion",
          "overrideNativeAlert": true
        }
      },
      {
        "moduleName": "Authentication",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.authentication.AuthenticationModule",
        "configuration": {
          "region": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "Banner",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerModule",
        "configuration": {},
        "views": [
          {
            "id": "BannerView",
            "viewModelId": "BannerViewModel",
            "visible": true,
            "markup": "Mapping/modules/Banner/BannerView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerView",
            "region": "HeaderRegion",
            "configuration": {}
          },
          {
            "id": "AccessibilityButtonView",
            "viewModelId": "AccessibilityIconViewModel",
            "visible": true,
            "markup": "Mapping/modules/Accessibility/AccessibilityButtonView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityButtonView",
            "region": "BannerContentRegion",
            "configuration": {}
          },
          {
            "id": "UserInfoView",
            "viewModelId": "UserInfoViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserInfoView",
            "markup": "Mapping/modules/User/UserInfoView.html",
            "region": "BannerContentRegion"
          },
          {
            "id": "SignInView",
            "viewModelId": "SignInViewModel",
            "visible": false,
            "markup": "Mapping/modules/User/SignInView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.SignInView",
            "region": "BannerContentRegion",
            "configuration": {}
          },
          {
            "id": "SearchView",
            "viewModelId": "SearchViewModel",
            "visible": true,
            "title": "@language-search-title",
            "iconUri": "Resources/Images/Icons/Toolbar/search-32.png",
            "markup": "Mapping/modules/Search/SearchView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchView",
            "region": "BannerContentRegion",
            "configuration": {}
          },
          {
            "id": "SearchHintsView",
            "viewModelId": "SearchViewModel",
            "visible": false,
            "markup": "Mapping/modules/Search/SearchHintsView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchHintsView",
            "region": "SearchHintsRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "BannerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerViewModel",
            "configuration": {
              "applicationTitle": "",
              "applicationSubtitle": "",
              "titleColor": "#1B7DBF",
              "subtitleColor": "#959398",
              "backgroundColor": "#FFFFFF",
              "backgroundImage": "Resources/Images/Banners/default-banner-bg.png",
              "leftImage": "Resources/Images/Banners/default-banner.png",
              "rightImage": "",
              "height": 60,
              "leftImageDescription": "@language-banner-title",
              "rightImageDescription": ""
            }
          }
        ]
      },
      {
        "moduleName": "BarcodeScanner",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.barcodescanner.BarcodeScannerModule",
        "configuration": {
          "htmlScannerView": "BarcodeScannerView"
        },
        "views": [
          {
            "id": "BarcodeScannerView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.barcodescanner.BarcodeScannerView",
            "viewModelId": "BarcodeScannerViewModel",
            "visible": false,
            "markup": "Mapping/modules/BarcodeScanner/BarcodeScannerView.html",
            "region": "ApplicationRegion",
            "configuration": {
              "jsqrcodeSource": "Resources/Scripts/jsqrcode.min.js",
              "jobDecoderWorkerSource": "Resources/Scripts/JobDecoderWorker.min.js"
            }
          }
        ],
        "viewModels": [
          {
            "id": "BarcodeScannerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.barcodescanner.BarcodeScannerViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Basemap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapModule",
        "configuration": {},
        "views": [
          {
            "id": "BasemapView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapView",
            "markup": "Mapping/modules/Basemap/BasemapView.html",
            "region": "BottomLeftMapRegion",
            "visible": true,
            "configuration": {}
          },
          {
            "id": "BasemapSwitcherButtonView",
            "viewModelId": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherButtonView",
            "markup": "Mapping/modules/Basemap/BasemapSwitcherButtonView.html",
            "region": "BasemapRegion",
            "visible": true,
            "configuration": {
              "hideIfNoBasemapsAvailable": true
            }
          },
          {
            "id": "BasemapSliderView",
            "viewModelId": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSliderView",
            "markup": "Mapping/modules/Basemap/BasemapSliderView.html",
            "region": "BasemapRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Bookmarks",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksModule",
        "configuration": {},
        "views": [
          {
            "id": "BookmarksView",
            "viewModelId": "BookmarksViewModel",
            "markup": "Mapping/modules/Bookmarks/BookmarksView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "region": "ModalWindowRegion",
            "title": "@language-toolbar-bookmark",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "BookmarksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksViewModel",
            "configuration": {
              "bookmarksEnabled": true,
              "showBookmarksButton": false
            }
          }
        ]
      },
      {
        "moduleName": "Browser",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.browser.BrowserModule",
        "configuration": {
          "title": "@language-browser-title"
        }
      },
      {
        "moduleName": "Buffer",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.buffer.BufferModule",
        "configuration": {
          "bufferProjectionWkid": "",
          "behaviors": [
            {
              "name": "BufferOptionsDismissedBehavior",
              "event": "BufferOptionsDismissedEvent",
              "commands": [
                "CloseDataFrame"
              ]
            },
            {
              "name": "BufferingErrorBehavior",
              "event": "BufferingErrorEvent",
              "commands": [
                "OpenDataFrame"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "BufferOptionsView",
            "viewModelId": "BufferOptionsViewModel",
            "markup": "Mapping/modules/Buffer/BufferOptionsView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.buffer.BufferOptionsView",
            "region": "DataRegion",
            "title": "@language-buffer-options-view",
            "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
            "visible": false,
            "configuration": {
              "targetCommands": [
                "Identify",
                "IdentifyBufferedGeometry",
                "IdentifyBufferedFeature",
                "IdentifyBufferedFeatureSetCollection",
                "IdentifyBufferedFeatureSet"
              ]
            }
          }
        ],
        "viewModels": [
          {
            "id": "BufferOptionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.buffer.BufferOptionsViewModel",
            "configuration": {
              "bufferUnits": [
                "feet",
                "yard",
                "meter",
                "kilometer",
                "mile",
                "nauticalmile"
              ],
              "defaultBufferUnit": "kilometer",
              "defaultBufferDistance": 0
            }
          }
        ]
      },
      {
        "moduleName": "Charting",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingModule",
        "libraryId": "Mapping.Charting",
        "configuration": {
          "infrastructureLibraryId": "Charting",
          "adapters": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.FeatureChartPointAdapter",
              "source": "Field",
              "configuration": {}
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.DataLinkChartPointAdapter",
              "source": "DataLink",
              "configuration": {}
            }
          ],
          "behaviors": [
            {
              "name": "ChartPointMouseHoverBeginBehavior",
              "event": "ChartPointMouseHoverBeginEvent",
              "commands": [
                "ClearChartHighlights",
                "HighlightChartFeatureSet"
              ]
            },
            {
              "name": "ChartPointMouseHoverEndBehavior",
              "event": "ChartPointMouseHoverEndEvent",
              "commands": [
                "ClearChartHighlights"
              ]
            },
            {
              "name": "ChartPointMouseDownBehavior",
              "event": "ChartPointMouseDownEvent",
              "commands": [
                "ShowMap",
                "RunChartFeatureActions"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "ChartingView",
            "viewModelId": "ChartingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingView",
            "markup": "Mapping.Charting/modules/Charting/ChartingView.html",
            "libraryId": "Mapping.Charting",
            "region": "BottomPanelRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ChartingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingViewModel",
            "libraryId": "Mapping.Charting",
            "configuration": {
              "chartingEnabled": true,
              "chartConfiguration": {
                "animationsEnabled": true,
                "gradientsEnabled": false,
                "interactiveLegendEnabled": false,
                "pieStartAngle": 180,
                "renderAs": "svg"
              },
              "infrastructureLibraryId": "Charting",
              "containerRegionName": "ChartingRegion",
              "containerRegionType": "geocortex.framework.ui.DivStackRegionAdapter",
              "showXButton": true,
              "defaultViewIcon": "Resources/Images/Icons/Toolbar/search-24.png",
              "headerIsVisible": true,
              "showHeaderForStandaloneViews": false,
              "backButtonOnRootView": false,
              "showBackButtonAsX": true,
              "showMaximizeButton": true,
              "showHostedViews": false,
              "resizeY": true,
              "ordering": {}
            }
          }
        ]
      },
      {
        "moduleName": "ClusterLayers",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerModule",
        "configuration": {},
        "views": [
          {
            "id": "ClusterLayerView",
            "viewModelId": "ClusterLayerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerView",
            "markup": "Mapping/modules/ClusterLayers/ClusterLayerView.html",
            "region": "LayerVisualizationRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ClusterLayerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "CompactToolbar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarModule",
        "configuration": {
          "isEnabled": false,
          "transientElements": [
            {
              "stateName": "MeasureState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": []
            },
            {
              "stateName": "MeasureState",
              "widgetId": "MeasurementToolTransientToolbar",
              "region": "CompactToolbarTransientRegion"
            },
            {
              "stateName": "DrawMarkupState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "ChangeMarkupStyle",
                  "type": "button",
                  "name": "@language-toolbar-markup-change-markup-style",
                  "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                  "command": "CreateMarkupStyleView",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png"
                }
              ]
            },
            {
              "stateName": "EditingMarkupState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "ChangeMarkupStyle",
                  "type": "button",
                  "name": "@language-toolbar-markup-change-markup-style",
                  "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                  "command": "CreateMarkupStyleView",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png"
                }
              ]
            },
            {
              "stateName": "EditingMeasurementMarkupState",
              "widgetId": "MeasurementToolTransientToolbar",
              "region": "CompactToolbarTransientRegion"
            },
            {
              "stateName": "FindDataState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "FindDataBufferingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "toggleStateName": "FindDataBufferingState",
                  "toggleOn": {
                    "name": "@language-toolbar-buffering-enable",
                    "command": "ActivateBufferingAndDisplayOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-buffering-disable",
                    "command": "DeactivateBufferingAndDismissOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-disable"
                  }
                },
                {
                  "id": "ChangeIdentifiableLayers",
                  "type": "button",
                  "name": "@language-toolbar-identify-layers-change",
                  "tooltip": "@language-toolbar-identify-layers-change-tooltip",
                  "command": "ActivateSelectLayersForIdentify",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png"
                }
              ]
            },
            {
              "stateName": "FeaturePlacementPointGraphicState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "CreateFeatureWithGeolocation",
                  "type": "button",
                  "name": "@language-toolbar-editing-create-new-feature-geolocation",
                  "tooltip": "@language-toolbar-editing-create-new-feature-geolocation-tooltip",
                  "command": "Geolocate",
                  "commandParameter": {
                    "toolFriendly": true
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/geolocate.png"
                }
              ]
            }
          ],
          "toolbarGroups": [
            {
              "id": "compactToolbar",
              "type": "toolbarGroup",
              "name": "Compact Toolbar",
              "items": [
                {
                  "id": "HomeButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                  "command": "ActivateHomePanel",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-home-sub",
                  "tooltip": "@language-toolbar-navigation-home-tooltip"
                },
                {
                  "id": "InitialExtentButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-initial-24.png",
                  "command": "ZoomToInitialExtent",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-navigation-initial-extent",
                  "tooltip": "@language-toolbar-navigation-initial-extent-tooltip"
                },
                {
                  "id": "PointIdentifyTool-Navigation",
                  "type": "tool",
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                  "command": "Identify",
                  "drawMode": "RECTANGLE",
                  "name": "@language-toolbar-tasks-identify",
                  "tooltip": "@language-toolbar-identify-point-tooltip",
                  "hideOnDisable": false,
                  "isSticky": false,
                  "statusText": "@language-toolbar-identify-point-desc"
                },
                {
                  "id": "PrintMapButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
                  "command": "PrintMap",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-tasks-print-map",
                  "tooltip": "@language-toolbar-tasks-print-map-tooltip"
                },
                {
                  "id": "ExportMapButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/share-map-24.png",
                  "command": "ShowExportMapDialog",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-tasks-export-map",
                  "tooltip": "@language-toolbar-tasks-export-map-tooltip"
                }
              ]
            }
          ]
        },
        "viewModels": [
          {
            "id": "CompactToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarViewModel",
            "configuration": {
              "toolbarVisibleTools": 4,
              "toolbarOpenByDefault": false,
              "toolbarGroupRefs": [
                "compactToolbar"
              ]
            }
          },
          {
            "id": "CompactToolbarTransientViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientViewModel",
            "configuration": {}
          }
        ],
        "views": [
          {
            "id": "CompactToolbarView",
            "viewModelId": "CompactToolbarViewModel",
            "visible": true,
            "title": "@language-compact-toolbar-name",
            "region": "TopRightMapRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarView",
            "markup": "Mapping/modules/Toolbar/CompactToolbar/CompactToolbarView.html",
            "configuration": {}
          },
          {
            "id": "CompactToolbarFlyoutView",
            "viewModelId": "CompactToolbarViewModel",
            "visible": true,
            "title": "@language-toolbar-multi-tool",
            "region": "CompactToolbarFlyoutDropdown",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarFlyoutView",
            "markup": "Mapping/modules/Toolbar/Templates/ToolbarFlyoutDropdownTemplate.html",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Confirm",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.confirm.ConfirmModule",
        "configuration": {
          "confirmRegion": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "Editing",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditingModule",
        "configuration": {
          "behaviors": [
            {
              "name": "EditorFeatureSelectedBehavior",
              "commands": [
                "ZoomToFeature",
                "SetActiveHighlightLayerDefault",
                "ClearHighlights",
                "HighlightFeature"
              ]
            },
            {
              "name": "EditorRemoveFeatureSelectedBehavior",
              "commands": [
                "SetActiveHighlightLayerDefault",
                "ClearHighlights"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "MapDataMenuView",
            "viewModelId": "EditingMapDataMenuViewModel",
            "libraryId": "Mapping.Infrastructure",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuView",
            "markup": "Mapping/infrastructure/menus/MenuView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-feature-offline-tools",
            "description": "@language-common-feature-template-picker-desc",
            "configuration": {
              "menuId": "MapDataMenu"
            }
          },
          {
            "id": "TemplatePickerView",
            "viewModelId": "TemplatePickerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/file-add-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerView",
            "markup": "Mapping/modules/Editing/TemplatePicker/TemplatePickerView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-common-feature-template-picker",
            "description": "@language-common-feature-template-picker-desc",
            "configuration": {}
          },
          {
            "id": "EditorView",
            "viewModelId": "EditorViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditorView",
            "markup": "Mapping/modules/Editing/Editor/EditorView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-common-feature-editing",
            "description": "@language-common-feature-editing-desc",
            "configuration": {
              "showXButton": false
            }
          },
          {
            "id": "EditLogView",
            "viewModelId": "EditLogViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.EditLogView",
            "markup": "Mapping/modules/FeatureLayer/EditLogView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "title": "@language-feature-layer-edits-and-sync",
            "description": "@language-common-feature-editlog-desc",
            "configuration": {}
          },
          {
            "id": "CreateOrEditView",
            "viewModelId": "CreateOrEditViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.CreateOrEditView",
            "markup": "Mapping/modules/Editing/CreateOrEdit/CreateOrEditView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-feature-editing-create-edit",
            "description": "@language-feature-editing-create-edit-description",
            "configuration": {}
          },
          {
            "id": "MultiFeatureSelectorView",
            "viewModelId": "MultiFeatureSelectorViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.MultiFeatureSelectorView",
            "markup": "Mapping/modules/Workflow/DisplayResultPickerView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-feature-editing-multi-feature-selector",
            "description": "@language-feature-editing-multi-feature-selector-description",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "TemplatePickerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerViewModel",
            "configuration": {}
          },
          {
            "id": "EditLogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.EditLogViewModel",
            "configuration": {}
          },
          {
            "id": "EditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditorViewModel",
            "configuration": {
              "editGeometry": true,
              "validateGeometry": true,
              "tools": [
                {
                  "name": "EditingPointTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POINT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "statusText": "@language-feature-editing-dsk-point-tool",
                  "keyboardStatusText": "@language-feature-editing-dsk-point-tool-keyboard"
                },
                {
                  "name": "EditingLineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "LINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-feature-editing-dsk-line-tool"
                },
                {
                  "name": "EditingPolylineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POLYLINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-feature-editing-dsk-polyline-tool",
                  "keyboardStatusText": "@language-feature-editing-dsk-polyline-tool-keyboard"
                },
                {
                  "name": "EditingFreehandPolylineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "FREEHAND_POLYLINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-feature-editing-dsk-freehand-polyline-tool"
                },
                {
                  "name": "EditingPolygonTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POLYGON",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                  "statusText": "@language-feature-editing-dsk-polygon-tool",
                  "keyboardStatusText": "@language-feature-editing-dsk-polygon-tool-keyboard"
                },
                {
                  "name": "EditingFreehandPolygonTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "FREEHAND_POLYGON",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-feature-editing-dsk-freehand-polygon-tool"
                },
                {
                  "name": "EditingCircleTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "CIRCLE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                  "statusText": "@language-feature-editing-circle-tool"
                },
                {
                  "name": "EditingEllipseTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "ELLIPSE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                  "statusText": "@language-feature-editing-ellipse-tool"
                },
                {
                  "name": "EditingRectangleTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "EXTENT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                  "statusText": "@language-feature-editing-rectangle-tool"
                }
              ]
            }
          },
          {
            "id": "EditingMapDataMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel",
            "configuration": {}
          },
          {
            "id": "CreateOrEditViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.CreateOrEditViewModel",
            "configuration": {
              "searchRadiusMeters": 100,
              "tools": [
                {
                  "name": "SelectFeaturesForEditingTool",
                  "command": "SelectFeatureForEditing",
                  "drawMode": "RECTANGLE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
                  "statusText": "@language-feature-editing-mbl-rectangle-tool"
                }
              ]
            }
          },
          {
            "id": "MultiFeatureSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.MultiFeatureSelectorViewModel",
            "configuration": {
              "displayResultPickerTemplateComplexity": "complex"
            }
          }
        ]
      },
      {
        "moduleName": "ExportMap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapModule",
        "configuration": {},
        "views": [
          {
            "id": "ExportMapView",
            "viewModelId": "ExportMapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapView",
            "markup": "Mapping/modules/ExportMap/ExportMapView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/share-map-image-24.png",
            "title": "@language-export-map-description",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ExportMapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "FeatureDetails",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsModule",
        "configuration": {
          "defaultViewMode": "compact",
          "viewModes": {
            "compact": {
              "viewId": "FeatureDetailsCompactView",
              "defaultProviderTargetRegion": "FeatureDetailsCompactViewRegion"
            },
            "expanded": {
              "viewId": "FeatureDetailsExpandedView",
              "defaultProviderTargetRegion": "FeatureDetailsBottomRegion"
            }
          },
          "providers": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionViewModel",
              "viewId": "FeatureDescriptionProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionView",
              "title": "@language-feature-description",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DescriptionView.html",
              "config": {
                "longDescription": true
              },
              "enabled": true
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksViewModel",
              "viewId": "FeatureHyperlinksProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/HyperlinksView.html",
              "title": "@language-feature-hyperlinks"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
              "viewId": "FeatureAttributesProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/MultiColumnAttributesView.html",
              "title": "@language-feature-attributes"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartViewModel",
              "viewId": "FeatureChartsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartView",
              "libraryId": "Mapping.Charting",
              "iconUri": "Resources/Images/Icons/charting-24.png",
              "markup": "Mapping.Charting/modules/Charting/SingleFeatureChartView.html",
              "title": "@language-feature-charts",
              "config": {
                "infrastructureLibraryId": "Charting",
                "containerRegionName": "SingleFeatureChartsRegion",
                "chartConfiguration": {
                  "animationsEnabled": true,
                  "gradientsEnabled": false,
                  "interactiveLegendEnabled": false,
                  "pieStartAngle": 180,
                  "renderAs": "svg"
                }
              }
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsViewModel",
              "viewId": "FeatureAttachmentsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttachmentsView.html",
              "title": "@language-feature-attachments"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesViewModel",
              "viewId": "FeatureRelationsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesView",
              "iconUri": "Resources/Images/Icons/Toolbar/file-multi-24.png",
              "markup": {
                "compact": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesView.html",
                "expanded": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesTableView.html"
              },
              "title": "@language-feature-related-features"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksViewModel",
              "viewId": "FeatureDataLinksProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "markup": {
                "compact": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DataLinksView.html",
                "expanded": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DataLinksTableView.html"
              },
              "title": "@language-feature-datalinks",
              "config": {
                "dataLinkDetailsView": "DataFrameResultsContainerRegion"
              }
            }
          ],
          "behaviors": [
            {
              "name": "FeatureDetailsOpenedBehavior",
              "event": "FeatureDetailsCurrentFeatureChanged",
              "commands": [
                "ZoomToFeature",
                "SetActiveHighlightLayerDefault",
                "ClearHighlights",
                "HighlightFeature"
              ]
            },
            {
              "name": "FeatureDetailsClosedBehavior",
              "commands": [
                "SetActiveHighlightLayerDefault",
                "ClearHighlights"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "FeatureDetailsExpandedView",
            "viewModelId": "FeatureDetailsExpandedViewModel",
            "visible": false,
            "title": "@language-feature-details-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsView",
            "libraryId": "Mapping",
            "markup": "Mapping/modules/FeatureDetails/FeatureDetailsView.html",
            "region": "ResultsRegion",
            "configuration": {
              "onDeactivated": [
                "ClearDefaultHighlights"
              ]
            }
          },
          {
            "id": "FeatureDetailsCompactView",
            "viewModelId": "FeatureDetailsCompactViewModel",
            "visible": false,
            "title": "@language-feature-details-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsView",
            "libraryId": "Mapping",
            "markup": "Mapping/modules/FeatureDetails/FeatureDetailsView.html",
            "region": "DataFrameResultsContainerRegion",
            "configuration": {
              "onDeactivated": [
                "ClearDefaultHighlights"
              ]
            }
          }
        ],
        "viewModels": [
          {
            "id": "FeatureDetailsExpandedViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsViewModel",
            "configuration": {
              "defaultTabViewForLayer": {
                "FeatureAttributesProviderView": "default"
              },
              "regions": [
                {
                  "regionName": "FeatureDetailsTopLeftRegion",
                  "regionCss": "feature-details-top-left-region"
                },
                {
                  "regionName": "FeatureDetailsTopRightRegion",
                  "regionCss": "feature-details-top-right-region"
                },
                {
                  "regionName": "FeatureDetailsBottomRegion",
                  "regionCss": "feature-details-bottom-region"
                }
              ]
            }
          },
          {
            "id": "FeatureDetailsCompactViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsViewModel",
            "configuration": {
              "regions": [
                {
                  "regionName": "FeatureDetailsCompactViewRegion",
                  "regionType": "geocortex.framework.ui.DivStackRegionAdapter",
                  "regionCss": "feature-region"
                }
              ]
            }
          }
        ]
      },
      {
        "moduleName": "FeatureLayer",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerModule",
        "configuration": {},
        "views": [
          {
            "id": "FeatureLayerDetailsView",
            "viewModelId": "FeatureLayerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerDetailsView",
            "markup": "Mapping/modules/FeatureLayer/FeatureLayerDetailsView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "title": "@language-common-feature-layer-details",
            "description": "@language-common-feature-layer-details-desc",
            "configuration": {}
          },
          {
            "id": "FeatureLayerListView",
            "viewModelId": "FeatureLayerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/layer-list-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerListView",
            "markup": "Mapping/modules/FeatureLayer/FeatureLayerListView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "title": "@language-common-feature-sync-settings",
            "description": "@language-common-feature-sync-settings-desc",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "FeatureLayerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerViewModel",
            "configuration": {
              "showWhereClause": false
            }
          }
        ]
      },
      {
        "moduleName": "Footer",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.footer.FooterModule",
        "configuration": {
          "menus": [
            {
              "id": "FooterMenu",
              "description": "@language-menu-footer-menu-desc",
              "items": [
                {
                  "text": "@language-menu-latitude-geographics",
                  "description": "@language-menu-latitude-geographics-desc",
                  "command": "OpenWebPage",
                  "commandParameter": "http://www.latitudegeo.com/"
                },
                {
                  "text": "@language-menu-powered-by-geocortex",
                  "description": "@language-menu-powered-by-geocortex-desc",
                  "command": "OpenWebPage",
                  "commandParameter": "http://www.geocortex.com/"
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "FooterView",
            "viewModelId": "FooterViewModel",
            "visible": true,
            "markup": "Mapping/modules/Footer/FooterView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.footer.FooterView",
            "region": "FooterRegion",
            "configuration": {}
          },
          {
            "id": "FooterMenuView",
            "viewModelId": "FooterMenuViewModel",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuView",
            "markup": "Mapping/infrastructure/menus/MenuHyperlinkView.html",
            "region": "RightFooterRegion",
            "visible": true,
            "configuration": {
              "menuId": "FooterMenu"
            }
          }
        ],
        "viewModels": [
          {
            "id": "FooterViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.footer.FooterViewModel",
            "configuration": {
              "backgroundColor": "#EEEEEE",
              "height": 0
            }
          },
          {
            "id": "FooterMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Geolocate",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateModule",
        "configuration": {},
        "views": [
          {
            "id": "GeolocateView",
            "title": "@language-geolocate-title",
            "viewModelId": "GeolocateViewModel",
            "markup": "Mapping/modules/Geolocate/GeolocateView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "region": "GeolocateMenuRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "GeolocateStatusView",
            "viewModelId": "GeolocateStatusViewModel",
            "markup": "Mapping/modules/Geolocate/GeolocateStatusView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateStatusView",
            "region": "BottomCenterMapRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "GeolocateViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateViewModel",
            "configuration": {
              "geolocateEnabled": true,
              "trackingEnabled": true,
              "followingEnabled": true,
              "enableHighAccuracy": true,
              "geolocateAccuracyCircleEnabled": true,
              "adjustExtentZoomOnGeolocate": true,
              "geolocateExtentZoomLevel": 50000,
              "geolocationIndicator": "Resources/Images/Icons/geolocate-position-32.png",
              "singleGeolocationProfiles": {
                "default": {
                  "accuracyThreshold": 10,
                  "timeLimit": 30000
                },
                "coarse": {
                  "accuracyThreshold": 250,
                  "timeLimit": 10000
                },
                "fine": {
                  "accuracyThreshold": 3,
                  "timeLimit": 60000
                }
              }
            }
          },
          {
            "id": "GeolocateStatusViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateStatusViewModel",
            "configuration": {
              "showGeolocateCoordinates": false,
              "showTrackingCoordinates": true,
              "showFollowingCoordinates": true,
              "coordinateFormat": "dd",
              "coordinateWkid": null,
              "coordinateFractionalDigits": 4,
              "geolocateIcon": "Resources/Images/Icons/geolocate-24.png",
              "busyIcon": "Resources/Images/loader-small.gif"
            }
          }
        ]
      },
      {
        "moduleName": "HeatMaps",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapsModule",
        "configuration": {
          "intensity": 30,
          "gradientOptions": {
            "outermostColor": "#00FFFFFF",
            "outerColor": "#FF0000FF",
            "innerColor": "#FFFF0000",
            "innermostColor": "#FFFFFF00"
          }
        },
        "views": [
          {
            "id": "HeatMapsView",
            "viewModelId": "HeatMapsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapsView",
            "markup": "Mapping/modules/HeatMaps/HeatMapsView.html",
            "region": "LayerVisualizationRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "HeatMapsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapsViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Highlight",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Highlight.HighlightModule",
        "configuration": {
          "fillColor": "#99ECEC3A",
          "borderColor": "#FFCCCC33"
        }
      },
      {
        "moduleName": "Identify",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyModule",
        "configuration": {
          "resultsDisplayName": "@language-identify-results-header",
          "identifyProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.MapIdentifyTaskIdentifyProvider",
              "enabled": true,
              "configuration": {}
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.RasterIdentifyTaskIdentifyProvider",
              "enabled": true,
              "configuration": {}
            }
          ],
          "tools": [
            {
              "name": "IdentifyPointTool",
              "command": "Identify",
              "drawMode": "POINT",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
              "statusText": "@language-mbl-identify-point-tool",
              "keyboardStatusText": "@language-toolbar-identify-point-desc-keyboard"
            },
            {
              "name": "IdentifyRectangleTool",
              "command": "Identify",
              "drawMode": "RECTANGLE",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
              "statusText": "@language-identify-rectangle-tool"
            },
            {
              "name": "IdentifyPolylineTool",
              "command": "Identify",
              "drawMode": "POLYLINE",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polyline-24.png",
              "statusText": "@language-mbl-identify-polyline-tool",
              "keyboardStatusText": "@language-toolbar-identify-polyline-desc-keyboard"
            },
            {
              "name": "IdentifyPolygonTool",
              "command": "Identify",
              "drawMode": "POLYGON",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polygon-24.png",
              "statusText": "@language-identify-polygon-tool",
              "keyboardStatusText": "@language-toolbar-identify-polygon-desc-keyboard"
            },
            {
              "name": "IdentifyFreehandPolygonTool",
              "command": "Identify",
              "drawMode": "FREEHAND_POLYGON",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-freehand-24.png",
              "statusText": "@language-identify-freehand-polygon-tool"
            }
          ],
          "topMostLayerOnly": false,
          "pixelTolerance": 5,
          "polygonPixelTolerance": 0,
          "returnGeometry": true,
          "visibleLayersOnly": true,
          "layersInVisibleScaleRangeOnly": true,
          "restrictRasterIdentifyToPoint": true
        },
        "views": [
          {
            "id": "IdentifyOptionsView",
            "viewModelId": "IdentifyOptionsViewModel",
            "visible": true,
            "markup": "Mapping/modules/Identify/IdentifyOptionsView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyOptionsView",
            "region": "IdentifyOptionsRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "IdentifyOptionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyOptionsViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Info",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoModule",
        "configuration": {},
        "views": [
          {
            "id": "InfoView",
            "viewModelId": "InfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoView",
            "markup": "Mapping/modules/Info/InfoView.html",
            "region": "HomePanelContainerRegion",
            "title": "@language-common-welcome",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "InfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoViewModel",
            "configuration": {
              "content": "%3Cp%20style%3D%22text-align%3A%20center%3B%22%3E%5BApplication%20information%20and%20actions%20here%5D%3C%2Fp%3E%3Cbr%3E%3Cp%3E%3Ci%3EUse%20this%20region%20to%20welcome%20users%2C%20make%20objectives%20of%20the%20application%20clear%2C%20and%20provide%20efficient%20access%20to%20important%20functions%20and%20workflows.%3C%2Fi%3E%3C%2Fp%3E",
              "included": true,
              "title": "@language-common-welcome"
            }
          }
        ]
      },
      {
        "moduleName": "InsightIntegration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.insightIntegration.InsightIntegrationModule",
        "configuration": {
          "enabled": false,
          "dataRelayUri": "http://localhost/Geocortex/Insight/Insight/ClientRelay",
          "dataRelayIntervalInSeconds": 30
        }
      },
      {
        "moduleName": "Integration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.integration.IntegrationModule",
        "configuration": {
          "allowedOrigins": []
        },
        "views": [
          {
            "id": "ExternalComponentView",
            "viewModelId": "ExternalComponentViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.integration.ExternalComponentView",
            "markup": "Mapping/modules/Integration/ExternalComponentView.html",
            "region": "BottomPanelRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ExternalComponentViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.integration.ExternalComponentViewModel",
            "configuration": {
              "containerRegionName": "ExternalComponentRegion",
              "containerRegionType": "geocortex.framework.ui.DivStackRegionAdapter",
              "headerIsVisible": true,
              "showXButton": true,
              "showMaximizeButton": true,
              "resizeY": true,
              "selectorIconUri": "Resources/Images/Icons/Toolbar/map-24.png",
              "selectorText": "@language-integration-selector-text",
              "statusText": "@language-integration-viewpoint-indicator-desc",
              "defaultComponents": [],
              "externalComponents": []
            }
          }
        ]
      },
      {
        "moduleName": "IWantToMenu",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuModule",
        "configuration": {
          "menus": [
            {
              "id": "Iwantto",
              "description": "@language-menu-menus-description",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                  "text": "@language-menu-home-panel",
                  "description": "@language-menu-home-panel-desc",
                  "command": "ShowHomePanel"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                  "text": "@language-menu-identify",
                  "description": "@language-menu-identify-desc",
                  "command": "SetActiveTool",
                  "commandParameter": "IdentifyRectangleTool"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
                  "text": "@language-menu-map-layers",
                  "description": "@language-menu-map-layers-desc",
                  "command": "ShowLayerList"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-initial-24.png",
                  "text": "@language-menu-zoom-initial-extent",
                  "description": "@language-menu-zoom-initial-extent-desc",
                  "command": "ZoomToInitialExtent"
                },
                {
                  "iconUri": "Resources/Images/Icons/bookmark-24.png",
                  "text": "@language-menu-bookmark-add",
                  "description": "@language-menu-bookmark-add-desc",
                  "command": "ShowAddBookmark",
                  "hideOnDisable": true
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "IWantToMenuButtonView",
            "visible": true,
            "viewModelId": "IWantToMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuButtonView",
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuButtonView.html",
            "region": "NavigationMapRegion",
            "configuration": {}
          },
          {
            "id": "IWantToMenuView",
            "viewModelId": "IWantToMenuViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuView",
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuView.html",
            "region": "IWantToMenuRegion",
            "configuration": {
              "menuId": "Iwantto"
            }
          }
        ],
        "viewModels": [
          {
            "id": "IWantToMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuViewModel",
            "configuration": {
              "showMenu": true,
              "menuTitle": "@language-menu-title"
            }
          }
        ]
      },
      {
        "moduleName": "LayerList",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListModule",
        "configuration": {
          "enableLegendIntegration": true,
          "autoActivateAncestorVisibilities": false,
          "enableLayerIcons": false,
          "onlyShowSwatchesOnVisibleLayers": false
        },
        "views": [
          {
            "id": "LayerListView",
            "viewModelId": "LayerListViewModel",
            "title": "@language-layerlist-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListView",
            "markup": "Mapping/modules/LayerList/LayerListView.html",
            "region": "LayerDataContainerRegion",
            "isManaged": false,
            "visible": false,
            "configuration": {}
          },
          {
            "id": "LayerActionsView",
            "viewModelId": "LayerActionsViewModel",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-menu-24.png",
            "markup": "Mapping/modules/LayerList/LayerActions/LayerActionsView.html",
            "title": "@language-layer-actions-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerActionsView",
            "region": "LayerDataContainerRegion",
            "configuration": {
              "menuId": "LayerActions"
            }
          }
        ],
        "viewModels": [
          {
            "id": "LayerListViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListViewModel",
            "configuration": {
              "showTransparencySlider": true,
              "autoExpandLegendSwatches": false
            }
          },
          {
            "id": "LayerActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerActionsViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "LayerSelector",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerSelector.LayerSelectorModule",
        "configuration": {
          "behaviors": [
            {
              "name": "SelectLayersForIdentifyActivatedBehavior",
              "event": "SelectLayersForIdentifyActivatedEvent",
              "commands": [
                "OpenDataFrame"
              ]
            },
            {
              "name": "SelectLayersForIdentifyDeactivatedBehavior",
              "event": "SelectLayersForIdentifyDeactivatedEvent",
              "commands": [
                "CloseDataFrame"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "IdentifyLayerSelectorView",
            "viewModelId": "IdentifyLayerSelectorViewModel",
            "title": "@language-layer-selector-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerSelector.IdentifyLayerSelectorView",
            "markup": "Mapping/modules/LayerSelector/LayerSelectorView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png",
            "region": "DataRegion",
            "visible": false,
            "isManaged": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "IdentifyLayerSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerSelector.IdentifyLayerSelectorViewModel"
          }
        ]
      },
      {
        "moduleName": "LayerThemes",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerThemes.LayerThemesModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      },
      {
        "moduleName": "Legend",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendModule",
        "configuration": {},
        "views": [
          {
            "id": "LegendView",
            "viewModelId": "LegendViewModel",
            "title": "@language-legend-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendView",
            "markup": "Mapping/modules/Legend/LegendView.html",
            "region": "LayerDataContainerRegion",
            "isManaged": false,
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "LegendViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Map",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapModule",
        "configuration": {
          "panDuration": 0,
          "panRate": 50,
          "zoomDuration": 500,
          "zoomRate": 50,
          "longClickMilliseconds": 500,
          "maxExtentLogSize": 100,
          "showLoadingStatus": true,
          "loadingMessageTiming": [
            1000,
            3000,
            3000
          ],
          "defaultPointFeatureZoomScales": [],
          "tools": [
            {
              "name": "CenterMapTool",
              "command": "PanToPoint",
              "drawMode": "POINT",
              "isSticky": true,
              "statusText": "@language-mbl-map-center"
            },
            {
              "name": "ZoomInTool",
              "command": "ZoomToExtent",
              "drawMode": "EXTENT",
              "isSticky": true,
              "statusText": "@language-map-zoom-in"
            },
            {
              "name": "ZoomOutTool",
              "command": "ZoomOutToExtent",
              "drawMode": "EXTENT",
              "isSticky": true,
              "statusText": "@language-map-zoom-out"
            }
          ],
          "behaviors": [
            {
              "name": "MapOnClickBehavior",
              "commands": [
                "InvokeMapTip",
                "ClearDefaultHighlights"
              ]
            },
            {
              "name": "MapOnLongClickBehavior",
              "commands": []
            },
            {
              "name": "MapOnFeatureClickBehavior",
              "commands": [
                "ShowMapTip"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "MapView",
            "viewModelId": "MapViewModel",
            "visible": true,
            "markup": "Mapping/modules/Map/MapView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapView",
            "region": "MapRegion",
            "configuration": {
              "wrapAround180": false,
              "extentBroadcastFrequency": 20,
              "fitTiledMapsToExtent": false,
              "showAttribution": true
            }
          }
        ],
        "viewModels": [
          {
            "id": "MapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapViewModel",
            "configuration": {
              "stepZoomFactor": 0.5,
              "panStep": 0.333
            }
          }
        ]
      },
      {
        "moduleName": "MapTips",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipsModule",
        "configuration": {
          "allowMultiple": false,
          "contentField": "longDescription",
          "webMapFeaturePresenter": {
            "force": false,
            "featurePropertyName": "currentFeature",
            "view": {
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttributesView.html",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
              "libraryId": "Mapping"
            },
            "viewModel": {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
              "libraryId": "Mapping"
            }
          },
          "behaviors": [
            {
              "name": "MapTipOnCloseBehavior",
              "event": "MapTipClosedEvent",
              "commands": [
                "ClearDefaultHighlights"
              ]
            },
            {
              "name": "MapCalloutClosedBehavior",
              "event": "MapCalloutClosedEvent",
              "commands": [
                "ClearDefaultHighlights"
              ]
            },
            {
              "name": "MapTipFeatureChangedBehavior",
              "commands": [
                "PanToFeatureIfOutsideMapExtent"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "MapTipView",
            "viewModelId": "MapTipViewModel",
            "markup": "Mapping/modules/MapTips/MapTipView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipView",
            "region": "NavigationMapRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "MapTipHeaderView",
            "viewModelId": "MapTipViewModel",
            "markup": "Mapping/modules/MapTips/MapTipHeaderView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipHeaderView",
            "region": "MapTipHeaderRegion",
            "visible": true,
            "configuration": {}
          },
          {
            "id": "MapTipContentView",
            "viewModelId": "MapTipViewModel",
            "markup": "Mapping/modules/MapTips/MapTipContent.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipContent",
            "region": "MapTipContentRegion",
            "visible": true,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "MapTipViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipContentViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Markers",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.markers.MarkersModule",
        "configuration": {
          "markers": []
        }
      },
      {
        "moduleName": "Markup",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupModule",
        "viewModels": [
          {
            "id": "MarkupViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupViewModel",
            "configuration": {
              "markupLayerName": "Drawings",
              "defaultPointMarkup": {
                "pointStyle": "Circle",
                "pointSize": 16,
                "pointColor": "#FF4CA0D8"
              },
              "defaultLineMarkup": {
                "lineStyle": "Dash",
                "lineWidth": 3,
                "lineColor": "#FF4CA0D8"
              },
              "defaultPolygonMarkup": {
                "polygonBorderStyle": "Solid",
                "polygonFillStyle": "Solid",
                "polygonBorderWidth": 3,
                "polygonFillColor": "#4D4CA0D8",
                "polygonBorderColor": "#FF4CA0D8"
              },
              "defaultTextMarkup": {
                "textStyle": "Normal",
                "textStyleWeight": "Normal",
                "textSize": "12pt",
                "textColor": "#FF000000",
                "textFamily": "Arial"
              },
              "customMarkupTools": {
                "point": [],
                "polyline": [],
                "polygon": [],
                "text": []
              }
            }
          },
          {
            "id": "StyleSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.styleSelector.StyleSelectorViewModel",
            "configuration": {
              "customPointStyles": [],
              "customLineStyles": [],
              "customPolygonStyles": [],
              "customTextStyles": []
            }
          },
          {
            "id": "TransientMarkupPaletteViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteViewModel",
            "configuration": {}
          }
        ],
        "views": []
      },
      {
        "moduleName": "Measurement",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementModule",
        "configuration": {
          "tools": [
            {
              "name": "MeasureDistanceTool",
              "command": "MeasureDistance",
              "drawMode": "POLYLINE",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/measure-distance-24.png",
              "statusText": "@language-measurement-measure-distance-tool-status",
              "keyboardStatusText": "@language-measurement-measure-distance-tool-status-keyboard"
            },
            {
              "name": "MeasureAreaTool",
              "command": "MeasureArea",
              "drawMode": "POLYGON",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/measure-area-24.png",
              "statusText": "@language-measurement-measure-area-tool-status",
              "keyboardStatusText": "@language-measurement-measure-area-tool-status-keyboard"
            },
            {
              "name": "DeleteMeasurementTool",
              "command": "DeleteMeasurement",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-measurement-erase-status",
              "keyboardStatusText": "@language-measurement-erase-status-keyboard"
            }
          ],
          "measurementProjectionWkid": "",
          "measurementLengthUnits": "meter",
          "measurementAreaUnits": "sqMeter",
          "coordinateFractionalDigits": 4,
          "degreeFormat": "dd",
          "angleDirectionSystem": "polar",
          "measurementResultTypes": [
            "LINE",
            "POLYGON",
            "POLYLINE",
            "RECTANGLE",
            "TRIANGLE"
          ],
          "enablePrediction": true,
          "calculationType": "preserveShape"
        },
        "views": [
          {
            "id": "MeasurementView",
            "viewModelId": "MeasurementViewModel",
            "visible": true,
            "markup": "Mapping/modules/Measurement/MeasurementView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
            "region": "MeasurementDropdownRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "MeasurementViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementViewModel",
            "configuration": {
              "markupLayerName": "Drawings",
              "lineColor": "#0000FF",
              "fillColor": "#6495ED",
              "textColor": "#000000",
              "textOffset": "5",
              "textSize": "12px",
              "addMarkupToMapByDefault": true
            }
          }
        ]
      },
      {
        "moduleName": "Menu",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Menu.MenuModule",
        "configuration": {
          "menus": [
            {
              "id": "MapDataMenu",
              "description": "@language-menu-open-offline-tools-menu",
              "defaultIconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/sync-manage-24.png",
                  "text": "@language-menu-manage-sync-settings",
                  "description": "@language-menu-manage-sync-settings-desc",
                  "command": "ActivateView",
                  "commandParameter": "FeatureLayerListView"
                },
                {
                  "text": "@language-menu-view-edit-log",
                  "description": "@language-menu-view-edit-log-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
                  "command": "ActivateView",
                  "commandParameter": "EditLogView"
                },
                {
                  "text": "@language-clear-storage",
                  "description": "@language-menu-clear-offline-data-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "ActivateView",
                  "commandParameter": "ClearDataView"
                }
              ]
            },
            {
              "id": "LayerActions",
              "description": "@language-layer-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "text": "@language-menu-add-a-feature",
                  "description": "@language-menu-add-a-feature-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/feature-create-24.png",
                  "command": "ShowFeatureTemplatePicker",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom-to-layer",
                  "description": "@language-menu-zoom-to-layer-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "command": "ZoomToLayerExtent",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom-to-visible-scale",
                  "description": "@language-menu-zoom-to-visible-scale-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-visible-extent-24.png",
                  "command": "ZoomToLayerVisibleScale",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-visualization",
                  "description": "@language-menu-visualization-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/visualizations-24.png",
                  "command": "ShowVisualizationView",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "LayerListActions",
              "description": "@language-layerlist-actions-desc",
              "items": [
                {
                  "text": "@language-menu-switch-to-legend",
                  "description": "@language-menu-switch-to-legend-desc",
                  "iconUri": "Resources/Images/Icons/legend-16.png",
                  "command": "SwitchToLegendView"
                }
              ]
            },
            {
              "id": "LegendActions",
              "description": "@language-layerlist-actions-desc",
              "items": [
                {
                  "text": "@language-menu-switch-to-layerlist",
                  "description": "@language-menu-switch-to-layerlist-desc",
                  "iconUri": "Resources/Images/Icons/layerlist-16.png",
                  "command": "SwitchToLayerView"
                }
              ]
            },
            {
              "id": "FeatureActions",
              "description": "@language-feature-actions-description",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "@language-feature-details-expanded",
                  "description": "@language-feature-details-expanded-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-tabs-24.png",
                  "batch": [
                    {
                      "command": "ShowFeatureDetailsExpanded",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    },
                    {
                      "command": "CloseDataFrame"
                    }
                  ],
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-details-compact",
                  "description": "@language-feature-details-compact-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-compact-24.png",
                  "command": "ShowFeatureDetailsCompact",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-buffer-identify-feature",
                  "description": "@language-menu-buffer-identify-feature-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "command": "IdentifyBufferedFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-layer-edit",
                  "description": "@language-feature-layer-edit-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/feature-edit-24.png",
                  "command": "StartEditingFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-native-attach-file",
                  "description": "@language-native-attach-photo",
                  "iconUri": "Resources/Images/Icons/Toolbar/attach-file-photo-24.png",
                  "command": "AttachFileToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom",
                  "description": "@language-menu-zoom-description",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-feature-24.png",
                  "command": "ZoomToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-common-pan",
                  "description": "@language-common-pan-description",
                  "iconUri": "Resources/Images/Icons/Toolbar/pan-24.png",
                  "command": "PanToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "MapTipActions",
              "description": "@language-menu-maptip-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "text": "@language-menu-maptip-actions-view-details",
                  "description": "@language-menu-maptip-actions-view-details-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "batch": [
                    {
                      "command": "ShowFeatureDetails"
                    },
                    {
                      "command": "DeactivateView",
                      "commandParameter": "MapTipView"
                    }
                  ],
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "ResultsListActions",
              "description": "@language-menu-results-list-actions-desc",
              "items": [
                {
                  "text": "@language-results-toggle-table-view",
                  "description": "@language-results-toggle-table-view-desc",
                  "libraryId": "Mapping.Infrastructure",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "ShowResultsTable",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    },
                    {
                      "command": "CloseDataFrame"
                    }
                  ],
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-table-24.png"
                },
                {
                  "text": "@language-menu-identify-buffered-feature-set-collection",
                  "description": "@language-menu-identify-buffered-feature-set-collection-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "hideOnDisable": true,
                  "command": "IdentifyBufferedFeatureSetCollection",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-show-charting-view",
                  "description": "@language-menu-show-charting-view-desc",
                  "hideOnDisable": true,
                  "command": "ShowChartingView",
                  "iconUri": "Resources/Images/Icons/Toolbar/charting-24.png"
                },
                {
                  "text": "@language-menu-export-results-to-csv",
                  "description": "@language-menu-export-results-to-csv-desc",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "csv",
                    "fsc": "{{context}}"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/csv-export-24.png"
                },
                {
                  "text": "@language-menu-export-results-to-xlsx",
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "xlsx",
                    "fsc": "{{context}}"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/xlsx-export-24.png"
                },
                {
                  "text": "@language-menu-export-results-to-shp",
                  "description": "@language-menu-export-results-to-shp-desc",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "shp",
                    "fsc": "{{context}}"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png"
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "ResultsTableActions",
              "description": "@language-menu-results-table-actions-desc",
              "items": [
                {
                  "text": "@language-results-toggle-list-view",
                  "description": "@language-results-toggle-list-view-desc",
                  "libraryId": "Mapping.Infrastructure",
                  "hideOnDisable": true,
                  "command": "ShowResultsList",
                  "commandParameter": "{{context}}",
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-list-24.png"
                },
                {
                  "text": "@language-menu-identify-buffered-feature-set-collection",
                  "description": "@language-menu-identify-buffered-feature-set-collection-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "hideOnDisable": true,
                  "command": "IdentifyBufferedFeatureSetCollection",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-show-charting-view",
                  "description": "@language-menu-show-charting-view-desc",
                  "hideOnDisable": true,
                  "command": "ShowChartingView",
                  "iconUri": "Resources/Images/Icons/Toolbar/charting-24.png"
                },
                {
                  "text": "@language-menu-export-results-to-csv",
                  "description": "@language-menu-export-results-to-csv-desc",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "csv",
                    "fsc": "{{context}}"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/csv-export-24.png"
                },
                {
                  "text": "@language-menu-export-results-to-xlsx",
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "xlsx",
                    "fsc": "{{context}}"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/xlsx-export-24.png"
                },
                {
                  "text": "@language-menu-export-results-to-shp",
                  "description": "@language-menu-export-results-to-shp-desc",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "shp",
                    "fsc": "{{context}}"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png"
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            }
          ]
        }
      },
      {
        "moduleName": "NativeIntegration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.NativeIntegrationModule",
        "configuration": {},
        "views": [
          {
            "id": "AttachFileView",
            "viewModelId": "AttachFileViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-native-attach-file",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.AttachFileView",
            "markup": "Mapping/modules/Native/AttachFileView.html",
            "region": "FeatureEditingContainerRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "AttachFileViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.AttachFileViewModel",
            "configuration": {
              "attachFileViewId": "AttachFileView"
            }
          }
        ]
      },
      {
        "moduleName": "Navigation",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.navigation.NavigationModule",
        "configuration": {},
        "views": [
          {
            "id": "DataFrameButtonView",
            "viewModelId": "DataFrameViewContainerViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.components.DataFrameButtonView",
            "markup": "Mapping/modules/Shells/Components/DataFrameButtonView.html",
            "region": "TopLeftMapRegion",
            "configuration": {}
          },
          {
            "id": "GeolocateButtonView",
            "viewModelId": "GeolocateViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "markup": "Mapping/modules/Geolocate/GeolocateButtonView.html",
            "region": "TopLeftMapRegion",
            "configuration": {}
          },
          {
            "id": "ZoomInView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomInView",
            "markup": "Mapping/modules/ZoomControl/ZoomInView.html",
            "region": "TopLeftMapRegion",
            "configuration": {}
          },
          {
            "id": "ZoomOutView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomOutView",
            "markup": "Mapping/modules/ZoomControl/ZoomOutView.html",
            "region": "TopLeftMapRegion",
            "configuration": {}
          },
          {
            "id": "BookmarksButtonView",
            "viewModelId": "BookmarksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "markup": "Mapping/modules/Bookmarks/BookmarksButtonView.html",
            "region": "TopLeftMapRegion",
            "visible": true
          }
        ],
        "viewModels": []
      },
      {
        "moduleName": "Offline",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.offline.OfflineModule",
        "configuration": {
          "basemaps": []
        },
        "views": [
          {
            "id": "MapDataMenuView",
            "viewModelId": "OfflineMapDataMenuViewModel",
            "libraryId": "Mapping.Infrastructure",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuView",
            "markup": "Mapping/infrastructure/menus/MenuView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-feature-offline-tools",
            "description": "@language-common-feature-template-picker-desc",
            "configuration": {
              "menuId": "MapDataMenu"
            }
          },
          {
            "id": "ConnectionStatusIndicatorView",
            "viewModelId": "ConnectionStatusIndicatorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offline.indicator.ConnectionStatusIndicatorView",
            "markup": "Mapping/modules/Offline/ConnectionStatusIndicator/ConnectionStatusIndicatorView.html",
            "region": "BottomLeftMapRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "ClearDataView",
            "title": "@language-clear-storage",
            "viewModelId": "ClearDataViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offline.ClearDataView",
            "markup": "Mapping/modules/Offline/ClearDataView/ClearDataView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ConnectionStatusIndicatorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offline.indicator.ConnectionStatusIndicatorViewModel",
            "configuration": {
              "enabled": false
            }
          },
          {
            "id": "ClearDataViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offline.ClearDataViewModel",
            "configuration": {}
          },
          {
            "id": "OfflineMapDataMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "OptimizerIntegration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.optimizerIntegration.OptimizerIntegrationModule",
        "configuration": {
          "enabled": false,
          "userName": "DefaultUser",
          "dataRelayUri": "http://localhost/Geocortex/Optimizer/Rest/DataRelay/LogData.ashx?f=json"
        }
      },
      {
        "moduleName": "OverviewMap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.overviewMap.OverviewMapModule",
        "configuration": {},
        "views": [
          {
            "id": "OverviewMapView",
            "viewModelId": "OverviewMapViewModel",
            "markup": "Mapping/modules/OverviewMap/OverviewMapView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.overviewMap.OverviewMapView",
            "region": "BottomRightMapRegion",
            "visible": true,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "OverviewMapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.overviewMap.OverviewMapViewModel",
            "configuration": {
              "isEnabled": true,
              "openByDefault": false,
              "extentScaleFactor": 2,
              "visibleExtentColour": "#00FFFF"
            }
          }
        ]
      },
      {
        "moduleName": "Printing",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingModule",
        "configuration": {},
        "views": [
          {
            "id": "PrintingView",
            "viewModelId": "PrintingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingView",
            "markup": "Mapping/modules/Printing/PrintingView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
            "title": "@language-print-map",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "PrintingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Prompt",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.prompt.PromptModule",
        "configuration": {
          "promptRegion": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "Pushpins",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.pushpins.PushpinsModule",
        "configuration": {
          "pushpinsEnabled": true,
          "pushpinMarkerUri": "Resources/Images/Pushpins/map-marker-red-32.png",
          "pushpinMarkerWidth": 32,
          "pushpinMarkerHeight": 32,
          "offsetX": 0,
          "offsetY": 16,
          "behaviors": [
            {
              "name": "PushpinClickedBehavior",
              "commands": [
                "ShowMapTip",
                "HighlightFeatureDefault"
              ]
            }
          ]
        }
      },
      {
        "moduleName": "QueryBuilder",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.QueryBuilderModule",
        "configuration": {},
        "views": [
          {
            "id": "SimpleQueryBuilderView",
            "viewModelId": "SimpleQueryBuilderViewModel",
            "iconUri": "Resources/Images/Icons/query-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "region": "SimpleQueryBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-simple-title",
            "configuration": {
              "wildcard": "%",
              "dateQueryFormat": "DATE '{0:yyyy-MM-dd}'",
              "textComparisonQueryFormat": "LOWER({0}) LIKE LOWER({1})",
              "numberToTextComparisonQueryFormat": "CAST({0} AS VARCHAR(50)) LIKE '{1}'",
              "doesNotContainQueryFormat": "LOWER({0}) NOT LIKE LOWER({1})",
              "allowDrawingsAsSpatialFilter": true,
              "queryProviderSupportsTimeOfDay": false,
              "mode": "query"
            }
          },
          {
            "id": "SimpleFilterBuilderView",
            "viewModelId": "SimpleFilterBuilderViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "region": "SimpleFilterBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-simple-filter-title",
            "configuration": {
              "wildcard": "%",
              "dateQueryFormat": "DATE '{0:yyyy-MM-dd}'",
              "textComparisonQueryFormat": "LOWER({0}) LIKE LOWER({1})",
              "numberToTextComparisonQueryFormat": "CAST({0} AS VARCHAR(50)) LIKE '{1}'",
              "doesNotContainQueryFormat": "LOWER({0}) NOT LIKE LOWER({1})",
              "allowDrawingsAsSpatialFilter": true,
              "queryProviderSupportsTimeOfDay": false,
              "mode": "filter"
            }
          }
        ],
        "viewModels": [
          {
            "id": "SimpleQueryBuilderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderViewModel",
            "configuration": {}
          },
          {
            "id": "SimpleFilterBuilderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Reporting",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.ReportingModule",
        "configuration": {},
        "views": [
          {
            "id": "ListReportsView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.ListReportsView",
            "markup": "Mapping/modules/Reporting/ListReportsView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "viewModelId": "ListReportsViewModel",
            "region": "DataFrameResultsContainerRegion",
            "title": "@language-list-reports-title",
            "visible": false
          },
          {
            "id": "RunReportView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.RunReportView",
            "markup": "Mapping/modules/Reporting/RunReportView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "viewModelId": "RunReportViewModel",
            "region": "DataFrameResultsContainerRegion",
            "title": "@language-run-report-title",
            "visible": false
          }
        ],
        "viewModels": [
          {
            "id": "ListReportsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.ListReportsViewModel"
          },
          {
            "id": "RunReportViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.RunReportViewModel"
          }
        ]
      },
      {
        "moduleName": "Results",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsModule",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {
          "resultMappings": {
            "Identify": [
              "AddPushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "MapTip": [
              "ShowMapTipResults"
            ],
            "Measurement": [],
            "Workflow": [
              "AddPushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "Search": [
              "AddPushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "QueryBuilder": [
              "AddPushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "ClusterFeatures": [
              "ShowMapTipResults",
              "SetCollectionOfInterest"
            ]
          },
          "customSearchSuggestions": {
            "Identify": "",
            "MapTip": "",
            "Workflow": "",
            "Search": "",
            "QueryBuilder": ""
          },
          "behaviors": [
            {
              "name": "ResultsListFeatureClickedBehavior",
              "event": "ResultsListFeatureClickedEvent",
              "commands": [
                "ShowFeatureDetails"
              ]
            },
            {
              "name": "ResultsListFeaturePressedBehavior",
              "event": "ResultsListFeaturePressedEvent",
              "commands": [
                "ShowFeatureDetails"
              ]
            },
            {
              "name": "ResultsTableFeatureClickedBehavior",
              "event": "ResultsTableFeatureClickedEvent",
              "commands": [
                "ShowMapTip",
                "ZoomToFeature",
                "HighlightFeatureDefault"
              ]
            },
            {
              "name": "ResultsTableFeaturePressedBehavior",
              "event": "ResultsTableFeaturePressedEvent",
              "commands": [
                "ShowMapTip",
                "ZoomToFeature",
                "HighlightFeatureDefault"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "ResultsListView",
            "viewModelId": "ResultsListViewModel",
            "libraryId": "Mapping.Infrastructure",
            "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsListView",
            "markup": "Mapping/infrastructure/results/ResultsListView.html",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "title": "@language-common-results",
            "description": "@language-common-query-results",
            "configuration": {
              "contentField": "longDescription",
              "isPaged": true,
              "pageSize": 20
            }
          },
          {
            "id": "ResultsTableView",
            "viewModelId": "ResultsTableViewModel",
            "libraryId": "Mapping.Infrastructure",
            "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsTableView",
            "markup": "Mapping/infrastructure/results/ResultsTableView.html",
            "region": "ResultsRegion",
            "visible": false,
            "configuration": {
              "isPaged": true,
              "pageSize": 15
            }
          }
        ],
        "viewModels": [
          {
            "id": "ResultsListViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FlatResultsViewModel",
            "configuration": {}
          },
          {
            "id": "ResultsTableViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.TabbedResultsViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Scalebar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarModule",
        "configuration": {},
        "views": [
          {
            "id": "ScalebarView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarView",
            "markup": "Mapping/modules/Scalebar/ScalebarView.html",
            "region": "BottomLeftMapRegion",
            "configuration": {
              "scalebarStyle": "ruler",
              "scalebarUnit": "metric",
              "showBackground": true
            },
            "viewModelId": "ScalebarViewModel"
          }
        ],
        "viewModels": [
          {
            "id": "ScalebarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Search",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchModule",
        "configuration": {
          "autoLoadSiteGeocoders": true,
          "searchProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.LayerQuerySearchProvider",
              "enable": true
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.InstantSearchProvider",
              "name": "@language-search-instant-provider-name",
              "description": "@language-search-instant-provider-description",
              "enable": true,
              "configuration": {
                "maxResults": 50,
                "maxHints": 5,
                "precedenceToNearbyResults": true,
                "enableSearchHints": true
              }
            }
          ]
        },
        "views": [],
        "viewModels": [
          {
            "id": "SearchViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchViewModel",
            "configuration": {
              "enableSearchRefinement": true,
              "minimumPopulateDelay": 300,
              "minimumPrefixLength": 3,
              "delayConsecutiveSearches": false
            }
          }
        ]
      },
      {
        "moduleName": "Share",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareModule",
        "configuration": {
          "shareOptions": [
            {
              "id": "facebook",
              "displayName": "Facebook",
              "url": "https://www.facebook.com/sharer/sharer.php?u={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/facebook-24.png"
            },
            {
              "id": "twitter",
              "displayName": "Twitter",
              "url": "https://twitter.com/intent/tweet?text={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/twitter-24.png"
            },
            {
              "id": "linkedin",
              "displayName": "Linkedin",
              "url": "https://www.linkedin.com/shareArticle?ro=false&mini=true&url={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/linkedin-24.png"
            },
            {
              "id": "googleplus",
              "displayName": "Google+",
              "url": "https://plus.google.com/up/?continue=https://plus.google.com/share?url={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/google-plus-24.png"
            },
            {
              "id": "email",
              "displayName": "Email",
              "url": "mailto:?body={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/Toolbar/contact-24.png"
            }
          ]
        },
        "views": [
          {
            "id": "ShareView",
            "viewModelId": "ShareViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareView",
            "markup": "Mapping/modules/Share/ShareView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/share-24.png",
            "title": "@language-common-share",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ShareViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareViewModel",
            "configuration": {
              "shareOptionIds": []
            }
          }
        ]
      },
      {
        "moduleName": "SharingLink",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.sharingLink.SharingLinkModule",
        "configuration": {
          "sharingLinkProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerThemes.LayerThemeSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayersSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.ExtentSharingLinkProvider",
              "generate": false
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.CenterSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.ScaleSharingLinkProvider"
            }
          ]
        }
      },
      {
        "moduleName": "Shells",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.shells.ShellModule",
        "configuration": {
          "css": [
            "Resources/Styles/Tablet.css",
            "{ViewerConfigUri}../../Styles/Custom/Tablet.css"
          ],
          "homePanelVisible": false
        },
        "views": [
          {
            "id": "ShellView",
            "viewModelId": "ShellViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.LargeShellView",
            "markup": "Mapping/modules/Shells/TabletShellView.html",
            "region": "ApplicationRegion",
            "configuration": {}
          },
          {
            "id": "DataFrameViewContainer",
            "viewModelId": "DataFrameViewContainerViewModel",
            "visible": false,
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "LeftPanelRegion",
            "configuration": {}
          },
          {
            "id": "ModalViewContainerView",
            "viewModelId": "ModalViewContainerViewModel",
            "visible": false,
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "libraryId": "Framework.UI",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "ModalWindowPlaceholderRegion",
            "configuration": {}
          },
          {
            "id": "ResultsRegionViewContainerView",
            "viewModelId": "ResultsRegionViewContainerViewModel",
            "visible": false,
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "BottomPanelRegion",
            "configuration": {
              "resizableParentRegion": "BottomPanelRegion",
              "resizeY": true
            }
          },
          {
            "id": "FeatureEditingContainerView",
            "viewModelId": "FeatureEditingContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-common-layer-data",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "libraryId": "Mapping.Infrastructure",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            }
          },
          {
            "id": "LayerDataContainerView",
            "viewModelId": "LayerDataContainerViewModel",
            "visible": true,
            "isManaged": true,
            "title": "@language-common-layer-data",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            }
          },
          {
            "id": "HomePanelContainerView",
            "viewModelId": "HomePanelContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-welcome",
            "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "libraryId": "Mapping.Infrastructure",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            }
          },
          {
            "id": "DataFrameResultsContainerView",
            "viewModelId": "DataFrameResultsContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-results",
            "iconUri": "Resources/Images/Icons/search-results-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            }
          },
          {
            "id": "SimpleQueryBuilderContainerView",
            "viewModelId": "SimpleQueryBuilderViewContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-querybuilder-simple-title",
            "iconUri": "Resources/Images/Icons/query-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "libraryId": "Mapping.Infrastructure",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            }
          },
          {
            "id": "SimpleFilterBuilderContainerView",
            "viewModelId": "SimpleFilterBuilderViewContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-querybuilder-simple-filter-title",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "libraryId": "Mapping.Infrastructure",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            }
          }
        ],
        "viewModels": [
          {
            "id": "ShellViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.LargeShellViewModel",
            "configuration": {
              "minWidth": 200,
              "maxWidth": 500,
              "dataFrameWidth": 350,
              "dataFrameOpenByDefault": false,
              "bottomRegionHeight": 400
            }
          },
          {
            "id": "DataFrameViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "defaultViewIcon": "Resources/Images/Icons/Toolbar/search-results-24.png",
              "containerRegionName": "DataRegion",
              "headerIsVisible": false,
              "showHeaderForStandaloneViews": true,
              "backButtonOnRootView": false,
              "showBackButtonAsX": true,
              "showHostedViews": false,
              "resizeX": true,
              "footerInsertMarkup": "Framework.UI/geocortex/framework/ui/ViewContainer/ButtonTabStripView.html",
              "footerInsertType": "geocortex.framework.ui.ViewContainer.ButtonTabStripView",
              "ordering": {
                "HomePanelContainerView": 0,
                "DataFrameResultsContainerView": 1
              }
            }
          },
          {
            "id": "DataFrameResultsContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "DataFrameResultsContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {
                "ResultsListView": 0
              }
            }
          },
          {
            "id": "LayerDataContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "LayerDataContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {
                "LayerListView": 0,
                "LayerActionsView": 1,
                "LegendView": 2,
                "MapDataMenuView": 3,
                "FeatureLayerListView": 4,
                "FeatureLayerDetailsView": 5,
                "EditLogView": 6
              }
            }
          },
          {
            "id": "HomePanelContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "HomePanelContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": false,
              "showBackButtonAsX": false,
              "showHostedViews": true,
              "ordering": {
                "InfoView": 0
              }
            }
          },
          {
            "id": "FeatureEditingContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "FeatureEditingContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "ordering": {
                "TemplatePickerView": 0,
                "AttributeEditorView": 1
              }
            }
          },
          {
            "id": "ModalViewContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "libraryId": "Framework.UI",
            "configuration": {
              "containerRegionName": "ModalWindowRegion",
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "closeOnEscape": true
            }
          },
          {
            "id": "ResultsRegionViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "ResultsRegion",
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showMaximizeButton": true,
              "resizeY": true,
              "ordering": {
                "ResultsTableView": 0
              }
            }
          },
          {
            "id": "SimpleQueryBuilderViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "SimpleQueryBuilderContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {}
            }
          },
          {
            "id": "SimpleFilterBuilderViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "SimpleFilterBuilderContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {}
            }
          }
        ]
      },
      {
        "moduleName": "Site",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.site.SiteModule",
        "configuration": {
          "siteUri": "http://52.0.181.201/Geocortex/Essentials/REST/sites/BarcodeScanner"
        },
        "views": [
          {
            "id": "ServiceLayersFailureView",
            "viewModelId": "ServiceLayersFailureViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.ServiceLayersFailureView",
            "markup": "Mapping/modules/Site/ServiceLayersFailureView.html",
            "region": "ModalWindowRegion",
            "configuration": {}
          },
          {
            "id": "SignInErrorView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.SignInErrorView",
            "markup": "Mapping/modules/Site/SignInErrorView.html",
            "region": "ModalWindowRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ServiceLayersFailureViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.ServiceLayersFailureViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Status",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusModule",
        "configuration": {
          "busyIcon": "Resources/Images/loader-small.gif"
        },
        "views": [
          {
            "id": "StatusIndicatorView",
            "viewModelId": null,
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusIndicatorView",
            "markup": "Mapping/modules/Status/StatusIndicatorView.html",
            "region": "BottomCenterMapRegion",
            "configuration": {}
          }
        ],
        "viewModels": []
      },
      {
        "moduleName": "TabbedToolbar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarModule",
        "configuration": {
          "isEnabled": true,
          "transientElements": [
            {
              "stateName": "MeasureState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "MeasurementToolControlRegion",
              "items": []
            },
            {
              "stateName": "MeasureState",
              "widgetId": "MeasurementToolTransientToolbar",
              "region": "MeasurementToolControlRegion"
            },
            {
              "stateName": "DrawMarkupState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "MarkupEditRegion",
              "items": [
                {
                  "id": "ChangeMarkupStyle",
                  "type": "button",
                  "name": "@language-toolbar-markup-change-markup-style",
                  "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                  "command": "CreateMarkupStyleView",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png"
                }
              ]
            },
            {
              "stateName": "EditingMarkupState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "EditControlRegion",
              "items": [
                {
                  "id": "ChangeMarkupStyle",
                  "type": "button",
                  "name": "@language-toolbar-markup-change-markup-style",
                  "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                  "command": "CreateMarkupStyleView",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png"
                }
              ]
            },
            {
              "stateName": "EditingMeasurementMarkupState",
              "widgetId": "MeasurementToolTransientToolbar",
              "region": "EditControlRegion"
            },
            {
              "stateName": "IdentifyState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "IdentifyToolControlRegion",
              "items": [
                {
                  "id": "IdentifyBufferingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "toggleStateName": "IdentifyBufferingState",
                  "toggleOn": {
                    "name": "@language-toolbar-buffering-enable",
                    "command": "ActivateBufferingAndDisplayOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-buffering-disable",
                    "command": "DeactivateBufferingAndDismissOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-disable"
                  }
                },
                {
                  "id": "ChangeIdentifiableLayers",
                  "type": "button",
                  "name": "@language-toolbar-identify-layers-change",
                  "tooltip": "@language-toolbar-identify-layers-change-tooltip",
                  "command": "ActivateSelectLayersForIdentify",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png"
                }
              ]
            },
            {
              "stateName": "FindDataState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "FindDataControlRegion",
              "items": [
                {
                  "id": "FindDataBufferingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "toggleStateName": "FindDataBufferingState",
                  "toggleOn": {
                    "name": "@language-toolbar-buffering-enable",
                    "command": "ActivateBufferingAndDisplayOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-buffering-disable",
                    "command": "DeactivateBufferingAndDismissOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-disable"
                  }
                },
                {
                  "id": "ChangeIdentifiableLayers",
                  "type": "button",
                  "name": "@language-toolbar-identify-layers-change",
                  "tooltip": "@language-toolbar-identify-layers-change-tooltip",
                  "command": "ActivateSelectLayersForIdentify",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png"
                }
              ]
            },
            {
              "stateName": "FeaturePlacementPointGraphicState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "CreateNewFeatureControlRegion",
              "items": [
                {
                  "id": "CreateFeatureWithGeolocation",
                  "type": "button",
                  "name": "@language-toolbar-editing-create-new-feature-geolocation",
                  "tooltip": "@language-toolbar-editing-create-new-feature-geolocation-tooltip",
                  "command": "Geolocate",
                  "commandParameter": {
                    "toolFriendly": true
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/geolocate.png"
                }
              ]
            }
          ],
          "toolbarGroups": [
            {
              "id": "ToolsTab",
              "type": "toolbarGroup",
              "name": "@language-toolbar-group-tools",
              "items": [
                {
                  "id": "HomeGroup",
                  "type": "toolbarGroup",
                  "name": "@language-toolbar-group-home",
                  "items": [
                    {
                      "id": "HomeButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                      "command": "ActivateHomePanel",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-home-sub",
                      "tooltip": "@language-toolbar-navigation-home-tooltip"
                    },
                    {
                      "id": "InitialExtentButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/zoom-initial-24.png",
                      "command": "ZoomToInitialExtent",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-navigation-initial-extent",
                      "tooltip": "@language-toolbar-navigation-initial-extent-tooltip"
                    },
                    {
                      "id": "PointIdentifyTool-Navigation",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                      "command": "Identify",
                      "drawMode": "RECTANGLE",
                      "name": "@language-toolbar-tasks-identify",
                      "tooltip": "@language-toolbar-identify-point-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-point-desc"
                    },
                    {
                      "id": "IdentifyToolControlRegion",
                      "type": "region",
                      "regionName": "IdentifyToolControlRegion"
                    },
                    {
                      "id": "PrintMapButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
                      "command": "PrintMap",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-tasks-print-map",
                      "tooltip": "@language-toolbar-tasks-print-map-tooltip"
                    },
                    {
                      "id": "ExportMapButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/share-map-24.png",
                      "command": "ShowExportMapDialog",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-tasks-export-map",
                      "tooltip": "@language-toolbar-tasks-export-map-tooltip"
                    },
                    {
                      "id": "ZrfeHHOS",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Resources/Images/Custom/barcode.png",
                      "command": "ActivateView",
                      "commandParameter": "TemplateModuleView",
                      "hideOnDisable": false,
                      "name": "Barcode",
                      "tooltip": null
                    }
                  ],
                  "layout": "Large"
                }
              ],
              "layout": "Large"
            }
          ]
        },
        "viewModels": [
          {
            "id": "TabbedToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarViewModel",
            "configuration": {
              "toolbarGroupRefs": [
                "ToolsTab"
              ],
              "toolbarOpenByDefault": false
            }
          },
          {
            "id": "TabbedToolbarTransientViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientViewModel",
            "configuration": {}
          }
        ],
        "views": [
          {
            "id": "TabbedToolbarView",
            "viewModelId": "TabbedToolbarViewModel",
            "visible": false,
            "title": "@language-toolbar-name",
            "region": "ToolbarRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarView",
            "markup": "Mapping/modules/Toolbar/LargeToolbarView.html",
            "configuration": {}
          },
          {
            "id": "TabbedToolbarButtonView",
            "viewModelId": "TabbedToolbarViewModel",
            "visible": true,
            "region": "TopRightMapRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarButtonView",
            "markup": "Mapping/modules/Toolbar/ToolbarButtonView.html"
          },
          {
            "id": "ToolbarFlyoutView",
            "viewModelId": "TabbedToolbarViewModel",
            "visible": true,
            "title": "@language-toolbar-multi-tool",
            "region": "ToolbarFlyoutDropdown",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarFlyoutView",
            "markup": "Mapping/modules/Toolbar/Templates/ToolbarFlyoutDropdownTemplate.html",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Tools",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.tools.ToolsModule",
        "configuration": {
          "showStatusMessages": true,
          "tools": [
            {
              "name": "EditMarkupTool",
              "command": "EditMarkup",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/draw-edit-24.png",
              "statusText": "@language-toolbar-markup-edit-desc",
              "keyboardStatusText": "@language-toolbar-markup-edit-desc-keyboard"
            },
            {
              "name": "DeleteMarkupTool",
              "command": "DeleteMarkup",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-toolbar-markup-delete-desc",
              "keyboardStatusText": "@language-toolbar-markup-delete-desc-keyboard"
            }
          ]
        }
      },
      {
        "moduleName": "User",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserModule",
        "configuration": {},
        "views": [],
        "viewModels": [
          {
            "id": "SignInViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.SignInViewModel",
            "configuration": {
              "linkColor": "#1B7DBF"
            }
          },
          {
            "id": "UserInfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserInfoViewModel",
            "configuration": {
              "linkColor": "#1B7DBF",
              "textColor": "#333333",
              "backgroundColor": "#FFFFFF"
            }
          }
        ]
      },
      {
        "moduleName": "Visualization",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.visualization.VisualizationModule",
        "configuration": {},
        "views": [
          {
            "id": "VisualizationView",
            "viewModelId": "VisualizationViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.visualization.VisualizationView",
            "markup": "Mapping/modules/Visualization/VisualizationView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/visualizations-24.png",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "VisualizationViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.visualization.VisualizationViewModel",
            "configuration": {
              "containerRegionName": "LayerVisualizationRegion",
              "defaultDisplayName": "@language-visualization-none",
              "containerTitle": "@language-visualization-title",
              "visualizationProviders": [
                {
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapVisualizationProvider",
                  "viewId": "HeatMapsView",
                  "displayName": "@language-heat-maps-name"
                },
                {
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerVisualizationProvider",
                  "viewId": "ClusterLayerView",
                  "displayName": "@language-clustering-name"
                }
              ]
            }
          }
        ]
      },
      {
        "moduleName": "Workflow",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowModule",
        "configuration": {
          "showTitleInFormBody": false,
          "defaultContainerRegionName": "DataRegion",
          "defaultContainerTitle": "@language-workflow-title",
          "defaultContainerIconUri": "Resources/Images/Icons/Toolbar/workflow-24.png",
          "showCaptureStatusMessages": true,
          "displayResultPickerTemplateComplexity": "simple",
          "startupWorkflows": [],
          "formItems": {},
          "icons": {
            "Resources/Images/ParcelByID.png": "Resources/Images/Icons/Toolbar/house-number-24.png",
            "Resources/Images/ParcelByOwner.png": "Resources/Images/Icons/Toolbar/house-owner-24.png",
            "Resources/Images/ParcelByValue.png": "Resources/Images/Icons/Toolbar/house-value-24.png",
            "Resources/Images/SearchSchools.png": "Resources/Images/Icons/Toolbar/school-24.png"
          },
          "containers": [
            {
              "name": "Default",
              "title": "@language-workflow-title",
              "regionName": "DataRegion"
            },
            {
              "name": "DefaultNoCloseButton",
              "title": "@language-workflow-title",
              "regionName": "DataRegion",
              "allowClose": false
            },
            {
              "name": "Extract",
              "title": "@language-common-extract-data",
              "regionName": "DataRegion",
              "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png"
            },
            {
              "name": "ModalWindow",
              "title": "@language-workflow-title",
              "regionName": "DataRegion"
            },
            {
              "name": "ModalWindowNoCloseButton",
              "title": "@language-workflow-title",
              "regionName": "ModalWindowRegion",
              "isManaged": false,
              "allowClose": false,
              "iconUri": "Resources/Images/Icons/Toolbar/workflow-24.png"
            }
          ]
        },
        "views": [
          {
            "id": "WorkflowListView",
            "viewModelId": "WorkflowViewModel",
            "title": "@language-workflow-workflows",
            "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
            "description": "@language-workflow-site-workflows",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowListView",
            "markup": "Mapping/modules/Workflow/WorkflowListView.html",
            "region": "DataRegion",
            "showBackButtonAsX": true,
            "visible": false,
            "configuration": {
              "hideOnClickWorkflow": false
            }
          }
        ],
        "viewModels": [
          {
            "id": "WorkflowViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "ZoomControl",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomControlModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      }
    ],
    "widgets": [
      {
        "id": "AutoCompleteBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.AutoCompleteBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/AutoCompleteBoxFormItemView.html"
      },
      {
        "id": "CheckBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.CheckBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/CheckBoxFormItemView.html"
      },
      {
        "id": "ComboBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.ListBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/ComboBoxFormItemView.html"
      },
      {
        "id": "ContainerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.ContainerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/ContainerFormItemView.html",
        "configuration": {
          "allowHorizontal": false
        }
      },
      {
        "id": "DatePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.DatePickerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/DatePickerFormItemView.html"
      },
      {
        "id": "FilePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.FilePickerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/FilePickerFormItemView.html"
      },
      {
        "id": "GroupBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.GroupBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/GroupBoxFormItemView.html",
        "configuration": {
          "allowHorizontal": false
        }
      },
      {
        "id": "HyperlinkFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.HyperlinkFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/HyperlinkFormItemView.html"
      },
      {
        "id": "ImageFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.FormItemViewBase",
        "markup": "Mapping/modules/Workflow/Forms/Items/ImageFormItemView.html"
      },
      {
        "id": "LabelFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.FormItemViewBase",
        "markup": "Mapping/modules/Workflow/Forms/Items/LabelFormItem.html"
      },
      {
        "id": "ListBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.ListBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/ListBoxFormItemView.html"
      },
      {
        "id": "MarkdownFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.MarkdownFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/MarkdownFormItemView.html"
      },
      {
        "id": "RadioButtonFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.RadioButtonFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/RadioButtonFormItemView.html"
      },
      {
        "id": "TextAreaFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.TextEntryFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/TextAreaFormItemView.html"
      },
      {
        "id": "TextBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.TextEntryFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/TextBoxFormItemView.html"
      },
      {
        "id": "TimePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.TimePickerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/TimePickerFormItemView.html"
      },
      {
        "id": "MeasurementToolTransientToolbar",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
        "markup": "Mapping/modules/Measurement/MeasurementView.html",
        "viewModelId": "MeasurementViewModel"
      },
      {
        "id": "BasemapsListController",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherViewControllerView",
        "markup": "Mapping/modules/Basemap/BasemapSwitcherViewControllerView.html",
        "configuration": {
          "grid": {
            "numberOfRows": 1,
            "numberOfColumns": 4
          }
        }
      },
      {
        "id": "IdentifyOptionsTransientToolbar",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyOptionsView",
        "markup": "Mapping/modules/Identify/IdentifyOptionsView.html",
        "viewModelId": "IdentifyOptionsViewModel"
      },
      {
        "id": "CompactToolbarTransientBase",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientView",
        "markup": "Mapping/modules/Toolbar/Templates/TransientItems.html",
        "viewModelId": "CompactToolbarTransientViewModel"
      },
      {
        "id": "TabbedToolbarTransientBase",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientView",
        "markup": "Mapping/modules/Toolbar/Templates/TransientItems.html",
        "viewModelId": "TabbedToolbarTransientViewModel"
      }
    ],
    "viewerId": "BarcodeScanner_hv"
  }
}