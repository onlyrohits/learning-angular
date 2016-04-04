(function () {

    var employeeRow = angular.module("myNgApp").directive("employeeRow", function () {
        return {
            restrict: "A",
            replace: true,
            scope: {
                emp: "=",
                onRowClick:"&"
            },
            templateUrl:"ng/templates/employeeRow.html",
            controller: function ($scope) {
                $scope.rowClicked = function () {
                    $scope.emp.picked = !$scope.emp.picked;
                    $scope.onRowClick({ employee: $scope.emp });
                }
            },
            link: function (scope,elem, attrs, ctroller) {

            }

        }
    })

})();