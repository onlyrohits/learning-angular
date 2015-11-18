(function () {
    var $mockService = angular.module("myApp").factory("$mockService", function () {
        return function(){
            return {
                niranjan: {
                    email: "niranjan_awati",
                    empno: 41993,
                    alias: "Niranjan V Awati",
                    location: { title: "pune", code: "PUN" },
                    role: { title: "lecturer" }
                }
            }
        }
    })
})();