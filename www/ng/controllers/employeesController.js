(function(){
  var employeesController = angular.module("myApp").controller("employeesController", function($scope, myappHttp){
    $scope.phrase ="";
    myappHttp.getUsers().then(function(data){
      data.forEach(function(el, index){
        el.isDeleted  = false;
        el.markDelete = function(){
          el.isDeleted = !el.isDeleted;
        }
      })
      $scope.employees  = data;

    });
    $scope.addNew = function(){
      $scope.employees.push({email:"kneerunjun@gmail.com", location:"Pune", role:6})
    }
    $scope.confirmChanges  = function(){
      console.table($scope.employees.filter(function(el, index){
        return el.isDeleted ==true;
      }))
    }
  })
})()
