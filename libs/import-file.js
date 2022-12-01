"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const fs = require("fs");

function readFile(filename, encoding = "utf8") {
  try {
    const data = fs.readFileSync(filename, encoding);
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function splitByLines(str) {
  return str.split(/\r?\n/);
}

function importFile(filename) {
  return splitByLines(readFile(filename));
}

module.exports = { importFile };
