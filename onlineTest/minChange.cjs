const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let str = await readline();
  let operations = 0;
  let left = 0;
  let right = 1;
  if (str.length === 1) {
    console.log(0);
    console.log(str);
    return;
  }
  while (right < str.length) {
    if (str[left] === str[right]) {
      right++;
    } else {
      left = right;
      right++;
    }
  }

  console.log(operations);
})();
