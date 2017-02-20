(function(){
  var myApp  = angular.module("myApp", []) //global variable
  var myController = myApp.controller("myController",function($scope){
    $scope.message = "this is Hi from inside the controller, but now has been changed";
    var modifyMessage = function(){
      $scope.message = ""
    }
  })
})() //IIFE - immediately invoked function expression
/*
ng-app = kebabcase.. HTML
ngApp = camel case .. JS

*/
