angular.module("ngJustGage", [])
  .directive('justGage', function ($compile, $timeout) {
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
        compile: function (element, attrs, transclude) {     
          return {
            post: function (scope, element, attrs, controller) {
              $timeout(function() {
                var g = new JustGage({
                  id: scope.id + '-justgage',
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