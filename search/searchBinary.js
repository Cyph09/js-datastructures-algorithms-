// #################### -BINARY SEARCH- ############
// Search by Dived and concure pattern
// Assumes sorted array
// Example usage binarySearch([23, 29, 30, 32, 33, 35, 45, 49, 52, 53, 54, 56, 79, 80], 10)

function binarySearch(arr, val) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  while (leftPointer <= rightPointer) {
    if (arr[middlePointer] === val) {
      return middlePointer;
    }
    if (arr[middlePointer] > val) {
      rightPointer = middlePointer - 1;
    }
    if (arr[middlePointer] < val) {
      leftPointer = middlePointer + 1;
    }
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  }
  return -1;
}

module.exports = binarySearch;
