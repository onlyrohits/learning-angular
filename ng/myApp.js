(function(){
  var myApp = angular.module('myApp', ['ngRoute']).config(function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/ng/views/login.html', controller:'mainController'})
    .when('/login', {templateUrl:'/ng/views/login.html', controller:'mainController'})
    .when('/employees', {templateUrl:'/ng/views/employees.html', controller:'mainController'})
    .otherwise({redirectTo:'/'})
  });
})(); //IIFE - immediately invoked function expression
