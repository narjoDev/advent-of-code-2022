"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { test, expect, describe } = require("@jest/globals");
const { FILES, partOne, partTwo } = require("./solution");

describe("partOne", () => {
  test("input-example correct answer", () => {
    expect(partOne(FILES.example)).toStrictEqual("CMZ");
  });
  test("input-actual correct answer", () => {
    expect(partOne(FILES.actual)).toStrictEqual("CFFHVVHNC");
  });
});

describe("partTwo", () => {
  // test("input-example correct answer", () => {
  //   expect(partTwo(FILES.example)).toStrictEqual(null);
  // });
  // test("input-actual correct answer", () => {
  //   expect(partTwo(FILES.actual)).toStrictEqual(null);
  // })
});
