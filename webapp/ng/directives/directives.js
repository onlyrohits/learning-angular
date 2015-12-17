(function () {
    var empRow = angular.module("myApp").directive("empRow", function () {
        return {
            replace:true,
            restrict: "A",
            templateUrl: "/ng/directives/empRow.html",
            controller: function ($scope) {
                $scope.onClickRemove = function () {
                    $scope.employeeRemove()
                }
            },
            scope: {
                employee: "=",
                employeeRemove:"&"
            },

        }
    })
})()