/*function swap(arr, indx1, indx2){
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
};*/

const swap = (arr, indx1, indx2) => {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
};

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let minVal = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minVal]) {
        minVal = j;
      }
    }
    if (arr[i] !== arr[minVal]) {
      //   console.log(i, minVal);
      swap(arr, i, minVal);
    }
  }
  return arr;
};

module.exports = selectionSort;
