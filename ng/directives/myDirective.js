(function () {

    var myDirective = angular.module("myNgApp").directive("myDirective", function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "ng/templates/myDirective.html",
            scope: {},
            controller: function ($scope) {
                $scope.message = "this is Hi from inside the directive";
            },
            link: function (scope, elem, attrs, ctroller) {

            }
        }
    })

})();