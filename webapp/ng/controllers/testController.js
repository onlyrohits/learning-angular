(function () {
    var testController = angular.module("myApp").controller("testController", function ($scope, $routeParams, $svcUser, $location) {
        console.log("the empno you are looking for as per the url :" + $routeParams.empno);
        $scope.delgGetUser = $svcUser.ofEmpno;
    })
})();