"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { importFile } = require("../libs/import-file");

const FILES = {
  example: importFile("./day-02/input-example.txt"),
  actual: importFile("./day-02/input-actual.txt"),
};

// console.log(FILES.example);
// console.log(FILES.actual);

const rockPaperScissorsKey = {
  A: "R",
  B: "P",
  C: "S",
  X: "R",
  Y: "P",
  Z: "S",
};

const scoresForShapes = {
  R: 1,
  P: 2,
  S: 3,
};

function decodeLine(line) {
  return line.split(" ").map((symbol) => rockPaperScissorsKey[symbol]);
}

function scoreRound(round) {
  const [opponent, you] = round.map((shape) => scoresForShapes[shape]);
  const drawWinLoseScores = [3, 6, 0];
  const yourWinPosition = (you - opponent + 3) % 3;
  const yourScore = you + drawWinLoseScores[yourWinPosition];
  return yourScore;
}

function partOne(file) {
  const listOfRounds = file.map((line) => decodeLine(line));
  const scoredRounds = listOfRounds.map((round) => scoreRound(round));
  return scoredRounds.reduce((a, b) => a + b);
}

function partTwo(file) {}

console.log(partOne(FILES.example));
console.log(partOne(FILES.actual));

// console.log(partTwo(FILES.example));
// console.log(partTwo(FILES.actual));

module.exports = { FILES };
