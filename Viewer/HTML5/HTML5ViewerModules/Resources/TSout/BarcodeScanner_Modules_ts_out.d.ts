/// <reference path="../Libs/Framework.d.ts" />
/// <reference path="../Libs/Mapping.Infrastructure.d.ts" />
declare module BarcodeScanner_TSModules {
    class TemplateModule extends geocortex.framework.application.ModuleBase {
        inventoryTable: any;
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        viewModel: TemplateModuleViewModel;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        initialize(config: any): void;
        apply(): void;
        zoomToGPS(): void;
        zoomToMock(): void;
        executeScan(): void;
    }
}
declare module BarcodeScanner_TSModules {
    class TemplateModuleView extends geocortex.framework.ui.ViewBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        attach(viewModel?: TemplateModuleViewModel): void;
    }
}
declare module BarcodeScanner_TSModules {
    class TemplateModuleViewModel extends geocortex.framework.ui.ViewModelBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        code: Observable<string>;
        showCodeNotFound: Observable<boolean>;
        codeFound: Observable<boolean>;
        field1: Observable<string>;
        field2: Observable<string>;
        gpsPosition: Observable<string>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        initialize(config: any): void;
    }
}
