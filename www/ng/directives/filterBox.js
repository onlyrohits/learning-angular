(function(){
  var filterBox = angular.module("myApp").directive("filterBox", function(){
    return {
      restrict:"E",
      replace:false,
      templateUrl:"/ng/templates/filterBox.html",
      scope:false,
      controller:function($scope){
        $scope.phrase="";
      }
    }
  })
})()
