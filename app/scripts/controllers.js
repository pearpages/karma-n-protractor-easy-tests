angular.module('myApp')
	.controller('MainController', ['$scope',function ($scope){
		$scope.test = '';
		$scope.name = 'Pere';
		$scope.sayHello = function (){
			$scope.greeting = 'Hello ' + $scope.name;
		}
	}]);