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
                /*this is actually the post link function*/
                $(elem[0]).after("<tr><td colspan='2'></td><td colspan=3>Reportee1</td></tr><tr><td colspan='2'></td><td colspan=3>Reportee2</td></tr>");
            }

        }
    })

})();