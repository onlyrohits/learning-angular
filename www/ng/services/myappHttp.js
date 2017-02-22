(function(){
  var myappHttp = angular.module("myApp").service("myappHttp", function($http, $q, $timeout, $window){
    this.getUser = function(userEmail){
      // $q : interceptor service
      var deferred = $q.defer();
      var url = "http://127.0.0.1:8037/ng/users.json";
      $http.get(url).then(function(response){
        //HTTP 201, 200 301, 302
        $timeout(function(){
          var result =response.data.data.filter(function(el, index){
            return el.email ==userEmail
          })[0]
          deferred.resolve(result);
        }, 3000);
      }, function(response){
       // HTTP 404 400 500 401
          $timeout(function(){
            deferred.reject(response.data);
          }, 3000)
     });
      return deferred.promise;
    }
    this.cacheUser = function(userInfo){
      $window.localStorage["user"] = angular.toJson(userInfo);
    }
    this.getCachedUser = function(){
      return angular.fromJson($window.localStorage["user"]);
    }
    this.clearCachedUser = function(){
      $window.localStorage["user"] = angular.toJson(null);
    }
    this.getUsers = function(){
      // $q : interceptor service
      var deferred = $q.defer();
      var url = "http://127.0.0.1:8037/ng/users.json";
      $http.get(url).then(function(response){
        //HTTP 201, 200 301, 302
        deferred.resolve(response.data.data);
      }, function(response){
       // HTTP 404 400 500 401
          deferred.reject(response.data);
     });
      return deferred.promise;
    }
  })
})()
