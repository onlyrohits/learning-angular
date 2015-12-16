(function myfunction() {
    var myApp = angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .when("/login", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .when("/reportees", { templateUrl: "/ng/views/reportees.html", controller: "reporteesController" })
        .when("/accconfig", { templateUrl: "/ng/views/accountconfig.html", controller: "" })
        .otherwise({redirectTo:"/"});
    })
    .filter("likely", function () {
        return function (input, phrase) {
            if (phrase!="") {
                var filteredResult = [];
                $.each(input, function (index, elem) {
                    if (elem.email.indexOf(phrase) >= 0) {
                        filteredResult.push(elem);
                    }
                });
                return filteredResult;
            }
            else {
                return input
            }
        }
    });
    

})(); //IIFE - immediately invoked function expression