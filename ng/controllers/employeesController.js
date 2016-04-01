(function () {

    var employeesController = angular.module("myNgApp").controller("employeesController", function (svcEmployee, $location, $scope) {
        $scope.employees = [];
        $scope.phrase = "";
        if (svcEmployee.loggedInUser() == null || svcEmployee.loggedInUser() === undefined) {
            $location.url("/");
        }
        else {
            svcEmployee.GETAll().then(function (data) {
                $scope.employees = data;
                console.table($scope.employees);
            }, function (data) {
                /*not worried about this error response now*/
            })
        }
    })

})();