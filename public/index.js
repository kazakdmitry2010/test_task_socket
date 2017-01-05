angular.module("app",["btford.socket-io", 'LocalStorageModule', 'ui.mask', 'xeditable'])
		.factory('mySocket', function (socketFactory) {
		  return socketFactory();
		})
		.config(function(localStorageServiceProvider){
			localStorageServiceProvider
    			.setPrefix('app');
		})
		.run(function(editableOptions) {
  			editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
		})
		.controller("ctrl", function($scope,mySocket,localStorageService){
			
			$scope.addCallInfo = function(){
				$scope.client.communication.push({ date:"12.12.12", text:"введите информацию о звонке" });	
			};

			$scope.addClient = function(){
				$scope.db.push({first_name:'Mark',last_name:'Rusvelt',phones:[]});
				//console.log($scope.db);
				//localStorageService.set('take', $scope.db);
				//$scope.db=localStorageService.get('take');
				mySocket.emit('data', $scope.db);
				
			};
			mySocket.on('data', function(data){
					console.log(data);
					$scope.db = data;
				});		

			$scope.bool=true;
			
			
			$scope.showInfo = function( item,event ){
				$scope.bool = false;
				
				

				var t = angular.element(event.target.parentNode.parentNode.parentNode)[0];//5
				var s = angular.element(t).children();
				for ( var i=0; i < s.length; i++ ){
					 if(angular.element(s[i].children).hasClass('clicked')){
					 	angular.element(s[i].children).removeClass('clicked');
					 }
				}

				angular.element(event.target.parentNode).addClass('clicked');

				$scope.commun = item.communication;
				
				
				$scope.client = item;
				console.log( $scope.client );
				
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
			

			$scope.addPhone = function(){
				$scope.client.phones.push("+375(33)654-46-58");
			};

    		$scope.deletePhone = function(pnone,$index){
    			$scope.client.phones.splice($index, 1);
    		};

				

			
				
		
		});