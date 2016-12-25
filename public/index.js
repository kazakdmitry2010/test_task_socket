angular.module("app",["btford.socket-io"])
		.factory('mySocket', function (socketFactory) {
		  return socketFactory();
		})
		.controller("ctrl", function($scope,mySocket){
			$scope.name = "";

			$scope.$watch('name',function(){
				mySocket.emit('data', $scope.name);
				mySocket.on('data', function(data){
					console.log(data);
					$scope.name = data;
				});	
			});

			//		

			
				
		
		});