"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { importFile } = require("../libs/import-file");

const FILES = {
  example: importFile("./day-XX/input-example.txt"),
  actual: importFile("./day-XX/input-actual.txt"),
};

function partOne(file) {
  return;
}

function partTwo(file) {
  return;
}

console.log(partOne(FILES.example));
// console.log(partOne(FILES.actual));

// console.log(partTwo(FILES.example));
// console.log(partTwo(FILES.actual));

module.exports = { FILES, partOne, partTwo };
