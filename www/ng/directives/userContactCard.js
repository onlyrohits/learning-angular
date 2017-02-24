(function(){
  var userContactCard = angular.module("myApp").directive("userContactCard", function(){
    return {
      restrict :"E",
      replace:false,
      scope:false,
      controller:function($scope){},
      templateUrl:"/ng/templates/userContactCard.html",
      transclude:true,
    }
  })
})()
// angular sees the directive - > compilation > Controller starts > Linking ($scope and element binding)  > Available as live element in DOM
