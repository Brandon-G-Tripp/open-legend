System.register(["angular", "angular-material", "common/directives/mainwrap/mainwrap", "./forms.tpl", "./forms.css!"], function (_export) {
  var angular, mainwrap, formModule;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }, function (_angularMaterial) {}, function (_commonDirectivesMainwrapMainwrap) {
      mainwrap = _commonDirectivesMainwrapMainwrap["default"];
    }, function (_formsTpl) {}, function (_formsCss) {}],
    execute: function () {
      "use strict";

      formModule = angular.module("forms", [mainwrap.name, "app/forms/forms.tpl.html"]);

      formModule.config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state("forms", {
          url: "/forms",
          templateUrl: "app/forms/forms.tpl.html",
          controller: "FormsCtrl",
          controllerAs: "formsCtrl"
        });
      }]);

      formModule.controller("FormsCtrl", ["$scope", function ($scope) {
        $scope = $scope;
        console.log("forms!");
      }]);

      _export("default", formModule);
    }
  };
});
//# sourceMappingURL=../../app/forms/forms.js.map