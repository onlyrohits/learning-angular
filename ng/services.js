(function(){
  angular.module('myapp').service('loginService', function($http, $q){
    this.login= function(login, password){
      //this can get us the authentication result when asked for
      var deferred  = $q.defer()
      var url ='http://127.0.0.1:5380/api/employees.json'
      $http.get(url).then(function(response){
        var employees = response.data.data.employees
        var employee  =employees.filter(function(e, index){
          return e.email==login
        })[0]
        if (employee !== undefined && employee.password == password){
          //here we can go ahead top change the location fron the home page
          deferred.resolve(employee)
        }
        else{
          deferred.reject({msg:'failed authentication, please check the username and password again'})
        }
      }, function(response){
        console.error(response)
      })
      return deferred.promise
    }
  })
})()
