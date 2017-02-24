(function(){
  var loggedUserOnly = angular.module("myApp").directive("loggedUserOnly", function($routeParams,myappHttp, $location){
    return {
      restrict :"A",
      replace:false,
      scope:false,
      controller:function($scope){
        if ($routeParams.email == undefined) {
          $location.url("/");
        }
        if(myappHttp.getCachedUser() ==null || myappHttp.getCachedUser() ===undefined){
          $location.url("/");
        }
        console.log(myappHttp.getCachedUser().email)
        if($routeParams.email != myappHttp.getCachedUser().email){

          $location.url("/");
        }
        $scope.user = myappHttp.getCachedUser();
      }
    }
  })
})()
