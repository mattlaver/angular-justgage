angular.module('app', ['ngJustGage']).controller('myController', function($scope) {
    $scope.value1 = 42;
    $scope.value2 = 42;
    setInterval(function(){
        $scope.$apply(function() {
            $scope.value1 = getRandomInt(10, 90);
			$scope.value2 = getRandomInt(10, 90);
        });
    }, 1000);
});
