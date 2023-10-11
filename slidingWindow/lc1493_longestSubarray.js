/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let count = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      count++;
    }
    if (count > 1) {
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
  return maxLen - 1;
};
