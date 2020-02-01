const binarySearch = require("./search/searchBinary");
const searchSbuStringNaive = require("./search/searchSubStringNaive");
const bubbleSort = require("./sort/bubbleSort");
const selectionSort = require("./sort/selectionSort");

console.log(
  // binarySearch([23, 29, 30, 32, 33, 35, 45, 49, 52, 53, 54, 56, 79, 80], 30)
  // searchSbuStringNaive("I love coffee", "ove")
  // bubbleSort([37, 45, 29, 8])
  selectionSort([0, 5, 3, 1, 4, 2])
);
