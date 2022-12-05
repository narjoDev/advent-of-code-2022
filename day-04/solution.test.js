"use strict";
/* jshint 
esversion: 6,
devel: true,
node: true,
-W097 
*/

const { test, expect, describe } = require("@jest/globals");
const { FILES, partOne, partTwo, fullyContained } = require("./solution");

describe("fullyContained", () => {
  const fullOverlaps = ["1-1,1-1", "1-1,1-2", "2-2,1-2", "2-2,1-3"];
  test("identify overlaps", () => {
    fullOverlaps.forEach((line) =>
      expect(fullyContained(line)).toStrictEqual(true)
    );
  });
  const incompleteOverlap = ["1-2,2-3", "2-3,1-2"];
  test("refuse partial overlaps", () => {
    incompleteOverlap.forEach((line) =>
      expect(fullyContained(line)).toStrictEqual(false)
    );
  });
  const noOverlap = ["7-7,8-59", "7-66,67-80"];
  describe("refuse no overlaps", () => {
    noOverlap.forEach((line) =>
      test(`refuse ${line}`, () => {
        expect(fullyContained(line)).toStrictEqual(false);
      })
    );
  });
});

describe("partOne", () => {
  test("input-example correct answer", () => {
    expect(partOne(FILES.example)).toStrictEqual(2);
  });
  test("input-actual correct answer", () => {
    expect(partOne(FILES.actual)).toStrictEqual(547);
  });
});
