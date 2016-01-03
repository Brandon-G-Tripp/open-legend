System.register(["angular", "angular-material", "common/directives/mainwrap/mainwrap", "./boons.controller", "./boons.tpl", "./boons.header.tpl", "./boons.css!"], function (_export) {
  var angular, mainwrap, boonsCtrl, boonsModule;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }, function (_angularMaterial) {}, function (_commonDirectivesMainwrapMainwrap) {
      mainwrap = _commonDirectivesMainwrapMainwrap["default"];
    }, function (_boonsController) {
      boonsCtrl = _boonsController["default"];
    }, function (_boonsTpl) {}, function (_boonsHeaderTpl) {}, function (_boonsCss) {}],
    execute: function () {
      "use strict";

      boonsModule = angular.module("boons", [mainwrap.name, "app/boons/boons.tpl.html", "app/boons/boons.header.tpl.html", boonsCtrl.name]);

      boonsModule.config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state("boons", {
          url: "/boons",
          templateUrl: "app/boons/boons.tpl.html",
          controller: "BoonsCtrl",
          controllerAs: "boonsCtrl",
          authenticate: false
        });
      }]);

      _export("default", boonsModule);
    }
  };
});
//# sourceMappingURL=../../app/boons copy/boons.js.map