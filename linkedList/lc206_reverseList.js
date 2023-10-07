/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 迭代版本
var reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

// 递归版本
var reverseList = function (head) {
  const recur = function (cur, pre) {
    if (!cur) {
      return pre;
    }
    res = recur(cur.next, cur);
    cur.next = pre;
    return res;
  };
  return recur(head, null);
};
