(function(){
  var mainController = angular.module('myApp').controller('mainController', function($scope){
    $scope.userInfo ={
      email:'',
      password:''
    }
    $scope.loginUser = function(){
      console.log($scope.userInfo);
    }
  })
})();
