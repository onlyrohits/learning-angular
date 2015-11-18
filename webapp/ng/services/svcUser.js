(function () {
    var $svcUser = angular.module("myApp").service("$svcUser", function ($http, $timeout, $q) {
        this.loggedInUser = null;
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
                if (username=="niranjan_awati" && password =="41993") {
                    console.log("$svcUser/authenticate: the user has been authenticated");
                    deferred.resolve({
                        email: "niranjan_awati",
                        empno: 41993,
                        alias: "Niranjan V Awati",
                        location: { title: "pune", code: "PUN" },
                        role: {title:"lecturer"}
                    });
                }
                else {
                    console.log("$svcUsr/authenticate: the user has failed authentication");
                    deferred.reject({ErrorMessage:"the user has failed authentication!"});
                }
            }, 2500)

            return deferred.promise;
        }
    })
})();