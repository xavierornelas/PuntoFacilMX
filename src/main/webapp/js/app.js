(function(){

var app = angular.module('puntoFacilMXApp',[ ]);

app.controller('mainCtrl', ['$scope','$http','$rootScope',function($scope,$http,$rootScope){ 
	$rootScope.nameApp='PUNTO FACIL MX';
	$scope.mainMenu='pages/menu/mainMenu.html';
	$scope.summary='pages/module/summary.html';
	$scope.messages='pages/top/message.html';

}]);

})();
