(function () {
    var loginMandate = angular.module("myApp").directive("loginMandate", function () {
        return {
            restrict: "A",
            scope: false,
            compile: function (telem, tattrs) {
                console.log("we are inside the compile function");

                return{
                    pre: function (scope, elem, attrs) {
                       //process here
                    },
                    post: function (scope, elem, attrs) {
                        scope.getuser();
                    }
                }
            },
            controller: function ($scope, $location, $routeParams) {
                $scope.getuser = function () {
                    console.log("loginMandate: we are now ready to hydrate the user");
                    $scope.user = {
                        empno: 41993,
                        email: "niranjan_Awati"
                    };
                    $scope.users = [];
                  
                }
            }
        }
    });
    var watchingUser = angular.module("myApp").directive("watchingUser", function () {
        return {
            restrict: "E",
            scope: false,
          
            controller: function ($scope) {
                $scope.$watchCollection("users", function (newValue, oldValue) {
                    if (newValue != null) {
                        console.log("watchingUser:the user object is received from the server");
                    }
                })
            }
        }
    });

})();