// 3D s of Angular : data binding , dependency injection
// SOLID - S -single respo, O -open closed, L -liskov substitution , I - interface, D - IoC or DI
(function(){
  var myApp = angular.module("myApp",["ngRoute"]).config(function($routeProvider){
    $routeProvider
    .when("/", {templateUrl:"/ng/templates/login.html", controller:"loginController"})
    .when("/login", {templateUrl:"/ng/templates/login.html", controller:"loginController"})
    .when("/users/:email/employees", {templateUrl:"/ng/templates/employees.html", controller:"employeesController"})
    .when("/users/:email/details", {templateUrl:"/ng/templates/userDetails.html", controller:""})
    .otherwise({redirectTo:"/"})
  })
})();
