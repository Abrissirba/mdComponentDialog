(function() {
  'use strict';

  angular
    .module('angularMdComponentDialog')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdDialog, $log) {
    var vm = this;

    vm.openUser = function(){
        $mdDialog.showAbrisComponentDialog({
            componentName: 'abrisUser',
            params: {
                user: {
                    name: 'Marcus Abrahamsson',
                    city: 'Linköping',
                    country: 'Sweden'
                }
            },
            toolbarActions: [{
                title: 'SAVE',
                fnName: 'save' 
            }],
            title: 'User',
            clickOutsideToClose: true
        }).then(function(res){
            $log.log(res);
        });
        
    }
    
    vm.openCompany = function(){
        $mdDialog.showAbrisComponentDialog({
            componentName: 'abrisCompany',
            params: {
                company: {
                    title: 'Comic Health',
                    city: 'Linköping',
                    country: 'Sweden'
                }
            },
            toolbarActions: [{
                title: 'SAVE',
                fnName: 'save'  
            }],
            title: 'Company',
            clickOutsideToClose: true
        }).then(function(res){
            $log.log(res);
        });
    }
    
    vm.openProject = function(){
        $mdDialog.showAbrisComponentDialog({
            componentName: 'abrisProject',
            params: {
                project: {
                    title: 'Diabetes',
                    owner: 'Marcus Abrahamsson',
                    deadline: new Date()
                }
            },
            toolbarActions: [{
                title: 'EDIT',
                fnName: 'edit'  
            }, {
                title: 'SAVE',
                fnName: 'save'  
            }],
            title: 'Project',
            clickOutsideToClose: true
        }).then(function(res){
            $log.log(res);
        });
    }
  }
})();
