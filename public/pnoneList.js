angular.module('app')
		.directive('phoneList',function(mySocket,localStorageService,$compile){
			return{
				scope:{
					clientInfo:'=info',

				},
				templateUrl:'pnoneList.html',
				link:function(scope,elem,attrs){
					console.log(scope);
					
					elem.find('a').on('click', function(){
						 scope.clientInfo.phones.push(123456789);
						 el=angular.element("<li ng-repeat=item in clientInfo.phones>{{item}}</li>");
						 $compile(el)(scope.clientInfo.phones);
						/*angular.element(elem.find('ul'))
								.append("<li><input type='text'  ng-model='items'/></li>");*/
					});
					
					console.log(scope.clientInfo)

				}
			}
		})