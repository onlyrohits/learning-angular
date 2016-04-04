(function () {

    var testDirective = angular.module("myNgApp").directive("testDirective", function () {
        return {
            restrict: "E",
            scope: true,
            controller: function ($scope) {
                $scope.message = "this is the message from the directive";
                $scope.user = { name: "niranjan vijay awati" };
                $scope.locations = ["trivandrum", "chandigarh"];
            },
            templateUrl:"ng/templates/testDirective.html"
        }
    })
    var levelOne = angular.module("myNgApp").directive("levelOne", function () {
        return {
            restrict: "E",
            template: "<div> <p>this is the text from level-one</p> <ng-transclude></ng-transclude> </div>",
            controller: function ($scope) {

            },
            transclude:true
        }
    });
    var levelTwo = angular.module("myNgApp").directive("levelTwo", function () {
        return {
            restrict: "E",
            template: "<div> <p>this is the text from level-two</p></div>",
            controller: function ($scope) {

            }
        }
    })
})();