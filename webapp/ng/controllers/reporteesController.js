(function () {
    var reporteesController = angular.module("myApp").controller("reporteesController", function ($scope,$svcUser) {
        console.log("reporteesController : initiated  ..");
        console.log("reporteesController : logging the logged in user");
        console.log($svcUser.loggedInUser);
    })
})();