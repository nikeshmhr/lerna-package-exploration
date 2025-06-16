"use strict";

const package1 = require("@mnikesh/service-sdk.package-1");

module.exports = package2;

function package2() {
  const message = package1();
  console.log(`message from package 1 => ${message}`);
  return "Hello from package2 - Edit 70";
}

function package2a() {
  return "Hello from package2a function - update 001";
}

module.exports.package2a = package2a;
