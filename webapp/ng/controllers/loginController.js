(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, srvEmployee, $location) {
        var validate = function () {
            //verifies that the username and the password are filled up by the user
            return $scope.user.username != "" && $scope.user.password != "" ? true : false;
        }
        var endBusyAnimation = function () {
            console.log("the animation is stopped and the user can see the login screen again");
            $scope.showAnimation = false;
        }
        var runBusyAnimation = function () {
            console.log("we pretend that there is an animation running right now..");
            $scope.showAnimation = true;
        }
        var postBackServer = function () {
            srvEmployee.ofEmpno($scope.user.password).then(function (data) {
                console.log("user is authenticated .. ");
                endBusyAnimation();
                //from here we have to move to the next page when the user is authenticated
                $location.url("/reportees");
            }, function (data) {
                console.log("user has failed authentication");
                endBusyAnimation();
            });
            console.log("we are not sure when this line would run , before or after the server response");
        }
        
        var invalidate = function () {
            //all that needs to be done before the user sees the error message
            $scope.invalidated = true;
        }
        $scope.showAnimation = false;
        $scope.invalidated = false;
        $scope.user = {
            username: "",
            password:""
        }
        $scope.login = function () {
            if (validate()==true) {
                runBusyAnimation();
                postBackServer();
                
            }
            else {
                invalidate();
            }
        }
    })
})();