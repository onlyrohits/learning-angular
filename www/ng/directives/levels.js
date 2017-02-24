(function(){
  angular.module("myApp")
  .directive("levelOne", function($rootScope){
    return {
      restrict:"E",
      replace:false,
      scope:false,
      controller:function($scope){
        console.log("LevelOne: controller");
      },
      compile :function(tElem, tAttrs){
        console.log("LevelOne :compilation");
        return {
          pre :function(scope, elem, attrs){
            console.log("LevelOne :pre");
          },
          post:function(scope, elem, attrs){
            console.log("LevelOne :post");
          }
        }
      },
      transclude:true,
      template: "<div ng-transclude></div>"
    }
  })
  .directive("levelTwo", function(){
    return {
      restrict:"E",
      replace:false,
      scope:false,
      controller:function($scope){
        console.log("levelTwo: controller");
      },
      compile :function(tElem, tAttrs){
        console.log("levelTwo :compilation");
        return {
          pre :function(scope, elem, attrs){
            console.log("levelTwo :pre");
          },
          post:function(scope, elem, attrs){
            console.log("levelTwo :post");
          }
        }
      },
      transclude:true,
      template: "<div ng-transclude></div>"
    }
  })
  .directive("levelThree", function(){
    return {
      restrict:"E",
      replace:false,
      scope:false,
      controller:function($scope){
        console.log("levelThree: controller");
      },
      compile :function(tElem, tAttrs){
        console.log("levelThree :compilation");
        return {
          pre :function(scope, elem, attrs){
            console.log("levelThree :pre");
          },
          post:function(scope, elem, attrs){
            console.log("levelThree :post");
          }
        }
      },
      // transclude:true,
      // template: "<div ng-transclude></div>"
    }
  })

  .directive("sharedLevel", function(){
    return {
      restrict:"E",
      replace:false,
      scope:false,
      controller:function($scope){
      },
      templateUrl:"/ng/templates/test.html",
    }
  })
  .directive("inheritedLevel", function(){
    return {
      restrict:"E",
      replace:false,
      scope:true,
      controller:function($scope){
      },
      templateUrl:"/ng/templates/test.html",
    }
  })
  .directive("isolatedLevel", function(){
    return {
      restrict:"E",
      replace:false,
      scope:{
        message:"=",
        onPick :"&"
      },
      controller:function($scope){
        $scope.onPick();
      },
      templateUrl:"/ng/templates/test.html",
    }
  })
})()
