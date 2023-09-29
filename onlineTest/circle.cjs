const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  line = await readline();
  let tokens = line.split(" ");
  let x = Math.abs(parseInt(tokens[0]));
  let y = Math.abs(parseInt(tokens[1]));

  r1 =
    (2 * x + 2 * y + Math.sqrt((2 * x + 2 * y) ** 2 - 4 * (x ** 2 + y ** 2))) /
    2;
  r2 =
    (2 * x + 2 * y - Math.sqrt((2 * x + 2 * y) ** 2 - 4 * (x ** 2 + y ** 2))) /
    2;

  if (r1 < r2) {
    console.log(r1, r2);
  } else {
    console.log(r2, r1);
  }
})();
