(function(){
  var userService = angular.module('myApp').service('userService', function($timeout, $http, $q){
    this.getDetails = function(userid){
      var deferred = $q.defer();
      $timeout(function(){
        deferred.reject( {id:"kneerunjun", password :"41993"});
      }, 2500);
      // var url = 'http://127.0.0.1:8080/users.json';
      // $http.get(url).then(function(data){
      //   //success
      // }, function(data){
      //   //error
      // });
      return deferred.promise;
      // return promise;
    }
  })
})()//IIFE
