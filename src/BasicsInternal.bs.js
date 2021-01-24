// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");

function ofList(theList, f) {
  var _l = theList;
  while(true) {
    var l = _l;
    if (!l) {
      return ;
    }
    Curry._1(f, l.hd);
    _l = l.tl;
    continue ;
  };
}

function toList(seq) {
  var result = {
    contents: /* [] */0
  };
  Curry._1(seq, (function (x) {
          result.contents = {
            hd: x,
            tl: result.contents
          };
          
        }));
  return List.rev(result.contents);
}

function length(seq) {
  var result = {
    contents: 0
  };
  Curry._1(seq, (function (param) {
          result.contents = result.contents + 1 | 0;
          
        }));
  return result.contents;
}

function map(f, seqIn) {
  return function (out) {
    return Curry._1(seqIn, (function (in_) {
                  return Curry._1(out, Curry._1(f, in_));
                }));
  };
}

function filter(f, seqIn) {
  return function (out) {
    return Curry._1(seqIn, (function (in_) {
                  if (Curry._1(f, in_)) {
                    return Curry._1(out, in_);
                  }
                  
                }));
  };
}

function iter(f, seq) {
  return Curry._1(seq, f);
}

exports.ofList = ofList;
exports.toList = toList;
exports.length = length;
exports.map = map;
exports.filter = filter;
exports.iter = iter;
/* No side effect */