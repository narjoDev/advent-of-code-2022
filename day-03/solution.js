"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { importFile } = require("../libs/import-file");

const FILES = {
  example: importFile("./day-03/input-example.txt"),
  actual: importFile("./day-03/input-actual.txt"),
};

// console.log(FILES.example);
// console.log(FILES.actual);

function identifySharedItem(rucksack) {
  const firstHalf = rucksack.slice(0, rucksack.length / 2);
  // const secondCompartment = rucksack.slice(rucksack.length / 2);
  for (let i = rucksack.length / 2; i < rucksack.length; i++) {
    if (firstHalf.includes(rucksack[i])) return rucksack[i];
  }
}

function getPriority(itemType) {
  const charCode = itemType.charCodeAt(0);
  // console.log(charCode);
  if (97 <= charCode && charCode <= 122) return charCode - 96;
  if (65 <= charCode && charCode <= 90) return charCode - 38;
}

// console.log(getPriority("a"));
// console.log(getPriority("z"));
// console.log(getPriority("A"));
// console.log(getPriority("Z"));

function partOne(file) {
  return file
    .map((line) => getPriority(identifySharedItem(line)))
    .reduce((a, b) => a + b);
}

function partTwo(file) {}

console.log(partOne(FILES.example)); // 157
console.log(partOne(FILES.actual)); // 7763

// console.log(partTwo(FILES.example));
// console.log(partTwo(FILES.actual));

module.exports = { FILES };
