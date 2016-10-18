(function(){
  var eduApp=angular.module('eduApp', ["ngRoute"])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/libs/views/home.html', controller:'homeController'})
    .when('/home', {templateUrl:'/libs/views/home.html', controller:'homeController'})
    .when('/courses', {templateUrl:'/libs/views/courses.html', controller:'courseController'})
    .when('/employees', {templateUrl:'/libs/views/employees.html', controller:''})
    .otherwise({redirectTo:'/'})
  })
})()
