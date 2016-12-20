(function(){
  var myApp = angular.module('myApp', ['ngRoute']).config(function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/ng/views/login.html', controller:'mainController'})
    .when('/login', {templateUrl:'/ng/views/login.html', controller:'mainController'})
    .when('/employees', {templateUrl:'/ng/views/employees.html', controller:'employeesController'})
    .when('/employees/:id/details', {templateUrl:'/ng/views/employeedetails.html', controller:''})
    .when('/test', {templateUrl:'/ng/views/test.html', controller:''})
    .otherwise({redirectTo:'/'})
  });
})(); //IIFE - immediately invoked function expression
