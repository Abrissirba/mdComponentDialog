(function() {
  'use strict';

  angular
    .module('angularMdComponentDialog')
    .directive('abrisProject', Project);

  /** @ngInject */
  function Project() {
      
      return {
          scope: {
              project: '=',
              dialogFns: '=?'
          },
          templateUrl: 'app/components/project.html',
           link: function (scope) {
             
              scope.dialogFns.save = function() {
                  console.log("save");
              }
              
              scope.dialogFns.edit = function() {
                  console.log("edit");
              }
          }
      }
  }
})();
