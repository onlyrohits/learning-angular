(function(){
  var likelyEmps = angular.module('myApp').filter('likelyEmps', function(){
    return function(input, phrase){
      if(phrase !=='' && phrase!==null){
        return input.filter(function(el, index){
          return el.role.indexOf(phrase)> -1 ?true:false
        })
      }
      else{
        return input;
      }
    }
  })
})();
