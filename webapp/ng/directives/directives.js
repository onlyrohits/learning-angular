(function () {
    var empRow = angular.module("myApp").directive("empRow", function () {
        return {
            replace:true,
            restrict: "A",
            templateUrl: "/ng/directives/empRow.html",
            controller: function ($scope) {
             
            },
            scope: {
                employee: "=",
                employeeRemove:"&"
            },

        }
    })
    var busyGui = angular.module("myApp").directive("busyGui", function () {
        return {
            restrict: "E",
            templateUrl: "/ng/directives/busyGui.html",
            scope: {
                
            },
            transclude: true,
            controller: function ($scope, $rootScope) {
                $scope.showAnimation = false;
                $rootScope.$on("server-busy", function (evt, evtparam) {
                    $scope.showAnimation = true;

                });
                $rootScope.$on("server-success", function (evt, evtparam) {
                    $scope.showAnimation = false;

                });
                $rootScope.$on("server-fail", function (evt, evtparam) {
                    $scope.showAnimation = false;

                })
            },


        }
    })
})()