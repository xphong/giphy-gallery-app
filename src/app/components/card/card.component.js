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

    CardComponentCtrl.$inject = [];

    function CardComponentCtrl () {
      var vm = this;

      vm.likeGiphy = likeGiphy;
      vm.formatDateString = formatDateString;

      function likeGiphy () {
        if (!vm.data.likeCount) {
          vm.data.likeCount = 0;
          vm.data.likeCount += 1;
        } else {
          vm.data.likeCount += 1;
        }
      }

      function formatDateString(dateString) {
        return formatDate(new Date(dateString));
      }

      function formatDate (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();

        return year + "/" + month + "/" + day;
      }  
    }

})(angular);
