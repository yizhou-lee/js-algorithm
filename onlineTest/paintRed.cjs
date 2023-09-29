const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let firstLine = await readline();
  let first = firstLine.split(" ");
  let row = parseInt(first[0]);
  let column = parseInt(first[1]);
  let maxNum = parseInt(first[2]);
  let arr = [];
  let result = 0;
  while ((line = await readline())) {
    arr.push(line.split(""));
  }
  for (let i = 0; i < row - 1; i++) {
    for (let j = 0; j < column; j++) {
      if (arr[i][j] === "o" && arr[i + 1][j] === "o" && maxNum > 1) {
        arr[i][j] = "r";
        arr[i + 1][j] = "r";
        maxNum -= 2;
        result++;
      } else if (arr[i][j] === "r" && arr[i + 1][j] === "o" && maxNum > 0) {
        arr[i + 1][j] = "r";
        maxNum--;
        result++;
      }
    }
  }
  console.log(result);
})();
