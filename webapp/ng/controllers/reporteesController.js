(function () {
    var reporteesController = angular.module("myApp").controller("reporteesController", function ($scope, $svcUser, $location) {
        console.log("reporteesController : initiated  ..");
        console.log("reporteesController : logging the logged in user");
        var init = function () {
            if ($svcUser.loggedInUser == null) {
                //this is a dirty login , we would want to go back to the login page
                $location.url("/")
            }
        }; init();
    })
})();