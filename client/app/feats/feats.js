System.register(["angular", "angular-material", "common/directives/mainwrap/mainwrap", "./feats.controller", "./feats.tpl", "./feats.header.tpl", "./feats.css!"], function (_export) {
  var angular, mainwrap, featsCtrl, featsModule;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }, function (_angularMaterial) {}, function (_commonDirectivesMainwrapMainwrap) {
      mainwrap = _commonDirectivesMainwrapMainwrap["default"];
    }, function (_featsController) {
      featsCtrl = _featsController["default"];
    }, function (_featsTpl) {}, function (_featsHeaderTpl) {}, function (_featsCss) {}],
    execute: function () {
      "use strict";

      featsModule = angular.module("feats", [mainwrap.name, "app/feats/feats.tpl.html", "app/feats/feats.header.tpl.html", featsCtrl.name]);

      featsModule.config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state("feats", {
          url: "/feats",
          templateUrl: "app/feats/feats.tpl.html",
          controller: "FeatsCtrl",
          controllerAs: "featsCtrl",
          authenticate: false
        });
      }]);

      _export("default", featsModule);
    }
  };
});
//# sourceMappingURL=../../app/feats/feats.js.map