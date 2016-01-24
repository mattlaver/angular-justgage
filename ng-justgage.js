angular.module('ngJustGage', [])
  .directive('justGage', ['$timeout', function ($timeout) {
    return {
      restrict: 'EA',
      scope: {
        id: '@',
        class: '@',
        min: '=',
        max: '=',
        title: '@',
	    label: '@',
        value: '@',
        options: '='
      },
      template: '<div id="{{id}}-justgage" class="{{class}}"></div>',
      link: function (scope, element, attrs) {
        $timeout(function () {
          var options = {
            id: scope.id + '-justgage',
            min: scope.min || 0,
            max: scope.max || 100,
            title: scope.title,
            label: scope.label || '',
            value: scope.value
          };

          if (scope.options) {
              for (var key in scope.options) {
                  options[key] = scope.options[key];
              }
          }

          var graph = new JustGage(options);

          scope.$watch('max', function (updatedMax) {
            if (updatedMax !== undefined) {
              graph.refresh(scope.value, updatedMax);
            }
          }, true);

          scope.$watch('value', function (updatedValue) {
            if (updatedValue !== undefined) {
              graph.refresh(updatedValue);
            }
          }, true);
        });
      }
    };
  }]);
