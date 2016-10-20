(function(){
angular.module('eduApp')
.service('srvUsers', function($http, $q){
    this.getUser = function(login, passwd){
      var url = 'http://127.0.0.1:5380/api/employees.json'
      var deferred = $q.defer()
      $http.get(url).then(function(response){
        console.table(response.data.userdata)
         var users= response.data.userdata
         var result =users.filter(function(el, index){
           return (el.email==login && el.passwd ==passwd)
         })
         if (result.length ==1){
           deferred.resolve(result[0])
         }
         else if(result.length <=0){
           deferred.resolve({})
         }
      }, function(response){
          deferred.reject({})
      })
      return deferred.promise
    }
  })
.service('srvCourses', function($http, $q, $timeout){
    this.getCourses = function(){
      var url = 'http://127.0.0.1:5380/api/courses.json';
      var deferred = $q.defer();
      $http.get(url).then(function(response){
        console.table(response.data.coursedata)
        deferred.resolve(response.data.coursedata);
      }, function(response){
        console.error('Error downloading from the api');
        deferred.reject({msg:'Error downloading the data from the api'});
      })
      return deferred.promise;
    }

    this.filterCourse = function(id){
      var url = 'http://127.0.0.1:5380/api/courses.json';
      var deferred = $q.defer();
      $http.get(url).then(function(response){
        var filtered = response.data.coursedata.filter(function(el, index){
          return el.id ==id;
        })
        $timeout(function(){
          deferred.resolve(filtered[0]);
        }, 5000)
      }, function(response){
        console.error('Error downloading from the api');
        deferred.reject({msg:'Error downloading the data from the api'});
      })
      return deferred.promise;
    }
  })
})()
