(function(){
  var employeesController = angular.module("myApp").controller("employeesController", function($scope, myappHttp){
    myappHttp.getUsers().then(function(data){
      $scope.employees  = data;
      console.table($scope.employees);
    });
    $scope.addNew = function(){
      $scope.employees.push({email:"kneerunjun@gmail.com", location:"Pune", role:6})
    }
  })
})()
