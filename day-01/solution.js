"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { importFile } = require("../libs/import-file");

const FILES = {
  example: importFile("./day-01/input-example.txt"),
  actual: importFile("./day-01/input-actual.txt"),
};

// console.log(FILES.example);
// console.log(FILES.actual);

function separateLists(rawInput) {
  const separated = [];
  let stagingList = [];
  for (const line of rawInput) {
    if (line === "") {
      if (stagingList.length > 0) {
        separated.push(stagingList);
      }
      stagingList = [];
    } else {
      stagingList.push(line);
    }
  }
  return separated;
}

function maxListSum(l) {
  const sums = l.map((e) => e.map((j) => parseInt(j)).reduce((a, b) => a + b));
  return sums.reduce((m, x) => (m > x ? m : x));
}

function partOne(file) {
  return maxListSum(separateLists(file));
}

console.log(partOne(FILES.example));
console.log(partOne(FILES.actual));

module.exports = { FILES };
