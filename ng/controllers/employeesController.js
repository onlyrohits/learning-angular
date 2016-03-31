(function () {

    var employeesController = angular.module("myNgApp").controller("employeesController", function (svcEmployee, $location) {
        if (svcEmployee.loggedInUser() == null || svcEmployee.loggedInUser()===undefined) {
            $location.url("/");
        }
    })

})();