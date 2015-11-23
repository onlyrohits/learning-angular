(function () {
    var $svcUser = angular.module("myApp").service("$svcUser", function ($http, $timeout, $q, $mockService) {
        this.loggedInUser = null;
        this.ofEmpno = function (empno) {
            var deferred = $q.defer();
            $timeout(function () {
                var result = null;
                $.each($mockService().employees, function (indexInArray, valueOfElement) {
                    if (valueOfElement.empno == empno) {
                        result = valueOfElement;
                        return true;
                    }
                });
                if (result == null) {
                    deferred.reject({ ErrorMessage: "we could not get the employee you were lookingfor .." });
                }
                else {
                    deferred.resolve(result);
                }
            }, 1500)
            return deferred.promise;
        }
        this.authenticate = function (username, password) {
            var deferred = $q.defer();
            //var url = "http://vpunplepun2-01:8080/webapi/users"; //this is imaginary url for the api
            //$http.get(url).then(function (response) {
            //    //suucess

            //}, function (response) {
            //    //failure
            //    console.log(response.ErrorMessage);
            //}); //this is on a different thread
            console.log("we are waiting for the server to respond!, but wait a minute! there aint any server :)");

            $timeout(function () {
                if (username == "niranjan_awati" && password == "41993") {
                    console.log("$svcUser/authenticate: the user has been authenticated");
                    deferred.resolve($mockService().niranjan);
                }
                else {
                    console.log("$svcUsr/authenticate: the user has failed authentication");
                    deferred.reject({ ErrorMessage: "the user has failed authentication!" });
                }
            }, 2500)

            return deferred.promise;
        }

    })
})();