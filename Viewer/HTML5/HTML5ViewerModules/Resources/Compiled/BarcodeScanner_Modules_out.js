﻿
/* Begin Script: Resources/TSout/BarcodeScanner_Modules_ts_out.js ------------------------- */ 
/// <reference path="../Resources/Libs/Framework.d.ts" />
/// <reference path="../Resources/Libs/Mapping.Infrastructure.d.ts" />
var BarcodeScanner_TSModules;
(function (BarcodeScanner_TSModules) {
    var Utilities = (function () {
        function Utilities() {
        }
        Utilities.createNewGcxFeature = function (layerName, site, type, templateName, geometry) {
            if (!templateName) {
                return this.createNewGcxFeature(layerName, site, "default", "default", geometry);
            }
            var featureServices = site.getFeatureServices();
            //debugger;
            var layer;
            var featureTemplate;
            for (var i = 0; i < featureServices.length; i++) {
                if (featureServices[i].serviceLayer && featureServices[i].serviceLayer.name === layerName) {
                    var featureLayer = featureServices[i].serviceLayer;
                    var featureType;
                    if (featureLayer.types.length > 0) {
                        if (type.toLowerCase() === "default") {
                            // Get the first type if we are looking for default
                            featureType = featureLayer.types[0];
                        }
                        else {
                            // Loop through the types to find the one that we want.
                            for (var j = 0; j < featureLayer.types.length; j++) {
                                if (featureLayer.types[j].name === type) {
                                    featureType = featureLayer.types[j];
                                    break; //River added this line
                                }
                            }
                        }
                    }
                    var featureTemplates;
                    if (featureType) {
                        featureTemplates = featureType.templates;
                    }
                    else {
                        featureTemplates = featureLayer.templates;
                    }
                    // If there's more than 1 feature template we need to find the right one.
                    if (featureTemplates && featureTemplates.length > 0) {
                        if (templateName.toLowerCase() === "default") {
                            featureTemplate = featureTemplates[0];
                        }
                        else {
                            for (var k = 0; k < featureLayer.types[j].templates.length; k++) {
                                if (featureLayer.types[j].templates[k].name === templateName) {
                                    featureTemplate = featureLayer.types[j].templates[k];
                                    break;
                                }
                            }
                            if (!featureTemplate) {
                                featureTemplate = featureTemplates[0];
                            }
                        }
                    }
                    layer = featureServices[i].layers[0];
                    if (featureTemplate) {
                        var feature = new esri.Graphic(featureTemplate.prototype.toJson());
                        if (geometry) {
                            feature.setGeometry(geometry);
                        }
                    }
                    else {
                        var feature = new esri.Graphic(null);
                        feature.attributes = {};
                        if (geometry) {
                            feature.setGeometry(geometry);
                        }
                    }
                    var gcxFeature = new geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature({ graphic: feature, layer: layer, resolveLayerFields: true });
                    return gcxFeature;
                }
            }
            return null;
        };
        Utilities.getFeatureService = function (layerName, site) {
            if (!site)
                return;
            var mapServices = site.getFeatureServices();
            if (mapServices && mapServices.length > 0) {
                for (var s in mapServices) {
                    var mapService = mapServices[s];
                    if (mapService.serviceLayer && mapService.serviceLayer.name === layerName) {
                        return mapService.serviceLayer;
                    }
                }
            }
            return null;
        };
        Utilities.getFeatureLayer = function (name, site) {
            var featureServices = site.getFeatureServices();
            var featureLayer;
            featureServices.forEach(function (featureService) {
                if (featureService.serviceLayer && featureService.serviceLayer.name === name) {
                    featureLayer = featureService.serviceLayer;
                    return;
                }
            });
            return featureLayer;
        };
        Utilities.getEssentialsLayer = function (name, site) {
            var essentialsLayer;
            var featureServices = site.getFeatureServices();
            featureServices.forEach(function (featureService) {
                if (featureService.findLayerByName(name)) {
                    essentialsLayer = featureService.findLayerByName(name);
                    return;
                }
            });
            return essentialsLayer;
        };
        Utilities.getMapServiceByLayer = function (layer, site) {
            // If the layer URL is null, it's an offline layer and will have layer metadata containing the online service URL.
            var layerUrl = layer.url || layer["_essentialsMetadata"]["serviceUrl"];
            if (!layerUrl) {
                return null;
            }
            var tokenIx = layerUrl.indexOf("?token=");
            // If the layer is token secured that token will be part of the url
            // If other parameters can be part of the url they may also need to be accounted for here
            // layer._url contains the url without any parameters but as a "private" variable I'd rather not touch it
            if (tokenIx != -1) {
                layerUrl = layerUrl.substring(0, tokenIx);
            }
            for (var i = 0; i < site.essentialsMap.mapServices.length; ++i) {
                var mapService = site.essentialsMap.mapServices[i];
                if (mapService.serviceUrl === layerUrl) {
                    return mapService;
                }
            }
            return null;
        };
        // Copied from geocortex.workflow.DefaultActivityHandlers (Essentials.js)
        Utilities.findMapServiceByMap = function (map, serviceId) {
            if (!map || !serviceId) {
                return null;
            }
            // Search regular layers
            if (map.layerIds != null) {
                for (var i = 0; i < map.layerIds.length; i++) {
                    var layer = map.getLayer(map.layerIds[i]);
                    if (layer != null && geocortex.essentials.utilities.SiteResourceIdComparer.equals(layer.id, serviceId)) {
                        // Found matching map service
                        return layer;
                    }
                }
            }
            // Search graphics layers
            if (map.graphicsLayerIds != null) {
                for (var i = 0; i < map.graphicsLayerIds.length; i++) {
                    var layer = map.getLayer(map.graphicsLayerIds[i]);
                    if (layer != null && geocortex.essentials.utilities.SiteResourceIdComparer.equals(layer.id, serviceId)) {
                        // Found matching map service
                        return layer;
                    }
                }
            }
            return null;
        };
        return Utilities;
    })();
    BarcodeScanner_TSModules.Utilities = Utilities;
})(BarcodeScanner_TSModules || (BarcodeScanner_TSModules = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../utilities/utilities.ts" />
var BarcodeScanner_TSModules;
(function (BarcodeScanner_TSModules) {
    var TemplateModule = (function (_super) {
        __extends(TemplateModule, _super);
        function TemplateModule(app, lib) {
            _super.call(this, app, lib);
            this.esriQuery = null;
            this.esriQueryTask = null;
            //private dxFeatureInGpsExtentmap: { [id: string]: esri.Graphic; } = {};
            //identifyTask: esri.tasks.IdentifyTask = null;
            //identifyParams: esri.tasks.IdentifyParameters = null;
            this.seGasExpressURL = "http://52.1.143.233/arcgis103/rest/services/Schneiderville/SEGasExpress/FeatureServer";
            //arrayUtils: dojo._base.array = null;
            this.fscHandle = null;
            this.inventoryTable = null; //name needs to match config of <shell>.json.js file
            this.flagUri = null;
            this.viewModel = null;
            this.featureSetCollection = new Observable();
            this.featureSetCollection.bind(this, this._handleCollectionChanged);
        }
        TemplateModule.prototype._handleCollectionChanged = function (fsc) {
            console.log(fsc.countFeatures());
        };
        TemplateModule.prototype.initialize = function (config) {
            var _this = this;
            //alert(this.app.getResource(this.libraryId, "hello-world-initialized"));
            this.app.command("doAffixBarcode").register(this, this.executeAffixBarcode2);
            this.app.command("doScan").register(this, this.executeScan);
            this.app.command("doAddFeature").register(this, this.addFeature);
            this.app.command("doUpdateFeature").register(this, this.addFeature);
            this.app.command("doSelectFeature").register(this, this.selectFeature);
            this.app.command("doDeleteFeature").register(this, this.addFeature);
            this.app.command("doMockScanText").register(this, this.mockScan);
            this.app.command("doMockGPS").register(this, this.mockGPS);
            this.app.command("doZoomToGPS").register(this, this.zoomToGPS);
            this.app.command("doApply").register(this, this.apply);
            for (var p in config) {
                if (this.hasOwnProperty(p)) {
                    this[p] = config[p];
                }
            }
            this.app.event("TemplateModuleViewModelAttached").subscribe(this, function (model) {
                _this.viewModel = model;
            });
        };
        TemplateModule.prototype.showResults = function (results) {
            var dxFeatureInGpsExtentmap = {};
            dxFeatureInGpsExtentmap["test"] = new esri.Graphic();
            console.log("IN RESULTS");
            var counter = 0;
            for (var n = 0; n < results.features.length; n++) {
                console.log(results.features[n]);
                var fe = results.features[n];
                var oid = fe.attributes["OBJECTID"];
                dxFeatureInGpsExtentmap[counter.toString()] = fe;
                counter++;
            }
            $('#featuresInExtent').find('option').remove();
            $.each(dxFeatureInGpsExtentmap, function (key, value) {
                try {
                    $('#featuresInExtent')
                        .append($("<option></option>")
                        .attr("value", key)
                        .text(value.attributes["CUCODE"]));
                }
                catch (ex) { }
            });
            $('#dfcFeaturesFound').text(counter.toString() + " Features found near current position");
        };
        TemplateModule.prototype.selectFeature = function () {
            console.log("SELECT FEATURE");
            alert("hello");
        };
        TemplateModule.prototype.executeAffixBarcode2 = function () {
        };
        TemplateModule.prototype.executeAffixBarcode = function (FSCid) {
            var _this = this;
            console.log("In execute affix");
            //var fsc = this.app.featureSetManager.getCollectionById(features);
            //this.featureSetCollection.set(fsc);
            this.fscHandle = this.app.event("FSMCollectionClosedEvent").subscribe(this, function (args) {
                if (args.featureSetCollectionId == FSCid) {
                    // at this point there should actually be features in args.featureSetCollection
                    //unsubscribe event listener
                    _this.app.event("FSMCollectionClosedEvent").unsubscribe(_this.fscHandle);
                    _this.fscHandle = null;
                }
            });
        };
        TemplateModule.prototype.addFeature = function () {
            var _this = this;
            //alert("adding feature");
            //return;
            var geom = this.getMapPointFromLatLong();
            var newgcxFeature = BarcodeScanner_TSModules.Utilities.createNewGcxFeature("Dx Non-Controllable Fitting", this.app.site, "Abandon", "Abandon", geom);
            var feature = newgcxFeature.esriFeature.get();
            var layer = BarcodeScanner_TSModules.Utilities.getFeatureLayer("Dx Non-Controllable Fitting", this.app.site);
            //var mapService = Utilities.services.cBMobile.Utilities.LayerUtilities.getMapServiceByLayer(layer, this.app.site); //River Taig (commented)
            var mapService = BarcodeScanner_TSModules.Utilities.getMapServiceByLayer(layer, this.app.site); //River Taig
            var editDescriptor = {
                "mapService": mapService,
                "layer": layer,
                "feature": feature,
                "successCallback": function () {
                    console.log("editDescriptor successCallback");
                    _this.app.command("ShowFeatureDetails").execute(feature);
                },
                "errorCallback": function (error) {
                    alert("failed: " + error.message);
                }
            };
            this.app.command("CreateFeature").execute(editDescriptor); //River Taig
        };
        TemplateModule.prototype.apply = function () {
            alert("This will create or update a feature with the associated bar code: " +
                this.viewModel.code.get());
        };
        TemplateModule.prototype.getMapPointFromLatLong = function () {
            var gpsPositionToZoomTo = this.viewModel.gpsPosition.get();
            var partsOfStr = gpsPositionToZoomTo.split(',');
            var xlon = +partsOfStr[1];
            var ylat = +partsOfStr[0];
            var num = xlon * 0.017453292519943295;
            var x = 6378137.0 * num;
            var a = ylat * 0.017453292519943295;
            var y = 3189068.5 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
            return new esri.geometry.Point(x, y, this.app.map.spatialReference);
        };
        TemplateModule.prototype.zoomToGPS = function () {
            //zoom to the gps position in the text box (may be a mocked position)
            var gpsPosition = $("#gpsPosition").val();
            //alert(gpsPosition);
            this.viewModel.gpsPosition.set(gpsPosition);
            var pnt = this.getMapPointFromLatLong();
            this.app.map.setExtent(new esri.geometry.Extent(pnt.x - 100, pnt.y - 100, pnt.x + 100, pnt.y + 100, this.app.map.spatialReference));
            this.drawGraphic(pnt);
            this.esriQueryTask = new esri.tasks.QueryTask("http://52.1.143.233/arcgis103/rest/services/Schneiderville/SEGasExpress/FeatureServer/5");
            this.esriQuery = new esri.tasks.Query();
            var mapPoint = this.getMapPointFromLatLong();
            var ext = new esri.geometry.Extent(mapPoint.x - 10000, mapPoint.y - 10000, mapPoint.x + 10000, mapPoint.y + 10000, this.app.map.spatialReference);
            this.esriQuery.geometry = ext;
            this.esriQuery.returnGeometry = true;
            this.esriQuery.spatialRelationship = "esriSpatialRelIntersects";
            this.esriQuery.outFields = ["*"];
            this.esriQueryTask.execute(this.esriQuery, this.showResults);
        };
        TemplateModule.prototype.drawGraphic = function (pnt) {
            var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
            markerSymbol.setPath("M9.5,3v10c8,0,8,4,16,4V7C17.5,7,17.5,3,9.5,3z M6.5,29h2V3h-2V29z");
            markerSymbol.setColor(new esri.Color("#0000FF"));
            this.app.map.graphics.add(new esri.Graphic(pnt, markerSymbol));
            //var pms: esri.symbol.PictureMarkerSymbol = new esri.symbol.PictureMarkerSymbol(this.flagUri +"../../Images/Flag.png", 24, 24);
            //this.app.map.graphics.add(new esri.Graphic(pnt, pms));
            //console.log("Added 1");
            //var pnt2: esri.geometry.Point = new esri.geometry.Point(pnt.x + 48, pnt.y, pnt.spatialReference);
            //this.app.map.graphics.add(new esri.Graphic(pnt2, pms));
            //console.log("Added 2");
        };
        TemplateModule.prototype.mockGPS = function () {
            //Pressing the mock button sets the gps position
            this.viewModel.gpsPosition.set("29.652098,-82.339335"); //13th and University
        };
        TemplateModule.prototype.mockScan = function () {
            //this.viewModel.code.set("ABC-019");
            //this.setFields("ABC-019");
            NextScan();
            this.viewModel.scanText = $('#txtScanText').val();
        };
        TemplateModule.prototype.setFields = function (scanResult) {
            var inventoryRecord = this.inventoryTable[scanResult];
            //this.viewModel.field1.set(inventoryRecord.field1);
            //this.viewModel.field2.set(inventoryRecord.field2);
        };
        TemplateModule.prototype.executeScan = function () {
            var _this = this;
            this.app.command("LaunchBarcodeScannerWithCallback").execute(function (scanResult) {
                console.log(JSON.stringify(scanResult));
                if (scanResult.status == "Success") {
                    _this.viewModel.codeFound.set(true);
                    var gpsPos = "Unknown Location";
                    navigator.geolocation.getCurrentPosition(function (position) {
                        console.log(position.coords.latitude);
                        console.log(position.coords.longitude);
                        gpsPos = position.coords.latitude.toString() + "," + position.coords.longitude.toString();
                        _this.viewModel.gpsPosition.set(gpsPos);
                        console.log(position.coords.accuracy);
                    }, function (positionError) { alert(positionError.message); }, { enableHighAccuracy: true, timeout: 10000 });
                    _this.viewModel.code.set(scanResult.content);
                    if (_this.inventoryTable.hasOwnProperty(scanResult.content)) {
                        _this.setFields(scanResult.content);
                    }
                    else {
                        _this.viewModel.codeFound.set(false);
                    }
                }
                else {
                    _this.viewModel.codeFound.set(false);
                }
            });
        };
        return TemplateModule;
    })(geocortex.framework.application.ModuleBase);
    BarcodeScanner_TSModules.TemplateModule = TemplateModule;
})(BarcodeScanner_TSModules || (BarcodeScanner_TSModules = {}));
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
var BarcodeScanner_TSModules;
(function (BarcodeScanner_TSModules) {
    var TemplateModuleView = (function (_super) {
        __extends(TemplateModuleView, _super);
        function TemplateModuleView(app, lib) {
            _super.call(this, app, lib);
        }
        TemplateModuleView.prototype.attach = function (viewModel) {
            var _this = this;
            _super.prototype.attach.call(this, viewModel);
            $("#btnAffix").on('click', function () {
                _this.app.command("doAffixBarcode").execute();
            });
            $("#featuresInExtent").on('click', function () {
                _this.app.command("doSelectFeature").execute();
            });
            $("#btnInstall").on('click', function () {
                _this.app.command("doAddFeature").execute();
            });
            $("#btnScan").on('click', function () {
                _this.app.command("doScan").execute();
            });
            $("#scanCode").on('click', function () {
                _this.app.command("doMockScan").execute();
            });
            $("#btnMock").on('click', function () {
                _this.app.command("doMockGPS").execute();
            });
            $("#btnZoomToGPS").on('click', function () {
                _this.app.command("doZoomToGPS").execute();
            });
            $("#mockScanText").on('click', function () {
                _this.app.command("doMockScanText").execute();
            });
            $("#btnApply").on('click', function () {
                _this.app.command("doApply").execute();
            });
            this.app.event("TemplateModuleViewModelAttached").publish(viewModel);
        };
        return TemplateModuleView;
    })(geocortex.framework.ui.ViewBase);
    BarcodeScanner_TSModules.TemplateModuleView = TemplateModuleView;
})(BarcodeScanner_TSModules || (BarcodeScanner_TSModules = {}));
var gpsMockIndex = -1;
var scanMockIndex = -1;
var foundToggle = true;
function NextGpsPosition() {
    //var path = $('#zoomImage').attr('src');
    //alert(path);
    $('#WhenScanComplete').css('display', "none");
    $('#txtScanText').val("-----------------");
    if ($("#chkMockGPS").is(":checked")) {
        var array = ($("#txtMockGPS").val());
        gpsMockIndex++;
        if (gpsMockIndex >= array.split('|').length) {
            gpsMockIndex = 0;
        }
        //$("#gpsPosition").html(array.split('|')[gpsMockIndex]);
        $("#gpsPosition").val(array.split('|')[gpsMockIndex]);
    }
    else {
        alert("Getting gps position");
    }
    $("#MatchingCUCode").html("");
    $('#MatchingCUCode').css('color', "green");
}
function NextScan() {
    var spanCode = "Not found";
    if ($("#chkMockScans").is(":checked")) {
        var array = ($("#txtMockScan").val());
        scanMockIndex++;
        if (scanMockIndex >= array.split('|').length) {
            scanMockIndex = 0;
        }
        spanCode = array.split('|')[scanMockIndex];
        if (foundToggle === true) {
            $("#MatchingCUCode").html("A design feature with a matching CU-code was found.");
            $('#MatchingCUCode').css('color', "green");
            foundToggle = false;
            $('#btnAffix').removeAttr('disabled');
        }
        else {
            $("#MatchingCUCode").html("A design feature with a matching CU-code was NOT found.");
            $('#MatchingCUCode').css('color', "red");
            $('#btnAffix').attr('disabled', 'disabled');
            foundToggle = true;
        }
    }
    else {
        alert("Getting scan");
    }
    $('#WhenScanComplete').css('display', "block");
    $("#attributesOfText").html("Attributes of " + spanCode);
    $("#txtScanText").val(spanCode);
}
function ApplyDemoConditions() {
    if ($("#chkMockGPS").is(":checked")) {
        $("#gpsPosition").html($("#txtMockGPS").val());
    }
    if ($("#chkMockScans").is(":checked")) {
        $("#scanCode").html($("#txtFirstScan").val());
        $("#replaceScanCode").html($("#txtSecondScan").val());
        $("#scanCodeText").html($("#txtFirstScan").val());
        $("#replaceScanCodeText").html($("#txtSecondScan").val());
    }
    if ($("#radNearby").is(":checked")) {
        $("#dfcFeaturesFound").html("Nearby Design Features Found!");
        $('#dfcFeaturesFound').css('color', "green");
    }
    else {
        $("#dfcFeaturesFound").html("No nearby Design Features Found!");
        $('#dfcFeaturesFound').css('color', "red");
    }
    if ($("#radFound").is(":checked")) {
        $("#scanCodeFound").html("Barcode found on Reducer with FacilityID = XXX-777");
        $('#scanCodeFound').css('color', "green");
    }
    else {
        $("#scanCodeFound").html("Barcode not found in design, but exists in inventory.");
        $('#scanCodeFound').css('color', "blue");
    }
}
function ToggleDemoConditions() {
    if ($("#demoConditions").css("display") == "block") {
        $("#demoConditions").css("display", "none");
    }
    else {
        $("#demoConditions").css("display", "block");
    }
}
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
var BarcodeScanner_TSModules;
(function (BarcodeScanner_TSModules) {
    var TemplateModuleViewModel = (function (_super) {
        __extends(TemplateModuleViewModel, _super);
        function TemplateModuleViewModel(app, lib) {
            _super.call(this, app, lib);
            this.code = new Observable();
            this.showCodeNotFound = new Observable();
            this.codeFound = new Observable(true);
            this.scanText = new Observable();
            this.gpsPosition = new Observable();
        }
        TemplateModuleViewModel.prototype.initialize = function (config) {
            var _this = this;
            this.codeFound.bind(this, function (value) {
                _this.showCodeNotFound.set(!value);
            });
        };
        return TemplateModuleViewModel;
    })(geocortex.framework.ui.ViewModelBase);
    BarcodeScanner_TSModules.TemplateModuleViewModel = TemplateModuleViewModel;
})(BarcodeScanner_TSModules || (BarcodeScanner_TSModules = {}));
//# sourceMappingURL=BarcodeScanner_Modules_ts_out.js.map

/* End Script: Resources/TSout/BarcodeScanner_Modules_ts_out.js ------------------------- */ 

geocortex.resourceManager.register("BarcodeScanner_Modules","inv","Modules/Template/TemplateModuleView.html","html","PGRpdiBjbGFzcz0idGVtcGxhdGUtbW9kdWxlLXZpZXciPg0KICAgIDxkaXYgaWQ9ImRlbW9Db25kaXRpb25zIj4NCiAgICAgICAgPGRpdiBpZD0ibW9kZSI+DQogICAgICAgICAgICA8aDI+RGVtb25zdHJhdGlvbiBDb25maWd1cmF0aW9uIEFyZWEhISE8L2gyPg0KICAgICAgICA8L2Rpdj4NCiAgICAgICAgPGJyPjxkaXYgaWQ9ImNoZWNrYm94ZXMiPg0KICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iY2hrTW9ja0dQUyIgY2hlY2tlZD5Nb2NrIFBvc2l0aW9uIChsYXQuLGxvbmcuKTogJm5ic3A7PC9JTlBVVD48aW5wdXQgdHlwZT0idGV4dCIgdmFsdWU9IjI5LjY1MywtODIuMzR8MjkuNjQ0NTkzLC04Mi4zMjUwMjB8MjkuNjUwNTQwLCAtODIuMzQyNzg2fDI5LjYzOTk3MSwgLTgyLjM2NzYzNyIgaWQ9InR4dE1vY2tHUFMiIC8+DQogICAgICAgICAgICA8YnI+PGJyPg0KICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBjaGVja2VkIGlkPSJjaGtNb2NrU2NhbnMiPk1vY2sgU2NhbiAmbmJzcDsgU2NhbjogPC9JTlBVVD48aW5wdXQgdHlwZT0idGV4dCIgdmFsdWU9IkFCQy0wMTl8QUJDLTAwMXxBQkMtMDAyfEFCQy0wMDMiIGlkPSJ0eHRNb2NrU2NhbiIgLz4NCg0KICAgICAgICA8L2Rpdj4NCg0KICAgIDwvZGl2Pg0KDQogICAgPGRpdiBpZD0icG9zaXRpb25EaXYiPg0KICAgICAgICA8aW1hZ2Ugc3JjPSJSZXNvdXJjZXMvSW1hZ2VzL1pvb21Ub0dQUy5wbmciIGlkPSJidG5ab29tVG9HUFMiPjwvaW1hZ2U+Jm5ic3A7Jm5ic3A7Jm5ic3A7DQogICAgICAgIDxkaXYgaWQ9InBvc2l0aW9uVGV4dCI+DQogICAgICAgICAgICA8bGFiZWwgb25jbGljaz0iTmV4dEdwc1Bvc2l0aW9uKCkiPkdQUyBQb3NpdGlvbjogPC9sYWJlbD4gPGlucHV0IHR5cGU9InRleHQiIHdpZHRoPSIzMCIgaWQ9Imdwc1Bvc2l0aW9uIiBkYXRhLWJpbmRpbmc9IntAdmFsdWU6IGdwc1Bvc2l0aW9ufSIgLz4NCiAgICAgICAgICAgIDxzcGFuIGlkPSJkZmNGZWF0dXJlc0ZvdW5kIiBvbmNsaWNrPSJUb2dnbGVEZW1vQ29uZGl0aW9ucygpIj4wIGRlc2lnbiBmZWF0dXJlcyBmb3VuZCE8L3NwYW4+DQogICAgICAgIDwvZGl2Pg0KICAgIDwvZGl2Pg0KICAgIDxpbWFnZSBpZD0iYnRuU2NhbiIgIHNyYz0iUmVzb3VyY2VzL0ltYWdlcy9iYXJjb2RlLnBuZyI+PC9pbWFnZT4mbmJzcDsmbmJzcDsmbmJzcDsNCiAgICA8ZGl2IGlkPSJzY2FuVGV4dCI+DQogICAgICAgIDxsYWJlbCAgaWQ9Im1vY2tTY2FuVGV4dCI+U2NhbiBDb2RlOiA8L2xhYmVsPg0KICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgd2lkdGg9IjMwIiBpZD0idHh0U2NhblRleHQiIHZhbHVlPSItLS0tLS0tLS0tLS0tLS0tLSIgZGF0YS1iaW5kaW5nPSJ7QHZhbHVlOiBzY2FuVGV4dH0iIC8+DQogICAgPC9kaXY+DQogICAgDQogICAgPGRpdiBpZD0iTWF0Y2hpbmdDVUNvZGUiPjwvZGl2Pg0KDQogICAgPGRpdiBpZD0iV2hlblNjYW5Db21wbGV0ZSI+DQogICAgICAgIDxocj4NCiAgICAgICAgPGRpdiBpZD0ic2NhbkF0dHJpYnV0ZXMiPkF0dHJpYnV0ZXMgb2YgPHNwYW4gaWQ9ImF0dHJpYnV0ZXNPZlRleHQiPi0tLTwvc3Bhbj48L2Rpdj4NCiAgICAgICAgPGRpdiBpZD0idGFibGUiPg0KICAgICAgICAgICAgPHRhYmxlIGJvcmRlcj0iMCI+DQogICAgICAgICAgICAgICAgPHRoPkZJRUxEPC90aD4NCiAgICAgICAgICAgICAgICA8dGg+VkFMVUU8L3RoPg0KICAgICAgICAgICAgICAgIDx0cj48dGQ+Q1UgQ29kZTwvdGQ+PHRkPlpYQ1YtMTIzNDwvdGQ+PC90cj4NCiAgICAgICAgICAgICAgICA8dHI+PHRkPlN1Ynl0ZUNEPC90ZD48dGQ+UmVkdWNlcjwvdGQ+PC90cj4NCiAgICAgICAgICAgICAgICA8dHI+PHRkPk1hdGVyaWFsPC90ZD48dGQ+UGxhc3RpYzwvdGQ+PC90cj4NCiAgICAgICAgICAgICAgICA8dHI+PHRkPkRpYW1ldGVyPC90ZD48dGQ+LjUiPC90ZD48L3RyPg0KICAgICAgICAgICAgICAgIDx0cj48dGQ+U3R5bGU8L3RkPjx0ZD5DaGljYWdvPC90ZD48L3RyPg0KICAgICAgICAgICAgPC90YWJsZT4NCiAgICAgICAgPC9kaXY+DQogICAgICAgIDxkaXY+DQogICAgICAgICAgICA8YnI+DQogICAgICAgICAgICA8ZGl2IGlkPSJEZXNpZ25GZWF0dXJlc1dpdGhpbjMwbSI+RGVzaWduIGZlYXR1cmVzIHdpdGhpbiAzMG08L2Rpdj4NCiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0ic29tZXRleHQiIHNpemU9IjUiIGlkPSJmZWF0dXJlc0luRXh0ZW50Ij4NCg0KICAgICAgICAgICAgPC9zZWxlY3Q+DQogICAgICAgICAgICA8aHI+DQogICAgICAgICAgICA8ZGl2Pg0KDQogICAgICAgICAgICAgICAgPGRpdiBpZD0iQnV0dG9ucyI+DQogICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJidXR0b24iIGlkPSJidG5BZmZpeCIgZGlzYWJsZWQ9InRydWUiICB2YWx1ZT0iQWZmaXggQmFyY29kZSIgLz4NCiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImJ1dHRvbiIgaWQ9ImJ0blJlcGxhY2UiIG9uY2xpY2s9ImFsZXJ0KCdEZWxldGUgZXhpc3RpbmcgZmVhdHVyZSB0aGVuIGNyZWF0ZSBuZXcgb25lIHdpdGggYmFyY29kZSBhdHRyaWJ1dGVzJykiIHZhbHVlPSJSZXBsYWNlIiAvPg0KICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iYnV0dG9uIiBpZD0iYnRuSW5zdGFsbCIgIHZhbHVlPSJJbnN0YWxsIiAvPg0KICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iYnV0dG9uIiBpZD0iYnRuQ2FuY2VsIiBvbmNsaWNrPSJhbGVydCgnQ2FuY2VsJykiIHZhbHVlPSJDYW5jZWwiIC8+DQogICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDxiciAvPjxiciAvPg0KICAgICAgICA8L2Rpdj4NCg0KDQogICAgICAgIDwhLS0NCiAgICAgICAgPGRpdiBjbGFzcz0idGVtcGxhdGUtbW9kdWxlLXZpZXciPg0KICAgICAgICA8Yj48c3BhbiBkYXRhLWJpbmRpbmc9IntAdGV4dDogZ3JlZXRpbmd9Ij48L3NwYW4+PC9iPg0KICAgICAgICAgICAgPGRpdiBpZD0ic2NhbkFyZWEiPg0KICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9ImJ0bkFkZCIgY2xhc3M9ImJ1dHRvbiI+QWRkPC9idXR0b24+DQogICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0iYnRuU2NhbiIgY2xhc3M9ImJ1dHRvbiI+U2NhbjwvYnV0dG9uPg0KICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9ImJ0bk1vY2tTY2FuIiBjbGFzcz0iYnV0dG9uIj5Nb2NrIFNjYW48L2J1dHRvbj4NCiAgICAgICAgICAgICAgICA8ZGl2IGlkPSJzY2FuUmVzdWx0IiBkYXRhLWJpbmRpbmc9IntAdGV4dDogY29kZX0iPlByZXNzIFNjYW48L2Rpdj4NCiAgICAgICAgICAgICAgICA8bGFiZWw+R1BTIFBvc2l0aW9uOiA8L2xhYmVsPiA8aW5wdXQgdHlwZT0idGV4dCIgd2lkdGg9IjMwIiBpZD0iZ3BzUG9zaXRpb24iIGRhdGEtYmluZGluZz0ie0B2YWx1ZTogZ3BzUG9zaXRpb259IiAvPg0KICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9ImJ0blpvb21Ub0dQUyIgY2xhc3M9ImJ1dHRvbiI+Wm9vbSB0bzwvYnV0dG9uPg0KICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9ImJ0bk1vY2siIGNsYXNzPSJidXR0b24iPk1vY2sgR1BTPC9idXR0b24+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDxkaXYgaWQ9InNjYW5Ob3RGb3VuZCIgZGF0YS1iaW5kaW5nPSJ7QHZpc2libGU6IHNob3dDb2RlTm90Rm91bmR9Ij5TY2FuIGRpZCBub3Qgd29yayEgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGlkPSJzY2FuUmVzdWx0cyI+DQogICAgICAgICAgICAgICAgPGxhYmVsPkZpZWxkIDE6IDwvbGFiZWw+IDxpbnB1dCB2YWx1ZT0iZGVmYXVsdCIgdHlwZT0idGV4dCIgaWQ9ImZpZWxkMSIgZGF0YS1iaW5kaW5nPSJ7QHZhbHVlOiBmaWVsZDF9Ii8+DQogICAgICAgICAgICAgICAgPGxhYmVsPkZpZWxkIDI6IDwvbGFiZWw+IDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0iZmllbGQyIiBkYXRhLWJpbmRpbmc9IntAdmFsdWU6IGZpZWxkMn0iIC8+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDxkaXY+DQogICAgICAgICAgICAgICAgYXNkZiB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYXR1cmUgZnJvbSA0NSBCQywgbWFraW5nIGl0IG92ZXIgMjAwMCB5ZWFycyBvbGQuIFJpY2hhcmQgTWNDbGludG9jaywgYSBMYXRpbiBwcm9mZXNzb3IgYXQgSGFtcGRlbi1TeWRuZXkgQ29sbGVnZSBpbiBWaXJnaW5pYSwgbG9va2VkIHVwIG9uZSBvZiB0aGUgbW9yZSBvYnNjdXJlIExhdGluIHdvcmRzLCBjb25zZWN0ZXR1ciwgZnJvbSBhIExvcmVtIElwc3VtIHBhc3NhZ2UsIGFuZCBnb2luZyB0aHJvdWdoIHRoZSBjaXRlcyBvZiB0aGUgd29yZCBpbiBjbGFzc2ljYWwgbGl0ZXJhdHVyZSwgZGlzY292ZXJlZCB0aGUgdW5kb3VidGFibGUgc291cmNlLiBMb3JlbSBJcHN1bSBjb21lcyBmcm9tIHNlY3Rpb25zIDEuMTAuMzIgYW5kIDEuMTAuMzMgb2YgImRlIEZpbmlidXMgQm9ub3J1bSBldCBNYWxvcnVtIiAoVGhlIEV4dHJlbWVzIG9mIEdvb2QgYW5kIEV2aWwpIGJ5IENpY2Vybywgd3JpdHRlbiBpbiA0NSBCQy4gVGhpcyBib29rIGlzIGEgdHJlYXRpc2Ugb24gdGhlIHRoZW9yeSBvZiBldGhpY3MsIHZlcnkgcG9wdWxhciBkdXJpbmcgdGhlIFJlbmFpc3NhbmNlLiBUaGUgZmlyc3QgbGluZSBvZiBMb3JlbSBJcHN1bSwgIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Li4iLCBjb21lcyBmcm9tIGEgbGluZSBpbiBzZWN0aW9uIDEuMTAuMzINCiAgICAgICAgICAgICAgICBDb250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYXR1cmUgZnJvbSA0NSBCQywgbWFraW5nIGl0IG92ZXIgMjAwMCB5ZWFycyBvbGQuIFJpY2hhcmQgTWNDbGludG9jaywgYSBMYXRpbiBwcm9mZXNzb3IgYXQgSGFtcGRlbi1TeWRuZXkgQ29sbGVnZSBpbiBWaXJnaW5pYSwgbG9va2VkIHVwIG9uZSBvZiB0aGUgbW9yZSBvYnNjdXJlIExhdGluIHdvcmRzLCBjb25zZWN0ZXR1ciwgZnJvbSBhIExvcmVtIElwc3VtIHBhc3NhZ2UsIGFuZCBnb2luZyB0aHJvdWdoIHRoZSBjaXRlcyBvZiB0aGUgd29yZCBpbiBjbGFzc2ljYWwgbGl0ZXJhdHVyZSwgZGlzY292ZXJlZCB0aGUgdW5kb3VidGFibGUgc291cmNlLiBMb3JlbSBJcHN1bSBjb21lcyBmcm9tIHNlY3Rpb25zIDEuMTAuMzIgYW5kIDEuMTAuMzMgb2YgImRlIEZpbmlidXMgQm9ub3J1bSBldCBNYWxvcnVtIiAoVGhlIEV4dHJlbWVzIG9mIEdvb2QgYW5kIEV2aWwpIGJ5IENpY2Vybywgd3JpdHRlbiBpbiA0NSBCQy4gVGhpcyBib29rIGlzIGEgdHJlYXRpc2Ugb24gdGhlIHRoZW9yeSBvZiBldGhpY3MsIHZlcnkgcG9wdWxhciBkdXJpbmcgdGhlIFJlbmFpc3NhbmNlLiBUaGUgZmlyc3QgbGluZSBvZiBMb3JlbSBJcHN1bSwgIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Li4iLCBjb21lcyBmcm9tIGEgbGluZSBpbiBzZWN0aW9uIDEuMTAuMzINCiAgICAgICAgICAgICAgICBDb250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYXR1cmUgZnJvbSA0NSBCQywgbWFraW5nIGl0IG92ZXIgMjAwMCB5ZWFycyBvbGQuIFJpY2hhcmQgTWNDbGludG9jaywgYSBMYXRpbiBwcm9mZXNzb3IgYXQgSGFtcGRlbi1TeWRuZXkgQ29sbGVnZSBpbiBWaXJnaW5pYSwgbG9va2VkIHVwIG9uZSBvZiB0aGUgbW9yZSBvYnNjdXJlIExhdGluIHdvcmRzLCBjb25zZWN0ZXR1ciwgZnJvbSBhIExvcmVtIElwc3VtIHBhc3NhZ2UsIGFuZCBnb2luZyB0aHJvdWdoIHRoZSBjaXRlcyBvZiB0aGUgd29yZCBpbiBjbGFzc2ljYWwgbGl0ZXJhdHVyZSwgZGlzY292ZXJlZCB0aGUgdW5kb3VidGFibGUgc291cmNlLiBMb3JlbSBJcHN1bSBjb21lcyBmcm9tIHNlY3Rpb25zIDEuMTAuMzIgYW5kIDEuMTAuMzMgb2YgImRlIEZpbmlidXMgQm9ub3J1bSBldCBNYWxvcnVtIiAoVGhlIEV4dHJlbWVzIG9mIEdvb2QgYW5kIEV2aWwpIGJ5IENpY2Vybywgd3JpdHRlbiBpbiA0NSBCQy4gVGhpcyBib29rIGlzIGEgdHJlYXRpc2Ugb24gdGhlIHRoZW9yeSBvZiBldGhpY3MsIHZlcnkgcG9wdWxhciBkdXJpbmcgdGhlIFJlbmFpc3NhbmNlLiBUaGUgZmlyc3QgbGluZSBvZiBMb3JlbSBJcHN1bSwgIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Li4iLCBjb21lcyBmcm9tIGEgbGluZSBpbiBzZWN0aW9uIDEuMTAuMzINCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGJ1dHRvbiBpZD0iYnRuQXBwbHkiIGNsYXNzPSJidXR0b24iPkFwcGx5PC9idXR0b24+DQogICAgICAgIDwvZGl2Pi0tPg0K");
geocortex.resourceManager.register("BarcodeScanner_Modules","inv","Modules/Template/TemplateModule.css","css","DQoucmVnaW9uIC52aWV3LlRlbXBsYXRlTW9kdWxlVmlldy5hY3RpdmUgew0KICAgIG1hcmdpbi1sZWZ0OiA1cHg7DQogICAgbWFyZ2luLXJpZ2h0OiA1cHg7DQp9DQoNCi50ZW1wbGF0ZS1tb2R1bGUtdmlldw0Kew0KICAgIHotaW5kZXg6IDEwMDsNCiAgICB3aWR0aDogNTAlOw0KICAgIGRpc3BsYXk6aW5saW5lOw0KICAgIGJhY2tncm91bmQ6IHdoaXRlOw0KICAgIGNvbG9yOiBibGFjazsNCiAgICBwYWRkaW5nOiA2cHg7DQogICAgbWFyZ2luLWxlZnQ6IDVweDsNCn0NCi5zY2FuTm90Rm91bmR7DQogICAgY29sb3I6cmVkOw0KfQ0KDQoNCg0KdGh7DQp3aWR0aDoxNTBweDsNCmZvbnQtc2l6ZToxMDsNCnRleHQtYWxpZ246bGVmdDsNCn0NCg0KI3NjYW5BdHRyaWJ1dGVzLCAjcmVwbGFjZVNjYW5BdHRyaWJ1dGVzLCNEZXNpZ25GZWF0dXJlc1dpdGhpbjMwbSwjTWF0Y2hpbmdDVUNvZGV7DQpjb2xvcjpibHVlOw0KbWFyZ2luIDogMCAwIDIgMCA7DQpoZWlnaHQ6IDEyMCU7DQp9DQojV2hlblNjYW5Db21wbGV0ZXsNCmRpc3BsYXk6IG5vbmU7DQp9DQojYmFyY29kZUZvdW5kew0KZm9udC1zdHlsZTppdGFsaWM7DQptYXJnaW4gOiAwIDAgMTAgMCA7DQp9DQojc2NhbkNvZGV7DQpjb2xvcjpncmVlbjsNCn0NCiNyZXBsYWNlU2NhbkNvZGV7DQpjb2xvcjpncmVlbjsNCn0NCiNjaGVja2JveGVzew0KbWFyZ2luOjAgMCAxMCAwOw0KfQ0KdHINCnsNCmZvbnQtc2l6ZToxMDsNCn0NCiNwb3NpdGlvbkRpdnsNCm1hcmdpbjogMTAgMCAwIDAgOw0KfQ0KI2dwc1Bvc2l0aW9uLCN0eHRTY2FuVGV4dHsNCmNvbG9yOiBibHVlOw0KfQ0KI3Bvc2l0aW9uVGV4dHsNCmRpc3BsYXk6aW5saW5lOw0KdmVydGljYWwtYWxpZ246OHB4Ow0KfQ0KI3NjYW5UZXh0ew0KZGlzcGxheTppbmxpbmU7DQp2ZXJ0aWNhbC1hbGlnbjo4cHg7DQp9DQojcmVtb3ZlUmVwbGFjZXsNCmRpc3BsYXk6bm9uZTsNCn0NCiNidG5SZXBsYWNlU2Nhbg0Kew0KbWFyZ2luOjAgMCAyMCAwIDsNCmNvbG9yOmdyZWVuOw0KfQ0KI2J0blNjYW57DQpjb2xvcjpncmVlbjsNCn0NCiNub0RGQ0ZlYXR1cmVzRm91bmR7DQpkaXNwbGF5Om5vbmU7DQp9DQojaW5zdGFsbEp1bmN0aW9uRWRnZXsNCmRpc3BsYXk6YmxvY2s7DQp9DQojTWF0Y2hpbmdDVUNvZGV7DQpmb250LXNpemU6MTQ7DQpmb250LXdlaWdodDpib2xkOw0KY29sb3I6Z3JlZW47DQp9DQojZGVtb0NvbmRpdGlvbnN7DQpiYWNrZ3JvdW5kLWNvbG9yIDogeWVsbG93IDsNCmRpc3BsYXk6bm9uZTsNCn0NCg0KI3JlcGxhY2VUYWJsZXsNCmRpc3BsYXk6bm9uZTsNCn0NCiNjb25maXJtQnV0dG9ucywjcmVwbGFjZUJ1dHRvbnMsI3JlbW92ZUJ1dHRvbnMsICNpbnN0YWxsQnV0dG9uc3sNCmRpc3BsYXk6bm9uZTsNCm1hcmdpbjowIDAgMjAgMCA7DQp9DQojbm90ew0KZGlzcGxheTpub25lOw0KfQ0KI2RmY0ZlYXR1cmVzRm91bmQNCnsNCmNvbG9yOmdyZWVuOw0KfQ0KI3dvcmtmdW5jdGlvbnN7DQptYXJnaW46MCAwIDMwIDA7DQp9DQo=");

geocortex.framework.notifyLibraryDownload("BarcodeScanner_Modules");
