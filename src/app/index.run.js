(function() {
  'use strict';

  angular
    .module('angularMdComponentDialog')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
