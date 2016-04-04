(function () {

    var testController = angular.module("myNgApp").controller("testController", function ($scope) {
        $scope.message = "message from the controller";
        $scope.user = { name: "niranjan" };
        $scope.locations = [
            "Pune", "Chennai", "Mysore", "Bangalore"
        ];
    })

})();