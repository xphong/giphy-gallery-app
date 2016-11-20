(function (angular) {
    'use strict';

    angular
      .module('giphyGalleryApp')
      .component('ggCard', {
        bindings: {
          
        },
        templateUrl: 'components/card/card.tpl.html',
        controller: CardComponentCtrl,
        controllerAs: 'vm'
      });

    CardComponentCtrl.$inject = [];

    function CardComponentCtrl () {
        var vm = this;
    }

})(angular);
