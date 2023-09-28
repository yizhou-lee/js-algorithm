/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// 递归方法（复杂度较大）
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === root.val;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

// 迭代方法（复杂度较小）DFS
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const stack = [[root, root.val]];
  while (stack.length) {
    const [node, sum] = stack.pop();
    if (!node.left && !node.right && sum === targetSum) return true;
    if (node.right) stack.push([node.right, sum + node.right.val]);
    if (node.left) stack.push([node.left, sum + node.left.val]);
  }
  return false;
};
