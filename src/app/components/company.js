(function() {
  'use strict';

  angular
    .module('angularMdComponentDialog')
    .directive('abrisCompany', User);

  /** @ngInject */
  function User() {
      
      return {
          scope: {
              company: '='
          },
          templateUrl: 'app/components/company.html'
      }
  }
})();
