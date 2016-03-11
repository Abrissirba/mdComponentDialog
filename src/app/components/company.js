(function() {
  'use strict';

  angular
    .module('angularMdComponentDialog')
    .directive('abrisCompany', Company);

  /** @ngInject */
  function Company() {
      
      return {
          scope: {
              company: '=',
              dialogFns: '=?'
          },
          templateUrl: 'app/components/company.html'
      }
  }
})();
