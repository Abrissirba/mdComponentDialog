(function() {
  'use strict';

  angular
    .module('angularMdComponentDialog')
    .directive('abrisUser', User);

  /** @ngInject */
  function User($log) {
      
      return {
          scope: {
              user: '=',
              onOk: '=?',
              onCancel: '=?',
              dialogFns: '=?'
          },
          templateUrl: 'app/components/user.html',
          link: function (scope) {
              scope.ok = function () {
                  $log.log("ok");
                  if(scope.onOk){
                      scope.onOk();
                  }
              }
              
              scope.dialogFns.save = function() {
                  console.log("save");
                  scope.ok();
              }
          }
      }
  }
})();
