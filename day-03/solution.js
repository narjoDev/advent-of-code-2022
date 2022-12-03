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

function identifySharedItem(rucksack) {
  const firstHalf = rucksack.slice(0, rucksack.length / 2);
  for (let i = rucksack.length / 2; i < rucksack.length; i++) {
    if (firstHalf.includes(rucksack[i])) return rucksack[i];
  }
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
  const input = [...file];
  let elf;
  let group = [];
  let badges = [];
  while (typeof (elf = input.pop()) !== "undefined") {
    // console.log(elf);
    if (group.length < 3) {
      group.push(new Set(elf.split("")));
    }
    if (group.length === 3) {
      let [a, b, c] = group;
      const intersection = new Set([...a].filter((x) => b.has(x) && c.has(x)));
      // console.log(intersection);
      const badge = Array.from(intersection)[0];
      badges.push(badge);
      group = [];
    }
  }

  return badges.map((b) => getPriority(b)).reduce((a, b) => a + b);
}

// console.log(partOne(FILES.example)); // 157
// console.log(partOne(FILES.actual)); // 7763

console.log(partTwo(FILES.example)); // 70
console.log(partTwo(FILES.actual)); // 2569

module.exports = { FILES };
