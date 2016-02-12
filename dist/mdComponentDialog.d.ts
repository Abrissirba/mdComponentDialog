// Type definitions for mdComponentDialog
// Project: https://github.com/mdComponentDialog/mdComponentDialog
// Definitions by: Marcus Abrahamsson <https://github.com/abrissirba>

/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../angular-material/angular-material.d.ts" />

declare module angular.mdComponentDialog {
    interface IOptions extends angular.material.IDialogOptions  {
        componentName: string;
        title?: string;
        params?: any;
    }

    interface IDialogService extends angular.material.IDialogService {
        showAbrisComponentDialog(IOptions): angular.IPromise<any>;
    }
}
