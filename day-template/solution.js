"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { importFile } = require("../libs/import-file");

const FILES = {
  example: importFile("./day-template/input-example.txt"),
  actual: importFile("./day-template/input-actual.txt"),
};

// console.log(FILES.example);
// console.log(FILES.actual);

function partOne(file) {}

function partTwo(file) {}

console.log(partOne(FILES.example));
console.log(partOne(FILES.actual));

// console.log(partTwo(FILES.example));
// console.log(partTwo(FILES.actual));

module.exports = { FILES };
