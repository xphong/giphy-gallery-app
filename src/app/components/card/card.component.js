(function (angular) {
    'use strict';

    angular
      .module('giphyGalleryApp')
      .component('ggCard', {
        bindings: {
          data: '='
        },
        templateUrl: 'components/card/card.tpl.html',
        controller: CardComponentCtrl,
        controllerAs: 'vm'
      });

    CardComponentCtrl.$inject = ['UtilsService'];

    function CardComponentCtrl (UtilsService) {
      var vm = this;

      vm.likeGiphy = likeGiphy;
      vm.formatDateString = formatDateString;

      function likeGiphy () {
        vm.data.likeCount = vm.data.likeCount + 1 || 1;
      }

      function formatDateString(dateString) {
        return UtilsService.formatDate(new Date(dateString));
      }
    }

})(angular);
