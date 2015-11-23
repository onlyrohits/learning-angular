(function () {
    var loginMandate = angular.module("myApp").directive("loginMandate", function () {
        return {
            restrict: "A",
            scope: {
                fnGetUser: "=",
            },
            compile: function (telem, tattrs) {
                console.log("we are inside the compile function");

                return{
                    pre: function (scope, elem, attrs) {
                        //var attrValue = $(elem[0]).attr("login-mandate");
                        //console.log(attrValue);
                        //var fn = scope.$eval($(elem[0]).attr("login-mandate"));
                        //console.log(fn);
                    },
                    post: function (scope, elem, attrs) {
                       
                    }
                }
            },
            controller: function ($scope, $location, $routeParams) {
                $scope.fnGetUser();
            }
        }
    });

})();