(function(){
  var empCard = angular.module('myApp').directive('empCard', function(){
    return {
      restrict:"E",
      replace:false,
      templateUrl:'/ng/templates/empCard.html',
      scope:true,
      controller:function($scope){
        console.log('Controller instantiated ..');
        $scope.toggCollapse = function(){
          $scope.collapse = !$scope.collapse;
        }
        $scope.collapse = true;
      },
      transclude:true,
      //TRANSCLUSION
      // compile:function(tElem, tAttrs){
      //   console.log('Compiler instantiated');
      //   return {
      //     pre:function(scope, elem,attrs){
      //       console.log('Pre compiler process instantiated');
      //     },
      //     post:function(scope, elem, attrs){
      //       console.log('Post compiler process instantiated');
      //     }
      //   }
      // }
      // link:function(scope, elem ,attrs){
      //
      // }
    }
  })
})();
