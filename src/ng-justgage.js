
angular.module("ngJustGage", [])
    .directive('justGage', ['$timeout', function ($timeout) {
      return {
        restrict: 'E',
        scope: {
          id: '@',
          min: '=',
          max: '=',
          title: '@',
          value: '='
        },
        template: '<div id={{id}}-justgage></div>',
        link: function (scope) {
          $timeout(function () {
            var g = new JustGage({
              id: scope.id + '-justgage',
              min: scope.min,
              max: scope.max,
              title: scope.title,
              value: scope.value
            })

            scope.$watch('value', function (updatedValue) {
              if (updatedValue) {
                g.refresh(updatedValue)
              }
            }, true);
          });
        }
      };
    }]);
