(function() {
  'use strict';

  angular
    .module('abrissirba.mdComponentDialog', [
        'abrissirba.includeComponent', 
        'ngMaterial'])
    .run(run)
    .controller('mdAbrisComponentDialogController', mdComponentDialogController)
    .decorator('$mdDialog', mdDialogDecorator);

    function mdDialogDecorator($delegate) {
        
        var defaultOptions = {
                controller: mdComponentDialogController,
                controllerAs: 'dialogVm',
                bindToController: true,
                template: mdComponentDialogController.template
        };
        
        $delegate.showAbrisComponentDialog = function(opt){
            var options = angular.extend({}, defaultOptions, opt);
            options.locals = options.locals || {};
            options.locals.title = options.locals.title || opt.title || '';
            options.locals.componentName = options.locals.componentName || opt.componentName;
            options.locals.params = options.locals.params || opt.params;
            options.locals.toolbarActions = options.locals.toolbarActions || opt.toolbarActions;
            return $delegate.show(options);
        }
        return $delegate;
    }
    mdDialogDecorator.$inject = ['$delegate'];

    function run($templateCache){
        $templateCache.put('mdAbrisComponentDialog', mdComponentDialogController.template);
    }
    run.$inject = ['$templateCache'];

    function mdComponentDialogController($mdDialog, componentName, params, title, toolbarActions){
        var vm = this;
        
        vm.paramDefinitions = [{
            onOk: 'ok'
        },{
            onCancel: 'cancel'
        }];
        
        
        
        
        if (vm.toolbarActions) {
            vm.dialogFns = {};
            params['dialogFns'] = vm.dialogFns;
        }
        
        // convert the parameters to an ngIncludeComponent params array
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var param = {};
                param[key] = 'params.' + key;
                vm.paramDefinitions.push(param);
            }
        }
        
        vm.params = params;
        vm.opener = componentName;
        vm.title = title;       
        
        vm.ok = function(){
            $mdDialog.hide(arguments);
        }
        
        vm.cancel = function(){
            $mdDialog.cancel(arguments);
        }
        
        vm.takeAction = function(action){
            vm.dialogFns[action.fnName]();
        }
    }
    mdComponentDialogController.$inject = ['$mdDialog', 'componentName', 'params', 'title'];
    
    mdComponentDialogController.template = '<md-dialog>' +
                '<md-dialog-content class="sticky-container" layout="column">' +
                    '<md-toolbar>' +
                        '<div class="md-toolbar-tools">' +
                            '<md-button class="md-icon-button" ng-click="dialogVm.cancel()"><md-icon class="material-icons">close</md-icon></md-button>' +
                            '<h2>{{dialogVm.title}}</h2>' +
                            '<span flex></span>' +
                            '<div layout="row">' +
                                '<div ng-repeat="action in dialogVm.toolbarActions" ng-click="dialogVm.takeAction(action)">' +
                                    '<md-button>{{action.title}}</md-button>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</md-toolbar>' +
                    
                    '<md-content flex layout-padding>' +
                        '<ng-include-component name="dialogVm.componentName" params="dialogVm.paramDefinitions" scope="dialogVm"></ng-include-component>' +
                    '</md-content>' +
                    
                '</md-dialog-content>' +
            '</md-dialog>';
})();
