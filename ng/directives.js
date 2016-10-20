(function(){
  angular.module('eduApp').directive('serverBusy', function(){
    return {
      restrict:"E",
      replace:true,
      templateUrl:'/libs/templates/serverBusy.html',
      scope:{
        show:'='
      },
      controller:function($scope){

      },
      link:function(scope,elem, attrs){}
    }
  })
})() //IIFE
