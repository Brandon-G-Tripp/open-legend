/* */ 
"use strict";
var _interopRequire = function(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
};
exports.has = has;
exports.wrap = wrap;
var t = _interopRequire(require('../../types/index'));
function has(node) {
  var first = node.body[0];
  return t.isExpressionStatement(first) && t.isLiteral(first.expression, {value: "use strict"});
}
function wrap(node, callback) {
  var useStrictNode;
  if (exports.has(node)) {
    useStrictNode = node.body.shift();
  }
  callback();
  if (useStrictNode) {
    node.body.unshift(useStrictNode);
  }
}
exports.__esModule = true;