(function () {

    var likely = angular.module("myNgApp").filter("likely", function () {
        return function (list, phrase) {
            if (phrase == "") {
                return list;
            }
            else {
               return list.filter(function (el) {
                    return el.email.indexOf(phrase) > -1;
                })
            }
        }
    })

})();