(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope) {
        $scope.user = {
            username: "",
            password:""
        }
        $scope.login = function () {
            console.log("we have started the process of login");
            console.log($scope.user);
        }
    })
})();