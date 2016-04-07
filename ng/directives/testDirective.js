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
                console.info("level-one:controller");
            },
            transclude: true,
            compile: function (tElem, tAttrs) {
                console.info("level-one:compiler");
                return {
                    pre: function (scope, elem, attrs, ctroller) {
                        console.info("level-one:pre");

                    },
                    post: function (scope, elem, attrs, ctroller) {
                        console.info("level-one:post");
                    },
                }
            }
        }
    });
    var levelTwo = angular.module("myNgApp").directive("levelTwo", function () {
        return {
            restrict: "E",
            template: "<div> <p>this is the text from level-two</p><ng-transclude></ng-transclude></div>",
            controller: function ($scope) {
                console.info("level-two:controller");
            },
            transclude: true,
            compile: function (tElem, tAttrs) {
                console.info("level-two:compiler");
                return {
                    pre: function (scope, elem, attrs, ctroller) {
                        console.info("level-two:pre");

                    },
                    post: function (scope, elem, attrs, ctroller) {
                        console.info("level-two:post");
                    },
                }
            }
        }
    })
    var levelThree = angular.module("myNgApp").directive("levelThree", function () {
        return {
            restrict: "E",
            template: "<div></div>",
            controller: function ($scope) {
                console.info("level-three:controller");
            },
            compile: function (tElem, tAttrs) {
                console.info("level-three:compiler");
                return {
                    pre: function (scope, elem, attrs, ctroller) {
                        console.info("level-three:pre");

                    },
                    post: function (scope, elem, attrs, ctroller) {
                        console.info("level-three:post");
                    },
                }
            }
        }
    })
})();