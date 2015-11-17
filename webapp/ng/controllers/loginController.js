(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $http, $timeout) {
        console.log("loginController : initiated..");
        $scope.user = {
            username: "",
            password: "",
        };
        $scope.onLogin = function () {
            console.log("loginController: we are now ready to login..");
            if ($scope.user.username!="" && $scope.user.password!="") {
                console.log("loginController: bingo ! we are now ready to hit the server..");
                //var url = "http://vpunplepun2-01:8080/webapi/users"; //this is imaginary url for the api
                //$http.get(url).then(function (response) {
                //    //suucess

                //}, function (response) {
                //    //failure
                //    console.log(response.ErrorMessage);
                //}); //this is on a different thread
                console.log("we are waiting for the server to respond!, but wait a minute! there aint any server :)");

                $timeout(function () {
                    console.log("we have received the response fro the server");
                }, 2500)
                //this is on the main thread
                console.log("you have no idea and control on when this statement would run");
            }
            else {
                console.log("loginController: oops ! either of the inputs is empty..");
            }
        }
    })
})();