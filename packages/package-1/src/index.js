"use strict";

module.exports = package1;

function package1() {
  return "Hello from package1 - Edit 100";
}

function package1a() {
  return "Hello from package1a function";
}

module.exports.package1a = package1a;
