(function() {
  'use strict';

  angular
    .module('abrissirba.mdComponentDialog', [
        'abrissirba.includeComponent', 
        'ngMaterial'])
    .run(['$templateCache', run])
    .controller('mdAbrisComponentDialogController', ['$scope', '$mdDialog', 'componentName', 'params', 'title', mdComponentDialogController])
    .decorator('$mdDialog', ['$delegate', mdDialogDecorator]);

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
            
            return $delegate.show(options);
        }
        return $delegate;
    }

    function run($templateCache){
        $templateCache.put('mdAbrisComponentDialog', mdComponentDialogController.template);
    }


    function mdComponentDialogController($mdDialog, componentName, params, title){
        var vm = this;
        
        vm.paramDefinitions = [{
            onOk: 'ok'
        },{
            onCancel: 'cancel'
        }];
        
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
    }
    
    mdComponentDialogController.template = '<md-dialog flex="66">' +
                '<md-dialog-content class="sticky-container">' +
                    '<md-toolbar>' +
                        '<div class="md-toolbar-tools">' +
                            '<h2>{{dialogVm.title}}<h2>' +
                            '<span flex"></span>' +
                        '</div>' +
                    '</md-toolbar>' +
                    
                    '<md-content layout-padding>' +
                        '<ng-include-component name="dialogVm.componentName" params="dialogVm.paramDefinitions" scope="dialogVm"></ng-include-component>' +
                    '</md-content>' +
                    
                '</md-dialog-content>' +
            '</md-dialog>';
})();
