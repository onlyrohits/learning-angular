(function(){
  angular.module('eduApp').controller('mainController', function($scope){
    $scope.message='This is a message from within the controller'
  })
  .controller('homeController', function($scope, $route, srvUsers){
    $scope.userInfo= {
      login:'',
      passwd:''
    }
    $scope.hasError = false;
    $scope.errorMessage =''
    var isValidEmail = function(email){
      if (email  =='' || email.length>25 || /[a-zA-Z0-9]*/.test(email)==false ){
        return false;
      }
      else{
        return true;
      }
    }
    var isValidPasswd = function(passwd){
      if (passwd  =='' || passwd.length >25 ){
        return false;
      }
      else{
        return true;
      }
    }
    var displayValidationError = function(){
      $scope.hasError= true;
      $scope.errorMessage="Please check your login and passwd none of which can be empty or null"
      $scope.userInfo.passwd = ''
    }
    $scope.login= function(){
      if(isValidEmail($scope.userInfo.login) && isValidPasswd($scope.userInfo.passwd)){
        //JSON - JS object notation
        //GET, PUT/PATCH, POST, DELETE - verbs
        srvUsers.getUser($scope.userInfo.login, $scope.userInfo.passwd).then(function(data){
          console.log('authentication complete')
          console.info('logging in the data in the controller')
          console.debug(data)
          if (data.email !==undefined){
            console.debug('authentication passed')
          }
          else{
            console.debug('authentication failed')
          }
        }, function(data){

          console.error('Error from the server')
        })
        console.log('this is from the inside the controller')
      }
      else{
        displayValidationError()
      }
    }
    $scope.reload= function(){
       $route.reload()
    }

  })
  .controller('courseController', function($scope){

  })
  .controller('employeesController', function($scope){

  })
})()
