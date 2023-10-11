const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let str = await readline();
  let maxRes = 0;
  const strSet = new Set(["111", "101", "000", "010"]);

  const strCount = (str) => {
    let res = 0;
    for (let i = 2; i < str.length; i++) {
      if (strSet.has(str.slice(i - 2, i + 1))) {
        res++;
      }
    }
    return res;
  };

  maxRes = Math.max(maxRes, strCount(str));

  for (let i = 0; i < str.length; i++) {
    let temp = str.split("");
    if (temp[i] === "0") {
      temp[i] = "1";
    } else {
      temp[i] = "0";
    }
    maxRes = Math.max(maxRes, strCount(temp.join("")));
  }

  console.log(maxRes);
})();
