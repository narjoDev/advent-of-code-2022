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

function locateMarker(stream, markerLength) {
  let marker = [];
  for (let i = 0; i < stream.length; i++) {
    if (marker.length >= markerLength) marker.shift();
    marker.push(stream[i]);
    if (new Set(marker).size === markerLength) return i + 1;
  }
}

function partOne(file) {
  return locateMarker(file[0], 4);
}

function partTwo(file) {
  return locateMarker(file[0], 14);
}

// console.log(partOne(FILES.example)); // 7
// console.log(partOne(FILES.actual)); // 1080

console.log(partTwo(FILES.example)); // 19
console.log(partTwo(FILES.actual)); // 3645

module.exports = { FILES, partOne, partTwo };
