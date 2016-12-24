angular.module("app",["btford.socket-io"])
		.factory('mySocket', function (socketFactory) {
		  return socketFactory();
		})
		.controller("ctrl", function($scope,mySocket){
			$scope.name = "Jimmy";
			
		
		});