(function () {

    var myNgApp = angular.module("myNgApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", { templateUrl: "ng/views/login.html", controller: "loginController" })
            .when("/login", { templateUrl: "ng/views/login.html", controller: "loginController" })
            .when("/employees", { templateUrl: "ng/views/employees.html", controller: "employeesController" })
            .when("/test", { templateUrl: "ng/views/test.html", controller: "" })
    })

})();