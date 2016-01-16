/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />

module BarcodeScanner_TSModules {

    export class TemplateModule extends geocortex.framework.application.ModuleBase {
        inventoryTable: any = null; //name needs to match config of <shell>.json.js file
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        viewModel: TemplateModuleViewModel = null;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string) {
            super(app, lib);
        }

        initialize(config: any): void {
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
            this.app.event("TemplateModuleViewModelAttached").subscribe(this, (model: TemplateModuleViewModel) => {
                this.viewModel = model;
            });
        }
        apply(): void {
            alert("This will create or update a feature with the associated bar code: " +
                this.viewModel.code.get());
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
        }
        zoomToMock(): void {
            //Pressing the mock button sets the gps position
            this.viewModel.gpsPosition.set("29.652098,-82.339335");//13th and University
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
                        var inventoryRecord :any = this.inventoryTable[scanResult.content];
                        this.viewModel.field1.set(inventoryRecord.field1);
                        this.viewModel.field2.set(inventoryRecord.field2);
                        
                        this.viewModel.gpsPosition.set(gpsPos);
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