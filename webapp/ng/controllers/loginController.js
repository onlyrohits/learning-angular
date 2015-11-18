(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $svcUser) {
        console.log("loginController : initiated..");
        $scope.user = {
            username: "",
            password: "",
        };
        $scope.onLogin = function () {
            console.log("loginController: we are now ready to login..");
            if ($scope.user.username!="" && $scope.user.password!="") {
                console.log("loginController: bingo ! we are now ready to hit the server..");
                $svcUser.authenticate($scope.user.username, $scope.user.password)
                    .then(function (data) {
                        console.log("logincontroller: we have authenticated th user");
                        console.log(data);
                }, function (data) {
                    console.log("logincontroller : the user has failed authentication");
                    console.log(data.ErrorMessage);
                });
                //this is on the main thread
                console.log("you have no idea and control on when this statement would run");
            }
            else {
                console.log("loginController: oops ! either of the inputs is empty..");
            }
        }
    })
})();