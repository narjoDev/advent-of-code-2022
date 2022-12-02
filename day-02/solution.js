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

// FIXME: YES IT'S ALL UNEXPLAINED MAGIC I'M SORRY

const partOneKey = {
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

const partTwoKey = {
  X: -1,
  Y: 0,
  Z: 1,
};

function decodeLinePartOne(line) {
  return line.split(" ").map((symbol) => scoresForShapes[partOneKey[symbol]]);
}

function decodeLinePartTwo(line) {
  line = line.split(" ");
  const opponentShapeScore = scoresForShapes[partOneKey[line[0]]];
  const translation = [3, 1, 2];
  const youRelative = partTwoKey[line[1]];
  const yourScore = translation[(youRelative + opponentShapeScore + 3) % 3];
  return [opponentShapeScore, yourScore];
}

function scoreRound(round) {
  const [opponent, you] = round;
  const drawWinLoseScores = [3, 6, 0];
  const yourWinPosition = (you - opponent + 3) % 3;
  const yourScore = you + drawWinLoseScores[yourWinPosition];
  return yourScore;
}

function partOne(file) {
  const listOfRounds = file.map((line) => decodeLinePartOne(line));
  const scoredRounds = listOfRounds.map((round) => scoreRound(round));
  return scoredRounds.reduce((a, b) => a + b);
}

function partTwo(file) {
  const listOfRounds = file.map((line) => decodeLinePartTwo(line));
  const scoredRounds = listOfRounds.map((round) => scoreRound(round));
  return scoredRounds.reduce((a, b) => a + b);
}

console.log(partOne(FILES.example));
console.log(partOne(FILES.actual));

console.log(partTwo(FILES.example));
console.log(partTwo(FILES.actual));

module.exports = { FILES };
