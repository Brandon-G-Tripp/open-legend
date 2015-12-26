System.register(["angular"], function (_export) {
  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }],
    execute: function () {
      "use strict";

      angular.module("app/banes/banes.tpl.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app/banes/banes.tpl.html", "<main-wrap toolbar-template=\"app/banes/banes.header.tpl.html\" layout=\"column\" flex=\"\" layout-fill=\"\"><md-content><div class=\"inner-pad\"><md-list><md-list-item ng-repeat=\"thisPower in banesCtrl.powers | filter:banesCtrl.textSearchFilter(thisPower) | filter:banesCtrl.powerLevelFilter(thisPower) track by $index\"><div class=\"md-list-item-text\"><h2 class=\"md-display-1\">{{thisPower.name}}</h2><strong>Duration:</strong> {{thisPower.duration}}<br><br><strong>Power Level:</strong> <span ng-repeat=\"power in thisPower.power track by $index\"><span ng-if=\"$index != 0\">/</span> {{power}}</span><br><br><strong>Attack Attributes:</strong> <span ng-repeat=\"attackAttribute in thisPower.attackAttributes track by $index\"><span ng-if=\"$index != 0\">,</span> {{attackAttribute}}</span><br><br><strong>Attack:</strong><br><ul><li ng-repeat=\"attack in thisPower.attack track by $index\">{{attack}}</li></ul><div ng-if=\"thisPower.description\"><h3 class=\"md-headline\">Description</h3><p ng-bind-html=\"thisPower.description | unsafe\"></p></div><div ng-if=\"thisPower.effect\"><h3 class=\"md-headline\">Effect</h3><p ng-bind-html=\"thisPower.effect | unsafe\"></p></div><div ng-if=\"thisPower.special\"><h3 class=\"md-headline\">Special</h3><p ng-bind-html=\"thisPower.special | unsafe\"></p></div><br><br></div><md-divider ng-if=\"!$last\"></md-divider></md-list-item></md-list></div></md-content></main-wrap>");
      }]);
    }
  };
});