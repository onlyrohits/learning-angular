(function () {
    var myLabel = angular.module("myApp").directive("myLabel", function () {
        return {
            restrict: "E",
            replace: false,
            templateUrl: "/ng/directives/myLabel/mylabel.html",
            controller: function ($scope) {
                $scope.message = "hi there we are from inside the directive";
            }
        }
    })
})();