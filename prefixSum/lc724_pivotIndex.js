/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let index = 0;
  let rightSum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;
  while (index < nums.length) {
    rightSum -= nums[index];
    if (leftSum === rightSum) {
      return index;
    }
    leftSum += nums[index];
    index++;
  }
  return -1;
};
