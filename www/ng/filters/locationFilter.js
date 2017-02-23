(function(){
  var locationFilter = angular.module("myApp").filter("locationFilter", function(){
    return function(input,phrase){
       if (phrase!==undefined && phrase !==""){
         return input.filter(function(el, index){
           return  el.location.toLowerCase().indexOf(phrase.toLowerCase()) >=0;

         });
       }
       else{
         return input;
       }
    }
  })
})()
