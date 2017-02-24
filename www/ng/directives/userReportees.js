(function(){
  var userReportees = angular.module("myApp").directive("userReportees", function(){
    return {
      restrict :"A",
      replace:false,
      scope:false,
      controller:function($scope){
        $scope.$watch("user", function(after, before){
          if (after !==null && after!==undefined){
            console.log($scope.user);
            // download the reportees ..the user is filled up (hydrating the object);
          }
        })
      }
    }
  })
})()
