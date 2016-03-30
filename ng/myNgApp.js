(function () {

    var myNgApp = angular.module("myNgApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {templateUrl:"ng/views/login.html", controller:""})
    })

})();