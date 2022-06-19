const arr = require("jshint/data/non-ascii-identifier-start");

function compareArrays(arr1, arr2) {
  let result;

  result = arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])

  // if (arr1.length === arr2.length) {
  //   result = arr1.every((item, i) => item === arr2[i]);
  // } else {
  //   result = false;
  // }

  // Ваш код

  return result; // boolean
}

// const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr; // array
}
