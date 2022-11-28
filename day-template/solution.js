"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const importFile = require("../libs/import-file");

const FILES = {
  example: "./day-XX/example-input.txt",
  input: "./day-XX/puzzle-input.txt",
};

console.log(importFile("./day-template/foo.txt"));

module.exports = { FILES };
