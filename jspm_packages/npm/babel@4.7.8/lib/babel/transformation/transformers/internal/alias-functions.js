/* */ 
"use strict";
var _interopRequireWildcard = function(obj) {
  return obj && obj.__esModule ? obj : {"default": obj};
};
exports.Program = Program;
exports.FunctionDeclaration = FunctionDeclaration;
var t = _interopRequireWildcard(require("../../../types/index"));
var functionChildrenVisitor = {enter: function enter(node, parent, scope, state) {
    if (this.isFunction() && !node._aliasFunction) {
      return this.skip();
    }
    if (node._ignoreAliasFunctions)
      return this.skip();
    var getId;
    if (this.isIdentifier() && node.name === "arguments") {
      getId = state.getArgumentsId;
    } else if (this.isThisExpression()) {
      getId = state.getThisId;
    } else {
      return ;
    }
    if (this.isReferenced())
      return getId();
  }};
var functionVisitor = {enter: function enter(node, parent, scope, state) {
    if (!node._aliasFunction) {
      if (this.isFunction()) {
        return this.skip();
      } else {
        return ;
      }
    }
    scope.traverse(node, functionChildrenVisitor, state);
    return this.skip();
  }};
var go = function go(getBody, node, scope) {
  var argumentsId;
  var thisId;
  var state = {
    getArgumentsId: function getArgumentsId() {
      return (!argumentsId && (argumentsId = scope.generateUidIdentifier("arguments")), argumentsId);
    },
    getThisId: function getThisId() {
      return (!thisId && (thisId = scope.generateUidIdentifier("this")), thisId);
    }
  };
  scope.traverse(node, functionVisitor, state);
  var body;
  var pushDeclaration = function pushDeclaration(id, init) {
    if (!body)
      body = getBody();
    body.unshift(t.variableDeclaration("var", [t.variableDeclarator(id, init)]));
  };
  if (argumentsId) {
    pushDeclaration(argumentsId, t.identifier("arguments"));
  }
  if (thisId) {
    pushDeclaration(thisId, t.thisExpression());
  }
};
function Program(node, parent, scope) {
  go(function() {
    return node.body;
  }, node, scope);
}
;
function FunctionDeclaration(node, parent, scope) {
  go(function() {
    t.ensureBlock(node);
    return node.body.body;
  }, node, scope);
}
exports.FunctionExpression = FunctionDeclaration;
exports.__esModule = true;
