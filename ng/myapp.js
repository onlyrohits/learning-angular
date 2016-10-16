(function(){
  myapp= angular.module('myapp', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'ng/views/home.html', controller:'mainController'})
    .when('/home',{templateUrl:'ng/views/home.html', controller:'mainController'})
    .when('/courses',{templateUrl:'ng/views/courses.html', controller:'coursesController'})
    .otherwise({redirectTo:"/"})
  })
})()
