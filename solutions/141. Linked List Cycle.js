/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false
  
  let set = new Set();
  let curr = head;
  
  while (curr.next !== null) {
    if (set.has(curr)) {
      return true
    }
    set.add(curr) 
    curr = curr.next
  }
  return false
};