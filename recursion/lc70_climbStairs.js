/**
 * @param {number} n
 * @return {number}
 */

// 递归方法会超时
var climbStairs = function (n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// 使用动态规划
var climbStairs = function (n) {
  if (n <= 2) return n;
  let dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 使用动态规划，优化空间复杂度
var climbStairs = function (n) {
  if (n <= 2) return n;
  let prev = 1,
    curr = 2;
  for (let i = 3; i <= n; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return curr;
};
