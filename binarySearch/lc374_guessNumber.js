/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

// 迭代版本
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

// 递归版本
var guessNumber = function (n) {
  const recur = function (left, right) {
    if (left > right) {
      return;
    }
    let mid = Math.floor((left + right) / 2);
    let res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      return recur(mid + 1, right);
    } else {
      return recur(left, mid - 1);
    }
  };
  return recur(1, n);
};
