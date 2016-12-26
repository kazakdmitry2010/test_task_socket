angular.module("app",["btford.socket-io",'LocalStorageModule','ui.mask'])
		.factory('mySocket', function (socketFactory) {
		  return socketFactory();
		})
		.config(function(localStorageServiceProvider){
			localStorageServiceProvider
    			.setPrefix('app');
		})
		.controller("ctrl", function($scope,mySocket,localStorageService){
			
			$scope.addClient = function(){
				$scope.db.push({first_name:'Jimmy'});
				console.log($scope.db);
				localStorageService.set('take', $scope.db);	
			};


			$scope.bool=true;
			$scope.showInfo = function(item,event){
				$scope.bool=false;
				var t = angular.element(event.target.parentNode.parentNode.parentNode)[0];
				var s=angular.element(t).children();
				for ( var i=0; i<s.length; i++ ){
					 if(angular.element(s[i].children).hasClass('clicked')){
					 	angular.element(s[i].children).removeClass('clicked');
					 }
				}
				$scope.commun = item.communication;
				angular.element(event.target.parentNode).addClass('clicked');
			};



			if(localStorageService.get('take')==null){
				$scope.db=[{
							id:1,
							first_name:'Ivan',
							last_name:'Pupkin',
							sex:0,
							bdate:"12.12.1990",
							source:0,
							phones:[
								"+375(33)123-22-33",
								"+375(29)222-33-55"
							],
							communication:[
								{
									date:"25.12.2016",
									text:"Пообщались на тему покупки оборудования"
								},
								{
									date:"27.12.2016",
									text:"Сказал не будет покупать ничего"
								}
								
							]},
							{
								id:2,
								first_name:"Ivan",
								last_name:"Ivanov",
								sex:0,
								bdate:"05.12.1990",
								source:2,
								phones:[],
								communication:[]
							}];
			}
			else{
				$scope.db = localStorageService.get('take');
			}
			console.log($scope.db);



    //socket.io
    //$scope.name = '';
			/*$scope.$watch('name',function(){
				mySocket.emit('data', $scope.name);
				mySocket.on('data', function(data){
					console.log(data);
					$scope.name = data;
				});	
			});*/

				

			
				
		
		});