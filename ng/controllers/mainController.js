(function(){
  var mainController = angular.module('myApp').controller('mainController', function($scope, userService, $location){
    $scope.userInfo ={
      email:'',
      password:''
    }

    $scope.loginUser = function(){
      userService.getDetails($scope.userInfo.email).then(function(data){
        console.log('We have 200 OK from the server')
        console.debug(data);
        $location.url('/employees');
      }, function(data){
        console.log('We have 500 Internal server error ')
        console.debug(data);
      });
    }
  })
})();
