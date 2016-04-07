(function () {

    var svcEmployee = angular.module("myNgApp").service("svcEmployee", function ($http, $q, $window, $timeout) {
        var _loggedInUser = null;
        this.loggedInUser = function (value) {
            if (value === undefined) {
                return _loggedInUser ==null ? JSON.parse($window.localStorage["user"]):_loggedInUser;
            }
            else {
                $window.localStorage["user"] = JSON.stringify(value);
                _loggedInUser = value;
            }
        };
        this.Delete = function (listToDelete) {
            var deferred = $q.defer();
            

            var promises = [];
            angular.forEach(listToDelete, function (value, key) {
                var url = "http://localhost:8080/webapi/employees/:id".replace(/:id/, value.empno);
                var promise = $http.delete(url);
                promises.push(promise);

            })
            $q.all(promises).then(function () {
                deferred.resolve({})
            }, function () {
                deferred.reject({})
            });

            return deferred.promise;
        }
        this.GETOfEmail = function (email) {
            var deferred = $q.defer();
            var url = "http://vpunplepun2-01:8085/data/employees.json";
         
            $http.get(url).then(function (response) {
                deferred.resolve(response.data.employees)
              
            }, function (response) {
                deferred.reject({});
            }); 
            return deferred.promise;

        }
        this.GETAll = function () {
            var deferred = $q.defer();
            var url = "http://vpunplepun2-01:8085/data/employees.json";
            console.debug("we have now send the request to the server..");
            //$timeout(function () {
            //    console.debug("we have received the response from the server");

            //    deferred.resolve([]);
            //}, 1700)
            $http.get(url).then(function (response) {
                deferred.resolve(response.data.employees)
            }, function (response) {
                deferred.reject({});
            });
            return deferred.promise;

        }
    })

})();