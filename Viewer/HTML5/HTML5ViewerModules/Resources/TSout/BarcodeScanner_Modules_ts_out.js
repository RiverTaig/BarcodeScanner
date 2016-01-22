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
            this.inventoryTable = null; //name needs to match config of <shell>.json.js file
            this.flagUri = null;
            this.viewModel = null;
        }
        TemplateModule.prototype.initialize = function (config) {
            var _this = this;
            //alert(this.app.getResource(this.libraryId, "hello-world-initialized"));
            this.app.command("doScan").register(this, this.executeScan);
            this.app.command("doAddFeature").register(this, this.addFeature);
            this.app.command("doUpdateFeature").register(this, this.addFeature);
            this.app.command("doDeleteFeature").register(this, this.addFeature);
            this.app.command("doMockScan").register(this, this.mockScan);
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
        TemplateModule.prototype.addFeature = function () {
            var _this = this;
            var geom = this.getMapPointFromLatLong();
            var newgcxFeature = BarcodeScanner_TSModules.Utilities.createNewGcxFeature("Dx Non-Controllable Fitting", this.app.site, null, "Abandon", geom);
            var feature = newgcxFeature.esriFeature.get();
            var layer = BarcodeScanner_TSModules.Utilities.getFeatureLayer("Dx Non-Controllable Fitting", this.app.site);
            //var mapService = Utilities.services.cBMobile.Utilities.LayerUtilities.getMapServiceByLayer(layer, this.app.site);
            var editDescriptor = {
                //"mapService": mapService,
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
            var gpsPositionToZoomTo = this.viewModel.gpsPosition.get();
            var partsOfStr = gpsPositionToZoomTo.split(',');
            var xlon = +partsOfStr[1];
            var ylat = +partsOfStr[0];
            var num = xlon * 0.017453292519943295;
            var x = 6378137.0 * num;
            var a = ylat * 0.017453292519943295;
            var y = 3189068.5 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
            this.app.map.setExtent(new esri.geometry.Extent(x - 100, y - 100, x + 100, y + 100, this.app.map.spatialReference));
            console.log(x.toString() + "," + y.toString());
            var pnt = new esri.geometry.Point(x, y, this.app.map.spatialReference);
            this.drawGraphic(pnt);
        };
        TemplateModule.prototype.drawGraphic = function (pnt) {
            var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
            markerSymbol.setPath("M9.5,3v10c8,0,8,4,16,4V7C17.5,7,17.5,3,9.5,3z M6.5,29h2V3h-2V29z");
            markerSymbol.setColor(new esri.Color("#0000FF"));
            //this.app.map.graphics.add(new esri.Graphic(pnt, markerSymbol));
            var pms = new esri.symbol.PictureMarkerSymbol(this.flagUri + "../../Images/Flag.png", 24, 24);
            this.app.map.graphics.add(new esri.Graphic(pnt, pms));
            console.log("Added 1");
            var pnt2 = new esri.geometry.Point(pnt.x + 48, pnt.y, pnt.spatialReference);
            this.app.map.graphics.add(new esri.Graphic(pnt2, pms));
            console.log("Added 2");
        };
        TemplateModule.prototype.mockGPS = function () {
            //Pressing the mock button sets the gps position
            this.viewModel.gpsPosition.set("29.652098,-82.339335"); //13th and University
        };
        TemplateModule.prototype.mockScan = function () {
            this.viewModel.code.set("ABC-123");
            this.setFields("ABC-123");
        };
        TemplateModule.prototype.setFields = function (scanResult) {
            var inventoryRecord = this.inventoryTable[scanResult];
            this.viewModel.field1.set(inventoryRecord.field1);
            this.viewModel.field2.set(inventoryRecord.field2);
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
            //$("#btnScan").on('click', () => {
            //    this.app.command("doScan").execute();
            //});//btnAdd
            $("#btnAdd").on('click', function () {
                _this.app.command("doAddFeature").execute();
            });
            $("#btnMockScan").on('click', function () {
                _this.app.command("doMockScan").execute();
            });
            $("#btnMock").on('click', function () {
                _this.app.command("doMockGPS").execute();
            });
            $("#btnZoomToGPS").on('click', function () {
                _this.app.command("doZoomToGPS").execute();
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
    var path = $('#zoomImage').attr('src');
    alert(path);
    $('#WhenScanComplete').css('display', "none");
    $('#scanCode').html("Press Scan");
    if ($("#chkMockGPS").is(":checked")) {
        var array = ($("#txtMockGPS").val());
        gpsMockIndex++;
        if (gpsMockIndex >= array.split('|').length) {
            gpsMockIndex = 0;
        }
        $("#gpsPosition").html(array.split('|')[gpsMockIndex]);
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
    $("#scanCode").html(spanCode);
    $("#scanCodeText").html(spanCode);
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
            this.field1 = new Observable();
            this.field2 = new Observable();
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