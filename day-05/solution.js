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

/**
 *
 * @param {array[string]} drawing
 * @returns {array[array[string]]} 2D array of crates in each stack: [[A,B],[Z]]
 * Please note that index i represents stack i+1
 */
function parseDrawing(drawing) {
  // TODO:
  console.log(drawing[2]);
  const crateMap = [];
  const numberOfStacks =
    drawing[drawing.length - 1].split(" ")[drawing.length - 1];
  console.log(numberOfStacks);
  for (let stackNumber = 0; stackNumber < numberOfStacks; stackNumber++) {
    crateMap.push([]); // initialize stack
    const column = (stackNumber - 1) * 4 + 1;
    // add all crates in stack
    for (let i = drawing.length - 2; i >= 0; i--) {
      const crate = drawing[i][column];
      const regex = new RegExp("[a-zA-Z]");
      if (!regex.test(crate)) {
        break;
      } // done with stack
      else {
        crateMap[stackNumber - 1].push(crate);
      }
    }
  }
  console.log(crateMap);
  return crateMap;
}

function executeStep(step, crateMap) {
  const [numberToMove, origin, destination] = step.match(/\d+/g);
  for (let i = 0; i < numberToMove; i++) {
    crateMap[destination - 1].push(crateMap[origin - 1].pop());
  }
}

function getTopCrates(crateMap) {
  let topCrates = "";
  crateMap.forEach((stack) => topCrates.concat("", stack.at(-1)));
  return topCrates;
}

function partOne(file) {
  const [drawing, procedure] = splitInput(file);
  console.log(drawing, procedure);
  let crateMap = parseDrawing(drawing);
  procedure.forEach((step) => executeStep(step, crateMap));
  return getTopCrates(crateMap);
}

function partTwo(file) {
  return;
}

console.log(partOne(FILES.example));
// console.log(partOne(FILES.actual));

// console.log(partTwo(FILES.example));
// console.log(partTwo(FILES.actual));

module.exports = { FILES, partOne, partTwo };
