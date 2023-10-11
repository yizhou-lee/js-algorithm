/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 思路: 窗口内最多允许有k个0
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let count = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      count++;
    }
    if (count > k) {
      if (nums[left] === 0) {
        count--;
      }
      left++;
    }
    right++;
    if (right - left > maxLen) {
      maxLen = right - left;
    }
  }
  return maxLen;
};
