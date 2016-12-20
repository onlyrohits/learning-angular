(function(){
  var testController = angular.module('myApp').controller('testController', function($scope){
    $scope.message = 'This is from the controller';
    $scope.testClick = function(){
      console.log('this i the test click frominside the controller');
    }
  })
})();
