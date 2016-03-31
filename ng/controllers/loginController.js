(function () {
    var loginController = angular.module("myNgApp").controller("loginController", function ($scope, $location, svcEmployee) {
        $scope.username = "";
        $scope.password = "";
        $scope.login = function () {
          
            svcEmployee.GETOfEmail($scope.username).then(function (data) {
                /*this is deferred.resolve*/
                var emp = data.filter(function (el) {
                    return el.email == $scope.username;
                })[0];
                if (emp.account.password == $scope.password) {
                    console.info("authentication was successful");
                    $location.url("/employees");
                }
                else {
                    console.error("check username and password combination");
                }
            }, function (data) {
                /*this is deferred.reject*/
            });
           
           
        }
    })


})();