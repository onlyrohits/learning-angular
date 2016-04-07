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
            template: "<div ng-transclude> </div>",
            controller: function ($scope) {
                console.info("level-one:controller");
            },
            transclude: true,
            scope:{},
            //compile: function (tElem, tAttrs) {
            //    console.info("level-one:compiler");
            //    return {
            //        pre: function (scope, elem, attrs, ctroller) {
            //            console.info("level-one:pre");

            //        },
            //        post: function (scope, elem, attrs, ctroller) {
            //            console.info("level-one:post");
            //        },
            //    }
            //}
        }
    });
    var levelTwo = angular.module("myNgApp").directive("levelTwo", function () {
        return {
            restrict: "E",
            template: "<div></div>",
            controller: function ($scope) {
                $scope.$watch("user.name", function (after, before) {
                    if (after != null && after !== undefined) {
                        console.log(after);
                    }
                });
                $scope.$apply(function () {
                    
                })
            },
            scope:false,
            //compile: function (tElem, tAttrs) {
            //    console.info("level-two:compiler");
            //    return {
            //        pre: function (scope, elem, attrs, ctroller) {
            //            console.info("level-two:pre");

            //        },
            //        post: function (scope, elem, attrs, ctroller) {
            //            console.info("level-two:post");
            //        },
            //    }
            //}
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
    var tabbyTab = angular.module("myNgApp").directive("tabbyTab", function () {
        return {
            restrict: "E",
            scope: {},
            transclude: true,
            controller: function ($scope) {

            },
            link: function (scope, elem, attrs, ctroller, tclusion) {

            },
            templateUrl:"ng/templates/tabbyTab.html"
        }
    })
    var tabbyLeaf = angular.module("myNgApp").directive("tabbyLeaf", function () {
        return {
            restrict: "E",
            scope: {},
            transclude: true,
            controller: function ($scope) {

            },
            compile: function (tElem, tAttrs) {
                return {
                    pre: function (scope, elem, attrs, ctroller, tclusion) {
                        tclusion(function (ele, scope) {
                            if (attrs.active !== undefined) {
                                $(elem[0]).find(".leaf-content").append(ele);
                            }
                        })
                    },
                    post: function (scope, elem, attrs, ctroller, tclusion) {
                        
                    }
                }
            },
            templateUrl: "ng/templates/tabbyLeaf.html"
        }
    })
})();