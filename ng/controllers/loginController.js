(function () {
    var loginController = angular.module("myNgApp").controller("loginController", function ($scope, $location, $http) {
        $scope.username = "";
        $scope.password = "";
        $scope.login = function () {
            /*this is where we do the login activity
             * 
             */
            var url = "http://vpunplepun2-01:8085/data/employees.json";
            $http.get(url).then(function (response) {
                var employees = response.data.employees;
                var emp = employees.filter(function (el) {
                    return el.email == $scope.username;
                })[0];
                if (emp.account.password ==$scope.password) {
                    console.info("authentication was successful")
                    $location.url("/employees");
                }
                else {
                    console.error("check username and password combination");
                }
            }, function (response) {

            });

           
        }
    })


})();