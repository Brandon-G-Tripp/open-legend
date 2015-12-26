System.register(["angular", "angular-mocks", "./customEmailValidation", "chai", "chai-jq"], function (_export) {
  var angular, customEmailValidation, chai, chaiJq, expect;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }, function (_angularMocks) {}, function (_customEmailValidation) {
      customEmailValidation = _customEmailValidation["default"];
    }, function (_chai) {
      chai = _chai["default"];
    }, function (_chaiJq) {
      chaiJq = _chaiJq["default"];
    }],
    execute: function () {
      "use strict";

      chai.use(chaiJq);
      expect = chai.expect;

      describe("directive: customEmailValidation", function () {
        var element = undefined;
        var compiled = undefined;
        var scope = undefined;

        beforeEach(angular.mock.module(customEmailValidation.name));

        beforeEach(inject(function ($rootScope, $compile) {
          scope = $rootScope.$new();

          var elementTemplate = "<input type=\"email\" custom-email-validation required name=\"testSignup\" ng-model=\"email\">";
          element = angular.element(elementTemplate);

          compiled = $compile(element)(scope);
          scope.$digest();
        }));

        var checkValid = function (email) {
          it("is valid for " + email, function () {
            scope.email = email;
            scope.$digest();
            expect(element).to.have.$class("ng-valid");
          });
        };

        var checkInvalid = function (email) {
          it("is invalid for " + email, function () {
            scope.email = email;
            scope.$digest();
            expect(element).to.have.$class("ng-invalid");
          });
        };

        checkValid("foo@gmail.com");
        checkValid("foo.bar.baz@yahoo.net");
        checkValid("foo&^(@gmail.com");
        checkValid("z@z.z");

        checkInvalid("");
        checkInvalid("foo");
        checkInvalid("foo@gmail");
      });
    }
  };
});
//# sourceMappingURL=../../../common/directives/customEmailValidation/customEmailValidation.spec.js.map