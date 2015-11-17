(function () {
    var myApp = angular.module("myApp", []);
    var mainController = angular.module("myApp").controller("mainController", function ($scope) {
        $scope.users = [
            {
                alias: "niranjan vijay awati",
                du: "eta",
                location: "pune",
                contact:"34242343"
            },
             {
                 alias: "niranjan",
                 du: "eta",
                 location: "mysore",
                 contact:"56567"
             }
        ];
        $scope.user = null;
        $scope.currentUser = 0;

        $scope.switchUser = function () {
            if ($scope.currentUser==1) {
                $scope.user = $scope.users[$scope.currentUser - 1];
                $scope.currentUser = 0;
                return;
            }
            if ($scope.currentUser == 0) {
                $scope.user = $scope.users[$scope.currentUser + 1];
                $scope.currentUser = 1;
                return;
            }
        }
        $scope.data = {
            message:""
        }
        $scope.message = "this is a new message";
    })
})(); //iife - immediately invoked function expression

