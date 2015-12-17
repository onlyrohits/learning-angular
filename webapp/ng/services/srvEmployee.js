(function () {
    var srvEmployee = angular.module("myApp").service("srvEmployee", function ($q,$timeout, $http, $rootScope) {
        this.ofEmpno = function (empno) {
            var deferred = $q.defer();
            var url = "http://vpunplepun2-01:8085/data/employees.json"
            var result = null;
            $rootScope.$broadcast("server-busy");
            $timeout(function () {
                $http.get(url).then(function (response) {
                    $.each(response.data.employees, function (index, elem) {
                        if (elem.empno.toString() == empno) {
                            result = elem;
                            return true;
                        }
                    });
                    if (result != null) {
                        deferred.resolve(result);
                        $rootScope.$broadcast("server-success");
                    }
                    else {
                        deferred.reject({ errorMessage: "the user was not authenticated" });
                        $rootScope.$broadcast("server-fail");
                    }

                }, function (response) {
                    deferred.reject({ errorMessage: "there a problem in getting the employees" });
                    $rootScope.$broadcast("server-fail");
                })
            },4000)
            
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
        this.getAll = function () {
            var deferred = $q.defer();
            var url = "http://vpunplepun2-01:8085/data/employees.json"
            $http.get(url).then(function (response) {
                deferred.resolve(response.data.employees);
            }, function (response) {
                deferred.reject({ errorMessage: "there a problem in getting the employees" })
            })
            return deferred.promise;
        }
    })
})();