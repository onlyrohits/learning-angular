(function(){
  angular.module('eduApp').controller('mainController', function($scope){
    $scope.message='This is a message from within the controller'
  })
  .controller('homeController', function($scope){
    $scope.userInfo= {
      login:'',
      passwd:''
    }
    $scope.login= function(){
      console.debug($scope.userInfo.login)
      console.debug($scope.userInfo.passwd)
    }
  })
  .controller('courseController', function($scope){

  })
  .controller('employeesController', function($scope){

  })
})()
