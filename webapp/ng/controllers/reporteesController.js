(function () {
    var reporteesController = angular.module("myApp").controller("reporteesController", function ($scope, srvEmployee) {
        $scope.phrase = "";
        $scope.reportees = [];
        srvEmployee.getAll().then(function (data) {
            $scope.reportees = data;
        })
        $scope.employeeRemove = function (index) {
            console.log("the employee to remove from the collection is ..");
            console.log($scope.reportees[index]);
            $scope.reportees.splice(index, 1);
        }
    })
})();