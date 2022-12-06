"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { importFile } = require("../libs/import-file");

const FILES = {
  example: importFile("./day-06/input-example.txt"),
  actual: importFile("./day-06/input-actual.txt"),
};

function partOne(file) {
  const stream = file[0];
  let marker = [];
  for (let i = 0; i < stream.length; i++) {
    if (marker.length >= 4) marker.shift();
    marker.push(stream[i]);
    if (new Set(marker).size === 4) return i + 1;
  }
}

function partTwo(file) {
  return;
}

console.log(partOne(FILES.example)); // 7
console.log(partOne(FILES.actual)); // 1080

// console.log(partTwo(FILES.example));
// console.log(partTwo(FILES.actual));

module.exports = { FILES, partOne, partTwo };
