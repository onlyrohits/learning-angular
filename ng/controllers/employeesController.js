(function(){
  var employeesController = angular.module('myApp').controller('employeesController', function($scope,$location){
    $scope.empLike ='';
    $scope.employees = [
      {id:"person1", password:'41993', role:'developer'},
      {id:"person2", password:'41993', role:'admin'},
      {id:"person3", password:'41993', role:'manager'},
      {id:"person4", password:'41993', role:'dbadmin'},
      {id:"person5", password:'41993', role:'quality'},
      {id:"person6", password:'41993', role:'developer'},
      {id:"person7", password:'41993', role:'developer'},
    ];
    $scope.employees.forEach(function(el, index){
      el.markedFoDelete = false;
      el.toggleMark = function(){
        el.markedFoDelete = !el.markedFoDelete;
      }
      el.gotoDetails = function(){
        $location.url('/employees/:i/details'.replace(/:[a-z]/,el.id))
      }
    });
    $scope.dropLast = function(){
      var deletedEmployee =$scope.employees.splice(0,1);
    }
  })
})();
