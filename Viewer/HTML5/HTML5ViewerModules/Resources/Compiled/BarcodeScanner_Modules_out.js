
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

/* End Script: Resources/TSout/BarcodeScanner_Modules_ts_out.js ------------------------- */ 

geocortex.resourceManager.register("BarcodeScanner_Modules","inv","Modules/Template/TemplateModuleView.html","html","PGRpdiBjbGFzcz0idGVtcGxhdGUtbW9kdWxlLXZpZXciPg0KICAgIDxkaXYgaWQ9ImRlbW9Db25kaXRpb25zIj4NCiAgICAgICAgPGRpdiBpZD0ibW9kZSI+DQogICAgICAgICAgICA8aDI+RGVtb25zdHJhdGlvbiBDb25maWd1cmF0aW9uIEFyZWE8L2gyPg0KICAgICAgICA8L2Rpdj4NCiAgICAgICAgPGJyPjxkaXYgaWQ9ImNoZWNrYm94ZXMiPg0KICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iY2hrTW9ja0dQUyIgY2hlY2tlZD5Nb2NrIFBvc2l0aW9uIChsYXQuLGxvbmcuKTogJm5ic3A7PC9JTlBVVD48aW5wdXQgdHlwZT0idGV4dCIgdmFsdWU9IjEyMyw0NTZ8MjI0LDQ1NnwzMjUsNDU2IiBpZD0idHh0TW9ja0dQUyIgLz4NCiAgICAgICAgICAgIDxicj48YnI+DQogICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGNoZWNrZWQgaWQ9ImNoa01vY2tTY2FucyI+TW9jayBTY2FuICZuYnNwOyBTY2FuOiA8L0lOUFVUPjxpbnB1dCB0eXBlPSJ0ZXh0IiB2YWx1ZT0iQUJDLTExMXxBQkMtMjIyMnxBQkMtMzMzIiBpZD0idHh0TW9ja1NjYW4iIC8+DQoNCiAgICAgICAgPC9kaXY+DQoNCiAgICA8L2Rpdj4NCg0KICAgIDxkaXYgaWQ9InBvc2l0aW9uRGl2Ij4NCiAgICAgICAgPGltYWdlIHNyYz0iSW1hZ2VzL0N1c3RvbS9ab29tVG9HcHMucG5nIiBpZD0iem9vbUltYWdlIiBvbmNsaWNrPSJOZXh0R3BzUG9zaXRpb24oKSI+PC9pbWFnZT4mbmJzcDsmbmJzcDsmbmJzcDs8ZGl2IGlkPSJwb3NpdGlvblRleHQiPg0KICAgICAgICAgICAgPHNwYW4gaWQ9Imdwc1Bvc2l0aW9uIj40MC4xMDksLTEwNy4zMjU8L3NwYW4+Jm5ic3A7Jm5ic3A7DQogICAgICAgICAgICA8c3BhbiBpZD0iZGZjRmVhdHVyZXNGb3VuZCIgb25jbGljaz0iVG9nZ2xlRGVtb0NvbmRpdGlvbnMoKSI+NSBkZXNpZ24gZmVhdHVyZXMgZm91bmQhPC9zcGFuPg0KICAgICAgICA8L2Rpdj4NCiAgICA8L2Rpdj4NCiAgICA8aW1hZ2UgaWQ9ImJ0blNjYW4iIG9uY2xpY2s9Ik5leHRTY2FuKCkiIHNyYz0iL0ltYWdlcy9DdXN0b20vYmFyY29kZS5wbmciPjwvaW1hZ2U+DQogICAgPGRpdiBpZD0ic2NhblRleHQiPg0KICAgICAgICAmbmJzcDsmbmJzcDs8c3BhbiBpZD0ic2NhbkNvZGUiPlByZXNzIFNjYW48L3NwYW4+DQogICAgICAgICZuYnNwOyZuYnNwOzxzcGFuIGlkPSJzY2FuQ29kZUZvdW5kIj5CYXJjb2RlIGZvdW5kISAoWlhDVi0xMjM0KTwvc3Bhbj4NCiAgICA8L2Rpdj4NCiAgICANCiAgICA8ZGl2IGlkPSJNYXRjaGluZ0NVQ29kZSI+PC9kaXY+DQoNCiAgICA8ZGl2IGlkPSJXaGVuU2NhbkNvbXBsZXRlIj4NCiAgICAgICAgPGhyPg0KICAgICAgICA8ZGl2IGlkPSJzY2FuQXR0cmlidXRlcyI+QXR0cmlidXRlcyBvZiA8c3BhbiBpZD0ic2NhbkNvZGVUZXh0Ij5BQkMtMTIzPC9zcGFuPjwvZGl2Pg0KICAgICAgICA8ZGl2IGlkPSJ0YWJsZSI+DQogICAgICAgICAgICA8dGFibGUgYm9yZGVyPSIwIj4NCiAgICAgICAgICAgICAgICA8dGg+RklFTEQ8L3RoPg0KICAgICAgICAgICAgICAgIDx0aD5WQUxVRTwvdGg+DQogICAgICAgICAgICAgICAgPHRyPjx0ZD5DVSBDb2RlPC90ZD48dGQ+WlhDVi0xMjM0PC90ZD48L3RyPg0KICAgICAgICAgICAgICAgIDx0cj48dGQ+U3VieXRlQ0Q8L3RkPjx0ZD5SZWR1Y2VyPC90ZD48L3RyPg0KICAgICAgICAgICAgICAgIDx0cj48dGQ+TWF0ZXJpYWw8L3RkPjx0ZD5QbGFzdGljPC90ZD48L3RyPg0KICAgICAgICAgICAgICAgIDx0cj48dGQ+RGlhbWV0ZXI8L3RkPjx0ZD4uNSI8L3RkPjwvdHI+DQogICAgICAgICAgICAgICAgPHRyPjx0ZD5TdHlsZTwvdGQ+PHRkPkNoaWNhZ288L3RkPjwvdHI+DQogICAgICAgICAgICA8L3RhYmxlPg0KICAgICAgICA8L2Rpdj4NCiAgICAgICAgPGRpdj4NCiAgICAgICAgICAgIDxicj4NCiAgICAgICAgICAgIDxkaXYgaWQ9IkRlc2lnbkZlYXR1cmVzV2l0aGluMzBtIj5EZXNpZ24gZmVhdHVyZXMgd2l0aGluIDMwbTwvZGl2Pg0KICAgICAgICAgICAgPHNlbGVjdCBuYW1lPSJzb21ldGV4dCIgc2l6ZT0iNSI+DQogICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5WYWx2ZSAyMyB8IFpYQ1YtMTIzNDwvb3B0aW9uPg0KICAgICAgICAgICAgICAgIDxvcHRpb24+VmFsdmUgMTMgfCBDdUNvZGUxMjc8L29wdGlvbj4NCiAgICAgICAgICAgICAgICA8b3B0aW9uPlJlY3VjZXIgMjMgfCBDdUNvZGUxMjc8L29wdGlvbj4NCiAgICAgICAgICAgICAgICA8b3B0aW9uPlJlY3VjZXIgMjMgfCBDdUNvZGUxMjk8L29wdGlvbj4NCiAgICAgICAgICAgICAgICA8b3B0aW9uPlBpcGUgMTQzIHwgQ3VDb2RlMTMwPC9vcHRpb24+DQogICAgICAgICAgICA8L3NlbGVjdD4NCiAgICAgICAgICAgIDxocj4NCiAgICAgICAgICAgIDxkaXY+DQoNCiAgICAgICAgICAgICAgICA8ZGl2IGlkPSJCdXR0b25zIj4NCiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImJ1dHRvbiIgaWQ9ImJ0bkFmZml4IiBkaXNhYmxlZD0idHJ1ZSIgb25jbGljaz0iYWxlcnQoJ0FmZml4IGJhcmNvZGUgb24gc2VsZWN0ZWQgZmVhdHVyZScpIiB2YWx1ZT0iQWZmaXggQmFyY29kZSIgLz4NCiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImJ1dHRvbiIgaWQ9ImJ0blJlcGxhY2UiIG9uY2xpY2s9ImFsZXJ0KCdEZWxldGUgZXhpc3RpbmcgZmVhdHVyZSB0aGVuIGNyZWF0ZSBuZXcgb25lIHdpdGggYmFyY29kZSBhdHRyaWJ1dGVzJykiIHZhbHVlPSJSZXBsYWNlIiAvPg0KICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iYnV0dG9uIiBpZD0iYnRuSW5zdGFsbCIgb25jbGljaz0iYWxlcnQoJ0NyZWF0ZSBuZXcgZmVhdHVyZSBzbmFwcGluZyB0byBlaXRoZXIgbGluZSBvciBwb2ludCBhcyBkaXJlY3RlZCBhYm92ZScpIiB2YWx1ZT0iSW5zdGFsbCIgLz4NCiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImJ1dHRvbiIgaWQ9ImJ0bkNhbmNlbCIgb25jbGljaz0iYWxlcnQoJ0NhbmNlbCcpIiB2YWx1ZT0iQ2FuY2VsIiAvPg0KICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8YnIgLz48YnIgLz4NCiAgICAgICAgPC9kaXY+DQoNCg0KICAgICAgICA8IS0tDQogICAgICAgIDxkaXYgY2xhc3M9InRlbXBsYXRlLW1vZHVsZS12aWV3Ij4NCiAgICAgICAgPGI+PHNwYW4gZGF0YS1iaW5kaW5nPSJ7QHRleHQ6IGdyZWV0aW5nfSI+PC9zcGFuPjwvYj4NCiAgICAgICAgICAgIDxkaXYgaWQ9InNjYW5BcmVhIj4NCiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJidG5BZGQiIGNsYXNzPSJidXR0b24iPkFkZDwvYnV0dG9uPg0KICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9ImJ0blNjYW4iIGNsYXNzPSJidXR0b24iPlNjYW48L2J1dHRvbj4NCiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJidG5Nb2NrU2NhbiIgY2xhc3M9ImJ1dHRvbiI+TW9jayBTY2FuPC9idXR0b24+DQogICAgICAgICAgICAgICAgPGRpdiBpZD0ic2NhblJlc3VsdCIgZGF0YS1iaW5kaW5nPSJ7QHRleHQ6IGNvZGV9Ij5QcmVzcyBTY2FuPC9kaXY+DQogICAgICAgICAgICAgICAgPGxhYmVsPkdQUyBQb3NpdGlvbjogPC9sYWJlbD4gPGlucHV0IHR5cGU9InRleHQiIHdpZHRoPSIzMCIgaWQ9Imdwc1Bvc2l0aW9uIiBkYXRhLWJpbmRpbmc9IntAdmFsdWU6IGdwc1Bvc2l0aW9ufSIgLz4NCiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJidG5ab29tVG9HUFMiIGNsYXNzPSJidXR0b24iPlpvb20gdG88L2J1dHRvbj4NCiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJidG5Nb2NrIiBjbGFzcz0iYnV0dG9uIj5Nb2NrIEdQUzwvYnV0dG9uPg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGlkPSJzY2FuTm90Rm91bmQiIGRhdGEtYmluZGluZz0ie0B2aXNpYmxlOiBzaG93Q29kZU5vdEZvdW5kfSI+U2NhbiBkaWQgbm90IHdvcmshIDwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBpZD0ic2NhblJlc3VsdHMiPg0KICAgICAgICAgICAgICAgIDxsYWJlbD5GaWVsZCAxOiA8L2xhYmVsPiA8aW5wdXQgdmFsdWU9ImRlZmF1bHQiIHR5cGU9InRleHQiIGlkPSJmaWVsZDEiIGRhdGEtYmluZGluZz0ie0B2YWx1ZTogZmllbGQxfSIvPg0KICAgICAgICAgICAgICAgIDxsYWJlbD5GaWVsZCAyOiA8L2xhYmVsPiA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9ImZpZWxkMiIgZGF0YS1iaW5kaW5nPSJ7QHZhbHVlOiBmaWVsZDJ9IiAvPg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2Pg0KICAgICAgICAgICAgICAgIGFzZGYgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmF0dXJlIGZyb20gNDUgQkMsIG1ha2luZyBpdCBvdmVyIDIwMDAgeWVhcnMgb2xkLiBSaWNoYXJkIE1jQ2xpbnRvY2ssIGEgTGF0aW4gcHJvZmVzc29yIGF0IEhhbXBkZW4tU3lkbmV5IENvbGxlZ2UgaW4gVmlyZ2luaWEsIGxvb2tlZCB1cCBvbmUgb2YgdGhlIG1vcmUgb2JzY3VyZSBMYXRpbiB3b3JkcywgY29uc2VjdGV0dXIsIGZyb20gYSBMb3JlbSBJcHN1bSBwYXNzYWdlLCBhbmQgZ29pbmcgdGhyb3VnaCB0aGUgY2l0ZXMgb2YgdGhlIHdvcmQgaW4gY2xhc3NpY2FsIGxpdGVyYXR1cmUsIGRpc2NvdmVyZWQgdGhlIHVuZG91YnRhYmxlIHNvdXJjZS4gTG9yZW0gSXBzdW0gY29tZXMgZnJvbSBzZWN0aW9ucyAxLjEwLjMyIGFuZCAxLjEwLjMzIG9mICJkZSBGaW5pYnVzIEJvbm9ydW0gZXQgTWFsb3J1bSIgKFRoZSBFeHRyZW1lcyBvZiBHb29kIGFuZCBFdmlsKSBieSBDaWNlcm8sIHdyaXR0ZW4gaW4gNDUgQkMuIFRoaXMgYm9vayBpcyBhIHRyZWF0aXNlIG9uIHRoZSB0aGVvcnkgb2YgZXRoaWNzLCB2ZXJ5IHBvcHVsYXIgZHVyaW5nIHRoZSBSZW5haXNzYW5jZS4gVGhlIGZpcnN0IGxpbmUgb2YgTG9yZW0gSXBzdW0sICJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uIiwgY29tZXMgZnJvbSBhIGxpbmUgaW4gc2VjdGlvbiAxLjEwLjMyDQogICAgICAgICAgICAgICAgQ29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmF0dXJlIGZyb20gNDUgQkMsIG1ha2luZyBpdCBvdmVyIDIwMDAgeWVhcnMgb2xkLiBSaWNoYXJkIE1jQ2xpbnRvY2ssIGEgTGF0aW4gcHJvZmVzc29yIGF0IEhhbXBkZW4tU3lkbmV5IENvbGxlZ2UgaW4gVmlyZ2luaWEsIGxvb2tlZCB1cCBvbmUgb2YgdGhlIG1vcmUgb2JzY3VyZSBMYXRpbiB3b3JkcywgY29uc2VjdGV0dXIsIGZyb20gYSBMb3JlbSBJcHN1bSBwYXNzYWdlLCBhbmQgZ29pbmcgdGhyb3VnaCB0aGUgY2l0ZXMgb2YgdGhlIHdvcmQgaW4gY2xhc3NpY2FsIGxpdGVyYXR1cmUsIGRpc2NvdmVyZWQgdGhlIHVuZG91YnRhYmxlIHNvdXJjZS4gTG9yZW0gSXBzdW0gY29tZXMgZnJvbSBzZWN0aW9ucyAxLjEwLjMyIGFuZCAxLjEwLjMzIG9mICJkZSBGaW5pYnVzIEJvbm9ydW0gZXQgTWFsb3J1bSIgKFRoZSBFeHRyZW1lcyBvZiBHb29kIGFuZCBFdmlsKSBieSBDaWNlcm8sIHdyaXR0ZW4gaW4gNDUgQkMuIFRoaXMgYm9vayBpcyBhIHRyZWF0aXNlIG9uIHRoZSB0aGVvcnkgb2YgZXRoaWNzLCB2ZXJ5IHBvcHVsYXIgZHVyaW5nIHRoZSBSZW5haXNzYW5jZS4gVGhlIGZpcnN0IGxpbmUgb2YgTG9yZW0gSXBzdW0sICJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uIiwgY29tZXMgZnJvbSBhIGxpbmUgaW4gc2VjdGlvbiAxLjEwLjMyDQogICAgICAgICAgICAgICAgQ29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmF0dXJlIGZyb20gNDUgQkMsIG1ha2luZyBpdCBvdmVyIDIwMDAgeWVhcnMgb2xkLiBSaWNoYXJkIE1jQ2xpbnRvY2ssIGEgTGF0aW4gcHJvZmVzc29yIGF0IEhhbXBkZW4tU3lkbmV5IENvbGxlZ2UgaW4gVmlyZ2luaWEsIGxvb2tlZCB1cCBvbmUgb2YgdGhlIG1vcmUgb2JzY3VyZSBMYXRpbiB3b3JkcywgY29uc2VjdGV0dXIsIGZyb20gYSBMb3JlbSBJcHN1bSBwYXNzYWdlLCBhbmQgZ29pbmcgdGhyb3VnaCB0aGUgY2l0ZXMgb2YgdGhlIHdvcmQgaW4gY2xhc3NpY2FsIGxpdGVyYXR1cmUsIGRpc2NvdmVyZWQgdGhlIHVuZG91YnRhYmxlIHNvdXJjZS4gTG9yZW0gSXBzdW0gY29tZXMgZnJvbSBzZWN0aW9ucyAxLjEwLjMyIGFuZCAxLjEwLjMzIG9mICJkZSBGaW5pYnVzIEJvbm9ydW0gZXQgTWFsb3J1bSIgKFRoZSBFeHRyZW1lcyBvZiBHb29kIGFuZCBFdmlsKSBieSBDaWNlcm8sIHdyaXR0ZW4gaW4gNDUgQkMuIFRoaXMgYm9vayBpcyBhIHRyZWF0aXNlIG9uIHRoZSB0aGVvcnkgb2YgZXRoaWNzLCB2ZXJ5IHBvcHVsYXIgZHVyaW5nIHRoZSBSZW5haXNzYW5jZS4gVGhlIGZpcnN0IGxpbmUgb2YgTG9yZW0gSXBzdW0sICJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uIiwgY29tZXMgZnJvbSBhIGxpbmUgaW4gc2VjdGlvbiAxLjEwLjMyDQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDxidXR0b24gaWQ9ImJ0bkFwcGx5IiBjbGFzcz0iYnV0dG9uIj5BcHBseTwvYnV0dG9uPg0KICAgICAgICA8L2Rpdj4tLT4NCg==");
geocortex.resourceManager.register("BarcodeScanner_Modules","inv","Modules/Template/TemplateModule.css","css","DQoucmVnaW9uIC52aWV3LlRlbXBsYXRlTW9kdWxlVmlldy5hY3RpdmUgew0KICAgIG1hcmdpbi1sZWZ0OiA1cHg7DQogICAgbWFyZ2luLXJpZ2h0OiA1cHg7DQp9DQoNCi50ZW1wbGF0ZS1tb2R1bGUtdmlldw0Kew0KICAgIHotaW5kZXg6IDEwMDsNCiAgICB3aWR0aDogNTAlOw0KICAgIGRpc3BsYXk6aW5saW5lOw0KICAgIGJhY2tncm91bmQ6IHdoaXRlOw0KICAgIGNvbG9yOiBibGFjazsNCiAgICBwYWRkaW5nOiA2cHg7DQogICAgbWFyZ2luLWxlZnQ6IDVweDsNCn0NCi5zY2FuTm90Rm91bmR7DQogICAgY29sb3I6cmVkOw0KfQ0KDQoNCg0KdGh7DQp3aWR0aDoxNTBweDsNCmZvbnQtc2l6ZToxMDsNCnRleHQtYWxpZ246bGVmdDsNCn0NCg0KI3NjYW5BdHRyaWJ1dGVzLCAjcmVwbGFjZVNjYW5BdHRyaWJ1dGVzLCNEZXNpZ25GZWF0dXJlc1dpdGhpbjMwbSwjTWF0Y2hpbmdDVUNvZGV7DQpjb2xvcjpibHVlOw0KbWFyZ2luIDogMCAwIDIgMCA7DQpoZWlnaHQ6IDEyMCU7DQp9DQojV2hlblNjYW5Db21wbGV0ZXsNCmRpc3BsYXk6IG5vbmU7DQp9DQojYmFyY29kZUZvdW5kew0KZm9udC1zdHlsZTppdGFsaWM7DQptYXJnaW4gOiAwIDAgMTAgMCA7DQp9DQojc2NhbkNvZGV7DQpjb2xvcjpncmVlbjsNCn0NCiNyZXBsYWNlU2NhbkNvZGV7DQpjb2xvcjpncmVlbjsNCn0NCiNjaGVja2JveGVzew0KbWFyZ2luOjAgMCAxMCAwOw0KfQ0KdHINCnsNCmZvbnQtc2l6ZToxMDsNCn0NCiNwb3NpdGlvbkRpdnsNCm1hcmdpbjogMTAgMCAwIDAgOw0KfQ0KI2dwc1Bvc2l0aW9uew0KY29sb3I6IGJsdWU7DQp9DQojcG9zaXRpb25UZXh0ew0KZGlzcGxheTppbmxpbmU7DQp2ZXJ0aWNhbC1hbGlnbjo4cHg7DQp9DQojc2NhblRleHR7DQpkaXNwbGF5OmlubGluZTsNCnZlcnRpY2FsLWFsaWduOjhweDsNCn0NCiNyZW1vdmVSZXBsYWNlew0KZGlzcGxheTpub25lOw0KfQ0KI2J0blJlcGxhY2VTY2FuDQp7DQptYXJnaW46MCAwIDIwIDAgOw0KY29sb3I6Z3JlZW47DQp9DQojYnRuU2NhbnsNCmNvbG9yOmdyZWVuOw0KfQ0KI25vREZDRmVhdHVyZXNGb3VuZHsNCmRpc3BsYXk6bm9uZTsNCn0NCiNpbnN0YWxsSnVuY3Rpb25FZGdlew0KZGlzcGxheTpibG9jazsNCn0NCiNNYXRjaGluZ0NVQ29kZXsNCmZvbnQtc2l6ZToxNDsNCmZvbnQtd2VpZ2h0OmJvbGQ7DQpjb2xvcjpncmVlbjsNCn0NCiNkZW1vQ29uZGl0aW9uc3sNCmJhY2tncm91bmQtY29sb3IgOiB5ZWxsb3cgOw0KfQ0KDQojcmVwbGFjZVRhYmxlew0KZGlzcGxheTpub25lOw0KfQ0KI2NvbmZpcm1CdXR0b25zLCNyZXBsYWNlQnV0dG9ucywjcmVtb3ZlQnV0dG9ucywgI2luc3RhbGxCdXR0b25zew0KZGlzcGxheTpub25lOw0KbWFyZ2luOjAgMCAyMCAwIDsNCn0NCiNub3R7DQpkaXNwbGF5Om5vbmU7DQp9DQojZGZjRmVhdHVyZXNGb3VuZA0Kew0KY29sb3I6Z3JlZW47DQp9DQojd29ya2Z1bmN0aW9uc3sNCm1hcmdpbjowIDAgMzAgMDsNCn0NCg==");

geocortex.framework.notifyLibraryDownload("BarcodeScanner_Modules");
