System.register(["angular", "angular-material", "common/directives/mainwrap/mainwrap", "./home.controller", "./home.tpl", "./home.css!"], function (_export) {
  var angular, mainwrap, homeModule;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }, function (_angularMaterial) {}, function (_commonDirectivesMainwrapMainwrap) {
      mainwrap = _commonDirectivesMainwrapMainwrap["default"];
    }, function (_homeController) {}, function (_homeTpl) {}, function (_homeCss) {}],
    execute: function () {
      "use strict";

      homeModule = angular.module("home", [mainwrap.name, "app/home/home.tpl.html", "home.controller.js"]);

      homeModule.config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state("home", {
          url: "/",
          templateUrl: "app/home/home.tpl.html",
          controller: "HomeCtrl",
          controllerAs: "homeCtrl"
        });
      }]);

      _export("default", homeModule);
    }
  };
});
//# sourceMappingURL=../../app/home/home.js.map