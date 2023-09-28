/**
 * @param {number} n
 * @return {number}
 */

// 递归方法（复杂度较大）
var fib = function (n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

// 迭代方法（复杂度较小）
var fib = function (n) {
  if (n < 2) return n;
  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};
