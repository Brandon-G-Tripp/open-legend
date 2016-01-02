System.register(["angular", "angular-material", "common/directives/mainwrap/mainwrap", "./banes.controller", "./banes.tpl", "./banes.header.tpl", "./banes.css!"], function (_export) {
  var angular, mainwrap, banesCtrl, banesModule;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }, function (_angularMaterial) {}, function (_commonDirectivesMainwrapMainwrap) {
      mainwrap = _commonDirectivesMainwrapMainwrap["default"];
    }, function (_banesController) {
      banesCtrl = _banesController["default"];
    }, function (_banesTpl) {}, function (_banesHeaderTpl) {}, function (_banesCss) {}],
    execute: function () {
      "use strict";

      banesModule = angular.module("banes", [mainwrap.name, "app/banes/banes.tpl.html", "app/banes/banes.header.tpl.html", banesCtrl.name]);

      banesModule.config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state("banes", {
          url: "/banes",
          templateUrl: "app/banes/banes.tpl.html",
          controller: "BanesCtrl",
          controllerAs: "banesCtrl",
          authenticate: false
        });
      }]);

      _export("default", banesModule);
    }
  };
});
//# sourceMappingURL=../../app/banes/banes.js.map