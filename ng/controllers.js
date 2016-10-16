(function(){
  angular.module('myapp')
  .controller('mainController', function($scope, $location,loginService,$route){
    $scope.userInfo={
      login:'',
      password:''
    }
    $scope.errorMessage = '';
    $scope.hasError=false;
    var invalidPassword = function(){
      $scope.hasError=true
      $scope.errorMessage ='Kindly check your password, Passwowrd cannot be more than 12 characters long'
    }
    var invalidLogin= function(){
      $scope.hasError=true
      $scope.errorMessage ='Kindly check your login, Login cannot be more than 12 characters long'
    }
    $scope.login=function(){
      if ($scope.userInfo.login !=='' && $scope.userInfo.password!==''){
        if (/[a-z0-9A-Z]/.test($scope.userInfo.login)==true && $scope.userInfo.login.length <=12){
          if (/[[a-z0-9A-Z@$%*]/.test($scope.userInfo.password)==true && $scope.userInfo.password.length<=12){
            loginService.login($scope.userInfo.login, $scope.userInfo.password).then(function(){
              $location.url('/courses')
            }, function(data){
              console.error(data)
            })
          }
          else{
            invalidPassword()
          }
        }
        else{
          //this is the case whent he login is not in shape
          invalidLogin()
        }
      }

    }
    $scope.reload= function(){
      $route.reload()
    }
  })
  .controller('coursesController',function($scope){})
})()
