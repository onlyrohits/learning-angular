(function(){
  var employeesController = angular.module('myApp').controller('employeesController', function($scope){
    $scope.employees = [
      {id:"person1", password:'41993', role:'developer'},
      {id:"person2", password:'41993', role:'developer'},
      {id:"person3", password:'41993', role:'developer'},
      {id:"person4", password:'41993', role:'developer'},
      {id:"person5", password:'41993', role:'developer'},
      {id:"person6", password:'41993', role:'developer'},
      {id:"person7", password:'41993', role:'developer'},
    ];
    $scope.dropLast = function(){
      var deletedEmployee =$scope.employees.splice(0,1);
    }
  })
})();
