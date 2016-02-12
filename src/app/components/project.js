(function() {
  'use strict';

  angular
    .module('angularMdComponentDialog')
    .directive('abrisProject', User);

  /** @ngInject */
  function User() {
      
      return {
          scope: {
              project: '='
          },
          templateUrl: 'app/components/project.html'
      }
  }
})();
