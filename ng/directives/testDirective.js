(function () {

    var testDirective = angular.module("myNgApp").directive("testDirective", function () {
        return {
            restrict: "E",
            scope: true,
            controller: function ($scope) {
                $scope.message = "this is the message from the directive";
                $scope.user = { name: "niranjan vijay awati" };
                $scope.locations = ["trivandrum", "chandigarh"];
            },
            templateUrl:"ng/templates/testDirective.html"
        }
    })

})();