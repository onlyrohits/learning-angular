(function(){
  var testController = angular.module("myApp").controller("testController", function($scope){
    $scope.message = "This is from inside the controller";
    $scope.itemPicked = function(){
      console.log("this is from inside the controller on the top");
    }
  })
})()
