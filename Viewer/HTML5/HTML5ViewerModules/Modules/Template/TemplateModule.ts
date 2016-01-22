/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../utilities/utilities.ts" />
module BarcodeScanner_TSModules {

    export class TemplateModule extends geocortex.framework.application.ModuleBase {
        inventoryTable: any = null; //name needs to match config of <shell>.json.js file
        flagUri: string = null;
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        viewModel: TemplateModuleViewModel = null;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string) {
            super(app, lib);
        }

        initialize(config: any): void {
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
            this.app.event("TemplateModuleViewModelAttached").subscribe(this, (model: TemplateModuleViewModel) => {
                this.viewModel = model;
            });
        }
        addFeature(): void {
            var geom : esri.geometry.Point  = this.getMapPointFromLatLong();
            var newgcxFeature = Utilities.createNewGcxFeature("Dx Non-Controllable Fitting", this.app.site, null, "Abandon", geom);
            var feature = newgcxFeature.esriFeature.get();

            var layer = Utilities.getFeatureLayer("Dx Non-Controllable Fitting", this.app.site);
            //var mapService = Utilities.services.cBMobile.Utilities.LayerUtilities.getMapServiceByLayer(layer, this.app.site);

            var editDescriptor: any = {
                //"mapService": mapService,
                "layer": layer,
                "feature": feature,
                "successCallback": () => {
                    console.log("editDescriptor successCallback");
                    this.app.command("ShowFeatureDetails").execute(feature);
                },
                "errorCallback": (error: Error) => {
                    alert("failed: " + error.message);
                }
            };
        }
        apply(): void {
            alert("This will create or update a feature with the associated bar code: " +
                this.viewModel.code.get());
        }
        getMapPointFromLatLong(): esri.geometry.Point {
            var gpsPositionToZoomTo = this.viewModel.gpsPosition.get();
            var partsOfStr = gpsPositionToZoomTo.split(',');
            var  xlon :number  = + partsOfStr[1];
            var ylat : number = + partsOfStr[0];
            var num = xlon * 0.017453292519943295;
            var x = 6378137.0 * num;
            var a = ylat * 0.017453292519943295;
            var y = 3189068.5 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
            return new esri.geometry.Point(x, y, this.app.map.spatialReference);
        }
        zoomToGPS(): void {
            //zoom to the gps position in the text box (may be a mocked position)
            var gpsPositionToZoomTo = this.viewModel.gpsPosition.get();
            var partsOfStr = gpsPositionToZoomTo.split(',');
            var  xlon :number  = + partsOfStr[1];
            var ylat : number = + partsOfStr[0];
            var num = xlon * 0.017453292519943295;
            var x = 6378137.0 * num;
            var a = ylat * 0.017453292519943295;
            var y = 3189068.5 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));

            this.app.map.setExtent(new esri.geometry.Extent(x-100, y-100, x+100, y+100, this.app.map.spatialReference));
            console.log(x.toString() + "," + y.toString());
            var pnt: esri.geometry.Point = new esri.geometry.Point(x, y, this.app.map.spatialReference);
            this.drawGraphic(pnt);
        }
        drawGraphic(pnt : esri.geometry.Point): void {
            var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
            markerSymbol.setPath("M9.5,3v10c8,0,8,4,16,4V7C17.5,7,17.5,3,9.5,3z M6.5,29h2V3h-2V29z");
            markerSymbol.setColor(new esri.Color("#0000FF"));
            //this.app.map.graphics.add(new esri.Graphic(pnt, markerSymbol));
            var pms: esri.symbol.PictureMarkerSymbol = new esri.symbol.PictureMarkerSymbol(this.flagUri +"../../Images/Flag.png", 24, 24);
            this.app.map.graphics.add(new esri.Graphic(pnt, pms));
            console.log("Added 1");
            var pnt2: esri.geometry.Point = new esri.geometry.Point(pnt.x + 48, pnt.y, pnt.spatialReference);
            this.app.map.graphics.add(new esri.Graphic(pnt2, pms));
            console.log("Added 2");
        }
        mockGPS(): void {
            //Pressing the mock button sets the gps position
            this.viewModel.gpsPosition.set("29.652098,-82.339335");//13th and University
        }
        mockScan(): void {
            this.viewModel.code.set("ABC-123");

            this.setFields("ABC-123");
        }
        setFields(scanResult: string): void {
            var inventoryRecord: any = this.inventoryTable[scanResult];
            this.viewModel.field1.set(inventoryRecord.field1);
            this.viewModel.field2.set(inventoryRecord.field2);
        }
        executeScan(): void {
            this.app.command("LaunchBarcodeScannerWithCallback").execute((scanResult: any) => {
                console.log(JSON.stringify(scanResult));
                if (scanResult.status == "Success") {
                    this.viewModel.codeFound.set(true);
                    var gpsPos = "Unknown Location";
                    navigator.geolocation.getCurrentPosition((position: Position) => {
                        console.log(position.coords.latitude);
                        console.log(position.coords.longitude);
                        gpsPos = position.coords.latitude.toString() + "," + position.coords.longitude.toString();
                        this.viewModel.gpsPosition.set(gpsPos);
                        console.log(position.coords.accuracy);
                    }, (positionError: PositionError) => { alert(positionError.message); },
                    { enableHighAccuracy: true, timeout: 10000 });

                    this.viewModel.code.set(scanResult.content);
                    if (this.inventoryTable.hasOwnProperty(scanResult.content)) {
                        this.setFields(scanResult.content);
                        //var inventoryRecord :any = this.inventoryTable[scanResult.content];
                        //this.viewModel.field1.set(inventoryRecord.field1);
                        //this.viewModel.field2.set(inventoryRecord.field2);
                        //this.viewModel.gpsPosition.set(gpsPos);
                    }
                    else {
                        this.viewModel.codeFound.set(false);
                    }

                }
                else {
                    this.viewModel.codeFound.set(false);
                }
                
            });
        }

    }
}