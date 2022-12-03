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

function identifySharedItem(sack) {
  const inFirstHalf = new Set(sack.slice(0, sack.length / 2));
  const inSecondHalf = new Set(sack.slice(sack.length / 2));
  return [...inFirstHalf].filter((x) => inSecondHalf.has(x))[0];
}

function getPriority(itemType) {
  const charCode = itemType.charCodeAt(0);
  if (97 <= charCode && charCode <= 122) return charCode - 96;
  if (65 <= charCode && charCode <= 90) return charCode - 38;
}

function partOne(file) {
  return file
    .map((line) => getPriority(identifySharedItem(line)))
    .reduce((a, b) => a + b);
}

function partTwo(file) {
  const elves = [...file];
  let elf;
  let group = [];
  let sumOfPriorities = 0;
  while (typeof (elf = elves.pop()) !== "undefined") {
    if (group.length < 3) {
      group.push(new Set(elf.split("")));
    }
    if (group.length === 3) {
      let [a, b, c] = group;
      const itemInCommon = [...a].filter((x) => b.has(x) && c.has(x))[0];
      sumOfPriorities += getPriority(itemInCommon);
      group = [];
    }
  }
  return sumOfPriorities;
}

console.log(partOne(FILES.example)); // 157
console.log(partOne(FILES.actual)); // 7763

console.log(partTwo(FILES.example)); // 70
console.log(partTwo(FILES.actual)); // 2569

module.exports = { FILES };
