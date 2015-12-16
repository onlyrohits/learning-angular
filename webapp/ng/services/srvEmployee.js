(function () {
    var srvEmployee = angular.module("myApp").service("srvEmployee", function ($q,$timeout, $http) {
        this.ofEmpno = function (empno) {
            var deferred = $q.defer();
            var url = "http://vpunplepun2-01:8085/data/employees.json"
            var result = null;
            $http.get(url).then(function (response) {
                $.each(response.data.employees, function (index, elem) {
                    if (elem.empno.toString() == empno) {
                        result = elem;
                        return true;
                    }
                });
                if (result!=null) {
                    deferred.resolve(result);
                }
                else {
                    deferred.reject({ errorMessage: "the user was not authenticated" });
                }
               
            }, function (response) {
                deferred.reject({errorMessage:"there a problem in getting the employees"})
            })
            //$timeout(function () {
            //    if (empno =="41993") {
            //        deferred.resolve({})
            //    }
            //    else {
            //        deferred.reject({ errorMessage: "the user has failed authentication" });
            //    }
            //}, 2000)
            return deferred.promise;
        }
    })
})();