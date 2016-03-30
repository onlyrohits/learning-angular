//iife;
(function () {

    var myApp = angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "ng/views/login.html", controller: "" })
        .when("/login", { templateUrl: "ng/views/login.html", controller: "" })
        .when("/employees", { templateUrl: "ng/views/employees.html", controller: "" })
    })
    .controller("mainController", function ($scope) {

    });

})();
    