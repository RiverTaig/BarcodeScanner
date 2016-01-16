/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />

module BarcodeScanner_TSModules {

    export class TemplateModuleView extends geocortex.framework.ui.ViewBase {

        app: geocortex.essentialsHtmlViewer.ViewerApplication;

        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string) {
            super(app, lib);
        }

        attach(viewModel?: TemplateModuleViewModel): void {
            super.attach(viewModel);
            $("#btnScan").on('click', () => {
                this.app.command("doScan").execute();
            });
            $("#btnMock").on('click', () => {
                this.app.command("doMockGPS").execute();
            });
            $("#btnZoomToGPS").on('click', () => {
                this.app.command("doZoomToGPS").execute();
            });
            $("#btnApply").on('click', () => {
                this.app.command("doApply").execute();
            });
            this.app.event("TemplateModuleViewModelAttached").publish(viewModel);
        }
    }
}