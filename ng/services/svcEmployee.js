(function () {

    var svcEmployee = angular.module("myNgApp").service("svcEmployee", function ($http, $q) {
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
    })

})();