(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $http, $timeout) {
        var validate = function () {
            //verifies that the username and the password are filled up by the user
            return $scope.user.username != "" && $scope.user.password != "" ? true : false;
        }
        var runBusyAnimation = function () {
            console.log("we pretend that there is an animation running right now..");
        }
        var postBackServer = function () {
            //var url="http://localhost:8080/webapi/employees/" + $scope.user.username
            //$http.get(url).then(function (response) {
              
            //    if (response.data.empno ==$scope.user.password) {
            //        console.log("we have successful authentication..");
            //    }
            //}, function (response) {
            //    console.log("we have failed authentication..");
            //})
            $timeout(function () {
                if ($scope.user.username == "niranjan_awati" && $scope.user.password == "41993") {
                    console.log("user is authenticated .. ");
                }
                else {
                    console.log("user has failed authentication");
                }
            }, 2000)
            console.log("we are not sure when this line would run , before or after the server response");
        }
        var endBusyAnimation = function () {
            console.log("the animation is stopped and the user can see the login screen again");
        }
        var invalidate = function () {
            //all that needs to be done before the user sees the error message
        }
        $scope.user = {
            username: "",
            password:""
        }
        $scope.login = function () {
            if (validate()==true) {
                runBusyAnimation();
                postBackServer();
                endBusyAnimation();
            }
            else {
                invalidate();
            }
        }
    })
})();