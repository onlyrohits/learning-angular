(function () {
    var loginMandate = angular.module("myApp").directive("loginMandate", function () {
        return {
            restrict: "A",
            scope: {
                fnGetUser:"="
            },
            compile: function (telem, tattrs) {
                console.log("we are inside the compile function");
                return{
                    pre: function (scope, elem, attrs) {
                        console.log("this is from inside the pre function");
                        console.log(scope.fnGetUser);
                    },
                    post: function (scope,elem, attrs) {
                        console.log("this is from inside the post function");
                        console.log(scope.fnGetUser);
                    }
                }
            },
            controller: function ($scope, $location, $routeParams) {
                console.log("we are inside the controller function");
                if ($scope.fnGetUser == null) {
                    console.log("we have no function to get the user from");
                }
                else {
                    $scope.fnGetUser($routeParams.empno).then(function (data) {
                        console.log("we have the user received from the server");
                        console.log(data);
                    }, function () {
                        $location.url("/")
                    })
                }
            }
        }
    });

})();