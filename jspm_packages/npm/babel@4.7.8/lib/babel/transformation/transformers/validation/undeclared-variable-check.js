/* */ 
"use strict";
var _interopRequireWildcard = function(obj) {
  return obj && obj.__esModule ? obj : {"default": obj};
};
var _interopRequire = function(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
};
exports.Identifier = Identifier;
var levenshtein = _interopRequire(require("leven"));
var messages = _interopRequireWildcard(require("../../../messages"));
var optional = exports.optional = true;
function Identifier(node, parent, scope, file) {
  if (!this.isReferenced())
    return ;
  if (scope.hasBinding(node.name))
    return ;
  var bindings = scope.getAllBindings();
  var closest;
  var shortest = -1;
  for (var name in bindings) {
    var distance = levenshtein(node.name, name);
    if (distance <= 0 || distance > 3)
      continue;
    if (distance <= shortest)
      continue;
    closest = name;
    shortest = distance;
  }
  var msg;
  if (closest) {
    msg = messages.get("undeclaredVariableSuggestion", node.name, closest);
  } else {
    msg = messages.get("undeclaredVariable", node.name);
  }
  throw file.errorWithNode(node, msg, ReferenceError);
}
exports.__esModule = true;
