(function () {

    var employeesController = angular.module("myNgApp").controller("employeesController", function (svcEmployee, $location, $scope) {
        $scope.employees = [];
        $scope.phrase = "";
        if (svcEmployee.loggedInUser() == null || svcEmployee.loggedInUser() === undefined) {
            $location.url("/");
        }
        else {
            svcEmployee.GETAll().then(function (data) {
                data.forEach(function (el) {
                    el.picked = false;
                })
                $scope.employees = data;
                console.table($scope.employees);
            }, function (data) {
                /*not worried about this error response now*/
            })
        }
        $scope.save = function () {
            var itemsChanged = $scope.employees.filter(function (el) {
                return el.picked == true;
            });
            console.table(itemsChanged);
        }
        $scope.employeeClicked = function (employee) {
            console.info("we have received the function call on change of the employee");
            console.debug(employee);
        }
    })

})();