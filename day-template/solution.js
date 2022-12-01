"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { importFile } = require("../libs/import-file");

const FILES = {
  example: importFile("./day-template/input-example.txt"),
  actual: importFile("./day-template/input-actual.txt"),
};

// console.log(FILES.example);
// console.log(FILES.actual);

module.exports = { FILES };
