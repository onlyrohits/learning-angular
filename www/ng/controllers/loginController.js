(function(){
  var loginController = angular.module("myApp").controller("loginController", function($scope,myappHttp,$location){
    myappHttp.clearCachedUser();
    $scope.user ={
      email:"",
      password:""
    }
    $scope.warning =null;
    $scope.serverBusy=null;
    var validation = function(){
      if($scope.user.email !=="" && $scope.user.password!==""){
        if(/^[a-zA-Z0-9_.]*$/.test($scope.user.email) ==true && /^[0-9]*$/.test($scope.user.password)==true){
          return true;
        }
        else{
          return false;
        }
      }
      else{
        return false;
      }
    }
    var validationFailed = function(msg){
      $scope.warning = {message:msg};
    }
    var clearWarning = function(){
      $scope.warning = null;
    }
    $scope.login = function(){
      if(validation() ==true){
        console.log("we have validated and good to go");
        clearWarning();
        $scope.serverBusy = {};
        myappHttp.getUser($scope.user.email).then(function(data){
          $scope.serverBusy = null;
          if (data!==undefined && data!==null) {
            if (data.password == $scope.user.password){
              myappHttp.cacheUser(data);
              $location.url("/users/"+data.email+"/employees");
              // $timeout(function(){
              // }, 100)
            }
          }
        }, function(data){
          $scope.serverBusy = null;
        });
        console.log("we have processed the request and the server has responded");
      }
      else{
        console.info("we have a validation failure")
        validationFailed("Check the email and the password, seems to be something wrong.");
      }
    }
  })
})()
