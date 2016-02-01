/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../utilities/utilities.ts" />
module BarcodeScanner_TSModules {

    export class TemplateModule extends geocortex.framework.application.ModuleBase {
        esriQuery: esri.tasks.Query = null;
        esriQueryTask: esri.tasks.QueryTask = null;
        //private dxFeatureInGpsExtentmap: { [id: string]: esri.Graphic; } = {};
        //identifyTask: esri.tasks.IdentifyTask = null;
        //identifyParams: esri.tasks.IdentifyParameters = null;
        seGasExpressURL: string = "http://52.1.143.233/arcgis103/rest/services/Schneiderville/SEGasExpress/FeatureServer";
        //arrayUtils: dojo._base.array = null;

        fscHandle: string = null;
        private featureSetCollection: Observable<geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection>;
        inventoryTable: any = null; //name needs to match config of <shell>.json.js file
        flagUri: string = null;
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        viewModel: TemplateModuleViewModel = null;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string) {
            super(app, lib);
            this.featureSetCollection = new Observable<geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection>();
            this.featureSetCollection.bind(this, this._handleCollectionChanged);

        }
        private _handleCollectionChanged(fsc: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection): void {
            console.log(fsc.countFeatures());

        }
        initialize(config: any): void {
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
            this.app.event("TemplateModuleViewModelAttached").subscribe(this, (model: TemplateModuleViewModel) => {
                this.viewModel = model;
            });


        }
        showResults(results: esri.tasks.FeatureSet) {
            var dxFeatureInGpsExtentmap: { [id: string]: esri.Graphic; } = {};
            dxFeatureInGpsExtentmap["test"] = new esri.Graphic();
            console.log("IN RESULTS");
            var counter: number = 0;
            for (var n = 0; n < results.features.length; n++){
                console.log(results.features[n]);
                var fe: esri.Graphic = results.features[n];
                var oid: string = fe.attributes["OBJECTID"];
                dxFeatureInGpsExtentmap[counter.toString()] = fe;
                counter++;
            }
            $('#featuresInExtent').find('option').remove();
            $.each(dxFeatureInGpsExtentmap, function (key: string, value: esri.Graphic) {
                try {
                    $('#featuresInExtent')
                        .append($("<option></option>")
                            .attr("value", key)
                            .text(value.attributes["CUCODE"]));
                }
                catch(ex){}
            });
            $('#dfcFeaturesFound').text(counter.toString() + " Features found near current position");
            
        }
        selectFeature() {
            console.log("SELECT FEATURE");
            alert("hello");
        }
        executeAffixBarcode2(): void
        {


        }
        executeAffixBarcode(FSCid: string): void {
            console.log("In execute affix");
            //var fsc = this.app.featureSetManager.getCollectionById(features);
            //this.featureSetCollection.set(fsc);

            this.fscHandle = this.app.event("FSMCollectionClosedEvent").subscribe(this, (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs) => {

                if (args.featureSetCollectionId == FSCid) {
                    // at this point there should actually be features in args.featureSetCollection
 
                    //unsubscribe event listener
                    this.app.event("FSMCollectionClosedEvent").unsubscribe(this.fscHandle);
                    this.fscHandle = null;
                }
            });
        }
        addFeature(): void {
            //alert("adding feature");
            //return;
            var geom : esri.geometry.Point  = this.getMapPointFromLatLong();
            var newgcxFeature = Utilities.createNewGcxFeature("Dx Non-Controllable Fitting", this.app.site, "Abandon", "Abandon", geom);
            var feature = newgcxFeature.esriFeature.get();

            var layer = Utilities.getFeatureLayer("Dx Non-Controllable Fitting", this.app.site);
            //var mapService = Utilities.services.cBMobile.Utilities.LayerUtilities.getMapServiceByLayer(layer, this.app.site); //River Taig (commented)
            var mapService = Utilities.getMapServiceByLayer(layer, this.app.site); //River Taig
            var editDescriptor: any = {
                "mapService": mapService,
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
            this.app.command("CreateFeature").execute(editDescriptor); //River Taig
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
            var gpsPosition = $("#gpsPosition").val();
            //alert(gpsPosition);
            this.viewModel.gpsPosition.set(gpsPosition);
            var pnt: esri.geometry.Point = this.getMapPointFromLatLong();
            this.app.map.setExtent(new esri.geometry.Extent(pnt.x - 100, pnt.y - 100, pnt.x + 100, pnt.y + 100, this.app.map.spatialReference));
            this.drawGraphic(pnt);


            this.esriQueryTask = new esri.tasks.QueryTask("http://52.1.143.233/arcgis103/rest/services/Schneiderville/SEGasExpress/FeatureServer/5");
            this.esriQuery = new esri.tasks.Query();
            var mapPoint: esri.geometry.Point = this.getMapPointFromLatLong();
            var ext: esri.geometry.Extent = new esri.geometry.Extent(mapPoint.x - 10000, mapPoint.y - 10000, mapPoint.x + 10000, mapPoint.y + 10000, this.app.map.spatialReference);
            this.esriQuery.geometry = ext;
            this.esriQuery.returnGeometry = true;
            this.esriQuery.spatialRelationship = "esriSpatialRelIntersects";
            this.esriQuery.outFields = ["*"];
            this.esriQueryTask.execute(this.esriQuery, this.showResults);

        }
        drawGraphic(pnt : esri.geometry.Point): void {
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
        }
        mockGPS(): void {
            //Pressing the mock button sets the gps position
            this.viewModel.gpsPosition.set("29.652098,-82.339335");//13th and University
        }
        mockScan(): void {
            //this.viewModel.code.set("ABC-019");
            //this.setFields("ABC-019");
            
            NextScan();
            this.viewModel.scanText = $('#txtScanText').val();



        }
        setFields(scanResult: string): void {
            var inventoryRecord: any = this.inventoryTable[scanResult];
            //this.viewModel.field1.set(inventoryRecord.field1);
            //this.viewModel.field2.set(inventoryRecord.field2);
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