"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { importFile } = require("../libs/import-file");

const FILES = {
  example: importFile("./day-04/input-example.txt"),
  actual: importFile("./day-04/input-actual.txt"),
};

function fullyContained(line) {
  const [a1, a2, b1, b2] = line.split(/\D/).map((str) => parseInt(str));
  return (a1 <= b1 && a2 >= b2) || (b1 <= a1 && b2 >= a2);
}

function overlapsAtAll(line) {
  const [a1, a2, b1, b2] = line.split(/\D/).map((str) => parseInt(str));
  return (a1 >= b1 && a1 <= b2) || (b1 >= a1 && b1 <= a2);
}

function partOne(file) {
  return [...file]
    .map((line) => fullyContained(line))
    .reduce((acc, e) => (e ? ++acc : acc), 0);
}

function partTwo(file) {
  return [...file]
    .map((line) => overlapsAtAll(line))
    .reduce((acc, e) => (e ? ++acc : acc), 0);
}

console.log(partOne(FILES.example)); // 2
console.log(partOne(FILES.actual)); // 547

console.log(partTwo(FILES.example)); // 4
console.log(partTwo(FILES.actual)); // 843

module.exports = { FILES, partOne, partTwo, fullyContained };
