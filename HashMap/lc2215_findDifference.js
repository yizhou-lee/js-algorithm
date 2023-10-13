/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const res1 = [];
  const res2 = [];
  for (let item of set1) {
    if (!set2.has(item)) res1.push(item);
  }
  for (let item of set2) {
    if (!set1.has(item)) res2.push(item);
  }
  return [res1, res2];
};
