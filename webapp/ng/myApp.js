
(function () {
    var myApp = angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .when("/login", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .when("/reportees", { templateUrl: "/ng/views/reportees.html", controller: "reporteesController" })
        .otherwise({ redirectTo: "/" });
    });
    var mainController = angular.module("myApp").controller("mainController", function ($scope) {

    });
    
})(); //iife - immediately invoked function expression

