(function(){
  angular.module('myApp')
  .directive('levelOne', function($compile){
    return{
      restrict:"E",
      replace:false,
      // scope:true,
      // templateUrl:'/ng/templates/scoped.html',
      transclude:true,
      template:'<div ng-transclude></div>',
      controller:function($scope){
        console.log('this is from inside levelOne controller');
        // this is wehre you have js only
        // IT IS  NOT RECOMMNDED TO MODIFY ANY HTML HERE - design is a complete disaster
      },
      compile:function(tElem, tAttrs){
        console.log('this is from inside levelOne compile');
        // you can modify the html as you like , you can can use jquery
        return {
          pre:function(scope,elem, attrs){
            console.log('this is from inside levelOne pre');
            //LAST WINDOW OF HTML MODIFICATIONS
            
          },
          post:function(scope,elem, attrs){
            console.log('this is from inside levelOne post');
            //ANY MODIFICATIONS WOULD BE ONLY ON SCOPE
            // elem .. modified .. ng-repeat
            $compile(elem)(scope);
          }
        }
      }
    }
  })
  .directive('levelTwo', function(){
    return{
      restrict:"E",
      replace:false,
      transclude:true,
      template:'<div ng-transclude></div>',
      controller:function($scope){
        console.log('this is from inside levelTwo controller');
      },
      compile:function(tElem, tAttrs){
        console.log('this is from inside levelTwo compile');
        return {
          pre:function(scope,elem, attrs){
            console.log('this is from inside levelTwo pre');
          },
          post:function(scope,elem, attrs){
            console.log('this is from inside levelTwo post');
          }
        }
      }
    }
  })
  .directive('levelThree', function(){
    return{
      restrict:"E",
      replace:false,
      // scope:{
      //   message:'=',
      //   clck:'&',
      // },
      // templateUrl:'/ng/templates/scoped.html',
      template:'<div></div>',
      controller:function($scope){
        // $scope.message ='This is from inside the isolated scope'
        console.log('this is from inside levelThree controller');
      },
      compile:function(tElem, tAttrs){
        console.log('this is from inside levelThree compile');
        return {
          pre:function(scope,elem, attrs){
            console.log('this is from inside levelThree pre');
          },
          post:function(scope,elem, attrs){
            console.log('this is from inside levelThree post');
          }
        }
      }
    }
  })
})();
