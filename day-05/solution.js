"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { importFile } = require("../libs/import-file");

const FILES = {
  example: importFile("./day-05/input-example.txt"),
  actual: importFile("./day-05/input-actual.txt"),
};

function splitInput(file) {
  let procedureStartLine;
  for (let i = 0; i < file.length; i++) {
    if (file[i].startsWith("move")) {
      procedureStartLine = i;
      break;
    }
  }
  const drawing = file.slice(0, procedureStartLine - 1); // 'i-1' omits blank line
  const procedure = file.slice(procedureStartLine);
  return [drawing, procedure];
}

function parseDrawing(drawing) {
  const numberOfStacks = parseInt(
    drawing[drawing.length - 1].match(/(\d)\D*$/)[1]
  );
  const height = drawing.length - 1;
  const crateMap = [];
  for (let stackNumber = 1; stackNumber <= numberOfStacks; stackNumber++) {
    const stack = [];
    const column = (stackNumber - 1) * 4 + 1;
    for (let i = height - 1; i >= 0; i--) {
      const crate = drawing[i][column];
      if (!/[a-zA-Z]/.test(crate)) break;
      stack.push(crate);
    }
    crateMap.push(stack);
  }
  return crateMap;
}

function executeStep(step, crateMap) {
  const [numberToMove, origin, destination] = step
    .match(/\d+/g)
    .map((x) => parseInt(x));
  for (let i = 0; i < numberToMove; i++) {
    crateMap[destination - 1].push(crateMap[origin - 1].pop());
  }
}

function executePartTwoStep(step, crateMap) {
  const [numberToMove, origin, destination] = step
    .match(/\d+/g)
    .map((x) => parseInt(x));
  const temp = [];
  for (let i = 0; i < numberToMove; i++) {
    temp.push(crateMap[origin - 1].pop());
  }
  while (temp.length) {
    crateMap[destination - 1].push(temp.pop());
  }
}

function getTopCrates(crateMap) {
  let topCrates = "";
  crateMap.forEach((stack) => {
    topCrates = topCrates.concat("", [...stack].pop());
  });
  return topCrates;
}

function partOne(file) {
  const [drawing, procedure] = splitInput(file);
  let crateMap = parseDrawing(drawing);
  procedure.forEach((step) => executeStep(step, crateMap));
  return getTopCrates(crateMap);
}

function partTwo(file) {
  const [drawing, procedure] = splitInput(file);
  let crateMap = parseDrawing(drawing);
  procedure.forEach((step) => executePartTwoStep(step, crateMap));
  return getTopCrates(crateMap);
}

// console.log(partOne(FILES.example)); // CMZ
// console.log(partOne(FILES.actual)); // CFFHVVHNC

console.log(partTwo(FILES.example)); // MCD
console.log(partTwo(FILES.actual)); // FSZWBPTBG

module.exports = { FILES, partOne, partTwo };
