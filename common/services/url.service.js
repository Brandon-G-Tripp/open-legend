System.register(["angular"], function (_export) {
  var angular, urlServiceModule;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }],
    execute: function () {
      "use strict";

      urlServiceModule = angular.module("url.service.js", []);

      urlServiceModule.factory("URL", function () {
        return {
          apiBase: "http://localhost:9000"
        };
      });

      _export("default", urlServiceModule);
    }
  };
});
//# sourceMappingURL=../../common/services/url.service.js.map