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
    var tabbyTab = angular.module("myNgApp").directive("tabbyTab", function () {
        return {
            restrict: "E",
            templateUrl: "ng/templates/tabbyTab.html",
            transclude: true,

            controller: function ($scope) {
                $scope.tabs = [];
                this.addTab = function (tab) {
                    console.info("adding tab leaf .."); console.debug(tab);
                    $scope.tabs.push(tab);
                }
                $scope.tabClicked = function (i) {
                    $scope.tabs.forEach(function (ele,index) {
                        if (i !== index) {
                            ele.deactivate();
                        }
                        else {
                            ele.activate();
                        }
                    })
                }
            }
        }
    })
    var tabLeaf = angular.module("myNgApp").directive("tabLeaf", function ($compile) {
        return {
            restrict: "E",
            templateUrl: "ng/templates/tabLeaf.html",
            transclude: true,
            controller: function ($scope) {

            },
            require:"^tabbyTab",
            compile: function (tElem, tAttrs) {
                console.debug("from inside the compile function");
                console.debug(tElem[0]);
                return {
                    pre: function (scope, elem,attrs, ctroller, tclusion) {
                        console.debug("from inside the pre function");
                        console.debug(elem[0]);
                        tclusion(function (ele, scope) {
                            var leaf = {
                                title: attrs.title,
                                content: ele,
                                active: attrs.active ? true : false,
                                activate: function () {
                                    $(elem[0]).children(".leaf-content").append(ele);
                                },
                                deactivate: function () {
                                    $(elem[0]).children(".leaf-content").empty();
                                    scope.$destroy();
                                }
                            };
                            ctroller.addTab(leaf)
                            if (attrs.active !== undefined) {
                                leaf.activate();
                            }
                        })
                    },
                    
                }
            }
        }
    })
})();