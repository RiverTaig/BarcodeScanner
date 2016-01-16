
/* Begin Script: Resources/TSout/BarcodeScanner_Modules_ts_out.js ------------------------- */ 
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BarcodeScanner_TSModules;
(function (BarcodeScanner_TSModules) {
    var TemplateModule = (function (_super) {
        __extends(TemplateModule, _super);
        function TemplateModule(app, lib) {
            _super.call(this, app, lib);
            this.inventoryTable = null; //name needs to match config of <shell>.json.js file
            this.viewModel = null;
        }
        TemplateModule.prototype.initialize = function (config) {
            var _this = this;
            //alert(this.app.getResource(this.libraryId, "hello-world-initialized"));
            this.app.command("doScan").register(this, this.executeScan);
            this.app.command("doMockGPS").register(this, this.zoomToMock);
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
        TemplateModule.prototype.apply = function () {
            alert("This will create or update a feature with the associated bar code: " +
                this.viewModel.code.get());
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
        };
        TemplateModule.prototype.zoomToMock = function () {
            //Pressing the mock button sets the gps position
            this.viewModel.gpsPosition.set("29.652098,-82.339335"); //13th and University
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
                        var inventoryRecord = _this.inventoryTable[scanResult.content];
                        _this.viewModel.field1.set(inventoryRecord.field1);
                        _this.viewModel.field2.set(inventoryRecord.field2);
                        _this.viewModel.gpsPosition.set(gpsPos);
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
            $("#btnScan").on('click', function () {
                _this.app.command("doScan").execute();
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

geocortex.resourceManager.register("BarcodeScanner_Modules","inv","Modules/Template/TemplateModuleView.html","html","PGRpdiBjbGFzcz0idGVtcGxhdGUtbW9kdWxlLXZpZXciPg0KICAgIDwhLS08Yj48c3BhbiBkYXRhLWJpbmRpbmc9IntAdGV4dDogZ3JlZXRpbmd9Ij48L3NwYW4+PC9iPi0tPg0KICAgIDxkaXYgaWQ9InNjYW5BcmVhIj4NCiAgICAgICAgPGJ1dHRvbiBpZD0iYnRuU2NhbiIgY2xhc3M9ImJ1dHRvbiI+U2NhbjwvYnV0dG9uPg0KICAgICAgICA8ZGl2IGlkPSJzY2FuUmVzdWx0IiBkYXRhLWJpbmRpbmc9IntAdGV4dDogY29kZX0iPlByZXNzIFNjYW48L2Rpdj4NCiAgICAgICAgPGxhYmVsPkdQUyBQb3NpdGlvbjogPC9sYWJlbD4gPGlucHV0IHR5cGU9InRleHQiIHdpZHRoPSIzMCIgaWQ9Imdwc1Bvc2l0aW9uIiBkYXRhLWJpbmRpbmc9IntAdmFsdWU6IGdwc1Bvc2l0aW9ufSIgLz4NCiAgICAgICAgPGJ1dHRvbiBpZD0iYnRuWm9vbVRvR1BTIiBjbGFzcz0iYnV0dG9uIj5aPC9idXR0b24+DQogICAgICAgIDxidXR0b24gaWQ9ImJ0bk1vY2siIGNsYXNzPSJidXR0b24iPk08L2J1dHRvbj4NCiAgICA8L2Rpdj4NCiAgICA8ZGl2IGlkPSJzY2FuTm90Rm91bmQiIGRhdGEtYmluZGluZz0ie0B2aXNpYmxlOiBzaG93Q29kZU5vdEZvdW5kfSI+U2NhbiBkaWQgbm90IHdvcmshIDwvZGl2Pg0KICAgIDxkaXYgaWQ9InNjYW5SZXN1bHRzIj4NCiAgICAgICAgPGxhYmVsPkZpZWxkIDE6IDwvbGFiZWw+IDxpbnB1dCB2YWx1ZT0iZGVmYXVsdCIgdHlwZT0idGV4dCIgaWQ9ImZpZWxkMSIgZGF0YS1iaW5kaW5nPSJ7QHZhbHVlOiBmaWVsZDF9Ii8+DQogICAgICAgIDxsYWJlbD5GaWVsZCAyOiA8L2xhYmVsPiA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9ImZpZWxkMiIgZGF0YS1iaW5kaW5nPSJ7QHZhbHVlOiBmaWVsZDJ9IiAvPg0KICAgIDwvZGl2Pg0KICAgIA0KICAgIDxidXR0b24gaWQ9ImJ0bkFwcGx5IiBjbGFzcz0iYnV0dG9uIj5BcHBseTwvYnV0dG9uPg0KPC9kaXY+DQo=");
geocortex.resourceManager.register("BarcodeScanner_Modules","inv","Modules/Template/TemplateModule.css","css","DQoucmVnaW9uIC52aWV3LlRlbXBsYXRlTW9kdWxlVmlldy5hY3RpdmUgew0KICAgIG1hcmdpbjogMDsNCn0NCg0KLnRlbXBsYXRlLW1vZHVsZS12aWV3DQp7DQogICAgei1pbmRleDogMTAwOw0KICAgIHdpZHRoOiA1MCU7DQogICAgZGlzcGxheTppbmxpbmU7DQogICAgYmFja2dyb3VuZDogd2hpdGU7DQogICAgY29sb3I6IGJsYWNrOw0KICAgIHBhZGRpbmc6IDZweDsNCn0NCi5zY2FuTm90Rm91bmR7DQogICAgY29sb3I6cmVkOw0KfQ0K");

geocortex.framework.notifyLibraryDownload("BarcodeScanner_Modules");
