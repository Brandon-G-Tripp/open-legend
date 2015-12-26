System.register(["angular", "./childstate2.tpl"], function (_export) {
  var angular, childstate2Module;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }, function (_childstate2Tpl) {}],
    execute: function () {
      "use strict";

      childstate2Module = angular.module("admin.childstate2", ["app/admin/childstate2/childstate2.tpl.html"]);

      childstate2Module.controller("Childstate2Ctrl", ["$scope", function ($scope) {
        $scope = $scope;
        console.log("childstate2!");
      }]);

      _export("default", childstate2Module);
    }
  };
});
//# sourceMappingURL=../../../app/admin/childstate2/childstate2.js.map