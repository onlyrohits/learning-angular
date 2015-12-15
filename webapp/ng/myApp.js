(function myfunction() {
    var myApp = angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .when("/login", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .when("/reportees", { templateUrl: "/ng/views/reportees.html", controller: "" })
        .when("/accconfig", { templateUrl: "/ng/views/accountconfig.html", controller: "" })
        .otherwise({redirectTo:"/"});
    });

})(); //IIFE - immediately invoked function expression