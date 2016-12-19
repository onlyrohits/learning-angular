(function(){
  var mainController = angular.module('myApp').controller('mainController', function($scope, userService, $location){
    $scope.userInfo ={
      email:'',
      password:''
    }
    $scope.ribbon = null;
    $scope.loginUser = function(){
      $scope.ribbon = {message:'Authenticating .. sit tight!'}
      userService.getDetails($scope.userInfo.email).then(function(data){
        console.log('We have 200 OK from the server')
        console.debug(data);
        $scope.ribbon = null;
        $location.url('/employees');
      }, function(data){
        $scope.ribbon= null;
        console.log('We have 500 Internal server error ')
        console.debug(data);
      });
    }
  })
})();
