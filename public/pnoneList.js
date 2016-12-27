angular.module('app')
		.directive('phoneList',function(mySocket,localStorageService){
			return{
				scope:{
					phones:'=info'
				},
				templateUrl:'pnoneList.html',
				link:function(scope,elem,attrs){
					console.log(scope);
					elem.find('a').on('click', function(){
						if(elem.find('li').length===0){
					  	   elem.find('ul').append('<input type="text">');
						}
						var len = elem.find('li').length;
						var t = elem.find('li');
						var s=angular.element(t[len-1]).clone();
						//angular.element(t[len-1]).append(s);

						angular.element(elem.find('ul')).append(s);

					})
				}
			}
		})