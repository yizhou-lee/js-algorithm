const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let firstLine = await readline();
  let n = firstLine.split(" ");
  let num = parseInt(n[0]);
  let targetIndex = parseInt(n[1]);
  let target = [0, 0];
  let list = [];
  let count = 0;
  let res = "";
  while ((line = await readline())) {
    let tokens = line.split(" ");
    let a = parseInt(tokens[0]);
    let b = parseInt(tokens[1]);
    list.push([a, b]);
    count++;
    if (count === targetIndex) {
      target = [a, b];
    }
  }

  function arrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  while (list.length > 1) {
    let tmp = "";
    list.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      } else {
        if (a[1] < b[1]) {
          return -1;
        } else {
          return 1;
        }
      }
    });
    if (
      list.findIndex((array) => arrayEqual(array, target)) >=
      Math.floor(list.length / 2)
    ) {
      tmp += "R";
    } else {
      tmp += "L";
    }
    list.sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      } else if (a[1] > b[1]) {
        return 1;
      } else {
        if (a[0] < b[0]) {
          return -1;
        } else {
          return 1;
        }
      }
    });
    if (
      list.findIndex((array) => arrayEqual(array, target)) >=
      Math.floor(list.length / 2)
    ) {
      tmp += "R";
    } else {
      tmp += "L";
    }
    list = list.filter((point) =>
      tmp[0] === "R" ? point[0] >= target[0] : point[0] < target[0]
    );
    list = list.filter((point) =>
      tmp[1] === "R" ? point[1] >= target[1] : point[1] < target[1]
    );
    res += tmp;
  }

  console.log(res + "O");
})();
