// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Gen$ReasonGenPractice = require("../src/gen/Gen.bs.js");

function naturalNumbers(param) {
  var n = {
    contents: 1
  };
  return function (param) {
    var cur = n.contents;
    n.contents = n.contents + 1 | 0;
    return cur;
  };
}

var nats = naturalNumbers(undefined);

console.log(Gen$ReasonGenPractice.nth(0, nats));

console.log(Gen$ReasonGenPractice.nth(0, nats));

console.log(Gen$ReasonGenPractice.nth(0, nats));

exports.naturalNumbers = naturalNumbers;
exports.nats = nats;
/* nats Not a pure module */