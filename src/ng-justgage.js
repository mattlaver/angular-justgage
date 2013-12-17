angular.module("ngJustGage", [])
  .directive('justGageStatic', function ($compile, $timeout) {
    return {
      restrict: 'E',
        scope: { 
          id: '@',
          min: '=',
          max: '=', 
          title: '@',
          value: '='
	},
	template: '<div id={{id}}-justgagestatic></div>',
        compile: function (element, attrs, transclude) {     
          return {
            post: function (scope, element, attrs, controller) {
              $timeout(function() {
                var g = new JustGage({
                  id: scope.id + '-justgagestatic',
                  min: scope.min,
                  max: scope.max,
                  title: scope.title,
                  value: scope.value
                });
              });
            }
          };
        }
    };
  });

angular.module("ngJustGage")
    .directive('justGageDynamic', function ($timeout) {
      return {
        restrict: 'E',
        scope: {
          id: '@',
          min: '=',
          max: '=',
          title: '@',
          value: '='
        },
        template: '<div id={{id}}-justgagedynamic></div>',
        link: function (scope) {
          $timeout(function () {
            var g = new JustGage({
              id: scope.id + '-justgagedynamic',
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
    });