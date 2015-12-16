(function () {
    var srvEmployee = angular.module("myApp").service("srvEmployee", function ($q,$timeout, $http) {
        this.ofEmpno = function (empno) {
            var deferred = $q.defer();
            //var url="http://vpunplepun2-01:8085/data/employees.json" + $scope.user.username
            //$http.get(url).then(function (response) {

            //    if (response.data.empno ==$scope.user.password) {
            //        console.log("we have successful authentication..");
            //    }
            //}, function (response) {
            //    console.log("we have failed authentication..");
            //})
            $timeout(function () {
                if (empno =="41993") {
                    deferred.resolve({})
                }
                else {
                    deferred.reject({ errorMessage: "the user has failed authentication" });
                }
            }, 2000)
            return deferred.promise;
        }
    })
})();