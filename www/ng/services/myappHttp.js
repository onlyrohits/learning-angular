(function(){
  var myappHttp = angular.module("myApp").service("myappHttp", function($http, $q, $timeout){
    this.getUsers = function(){
      // $q : interceptor service
      var deferred = $q.defer();
      var url = "http://127.0.0.1:8037/ng/users.json";
      $http.get(url).then(function(response){
        //HTTP 201, 200 301, 302
        $timeout(function(){
          deferred.resolve(response.data.data);
        }, 3000);
      }, function(response){
       // HTTP 404 400 500 401
          $timeout(function(){
            deferred.reject(response.data);
          }, 3000)
     });
      return deferred.promise;
    }
  })
})()
