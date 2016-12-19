(function(){
  var userService = angular.module('myApp').service('userService', function($timeout, $http, $q){
    this.getDetails = function(userid){
      var deferred = $q.defer();
      // $timeout(function(){
      //   deferred.resolve( {id:"kneerunjun", password :"41993", role:'developer'});
      // }, 2500);
      var url = 'http://127.0.0.1:8082/ng/users.json';
      //HTTP  REST - GET / PUT / POST DELETE
      $http.get(url).then(function(response){
        //success
        var user  = response.data.users.filter(function(el, index){
          return el.email ==userid;
        })[0];
        $timeout(function(){
          deferred.resolve(user)
        }, 5000)
      }, function(response){
        //error
      });
      return deferred.promise;
      // return promise;
    }
  })
})()//IIFE
