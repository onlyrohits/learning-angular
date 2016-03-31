(function () {
    var loginController = angular.module("myNgApp").controller("loginController", function ($scope) {
        $scope.username = "";
        $scope.password = "";
        $scope.login = function () {
            console.debug("we are ready to login the user...");
            console.debug($scope.username);
            console.debug($scope.password);
        }
    })


})();