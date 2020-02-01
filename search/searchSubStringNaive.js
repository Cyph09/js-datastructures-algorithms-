const substrSearchNaive = (str, subStr) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      // console.log(str[i + j], subStr[j]);
      if (subStr[j] !== str[i + j]) {
        // console.log("BREAK!");
        break;
      }
      // End of inner loop is reached only when j == subStr.length -1
      if (j === subStr.length - 1) {
        // console.log("MATCH FOUND");
        count++;
      }
    }
  }
  return `Total matches of "${subStr}" found in "${str}" are: ${count}`;
};

module.exports = substrSearchNaive;
