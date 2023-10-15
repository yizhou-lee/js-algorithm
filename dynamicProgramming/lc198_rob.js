/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  let dp = [0, nums[0]];
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1]);
  }
  return dp[n];
};

const ans = rob([1, 2, 3, 1]);
console.log(ans);

// 空间优化
var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  let dp0 = 0,
    dp1 = nums[0];
  for (let i = 2; i <= n; i++) {
    const temp = dp1;
    dp1 = Math.max(nums[i - 1] + dp0, dp1);
    dp0 = temp;
  }
  return dp1;
};
