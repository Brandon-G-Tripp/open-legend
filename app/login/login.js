System.register(["angular", "angular-material", "common/services/user.service", "common/directives/mainwrap/mainwrap", "common/directives/loginComponent/loginComponent", "./login.tpl", "./login.css!"], function (_export) {
  var angular, userService, mainwrap, loginComponent, loginModule;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }, function (_angularMaterial) {}, function (_commonServicesUserService) {
      userService = _commonServicesUserService["default"];
    }, function (_commonDirectivesMainwrapMainwrap) {
      mainwrap = _commonDirectivesMainwrapMainwrap["default"];
    }, function (_commonDirectivesLoginComponentLoginComponent) {
      loginComponent = _commonDirectivesLoginComponentLoginComponent["default"];
    }, function (_loginTpl) {}, function (_loginCss) {}],
    execute: function () {
      "use strict";

      loginModule = angular.module("login", [userService.name, mainwrap.name, loginComponent.name, "app/login/login.tpl.html"]);

      loginModule.config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state("login", {
          url: "/login",
          templateUrl: "app/login/login.tpl.html",
          authenticate: false
        });
      }]);

      _export("default", loginModule);
    }
  };
});
//# sourceMappingURL=../../app/login/login.js.map