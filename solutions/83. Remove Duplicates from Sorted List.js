/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null) return null;
  
  let current = head;
  let next = current.next;
  
  while (next) {
    if (current.val === next.val) {
      current.next = null; 
    } else {
      current.next = next;
      current = next;
    }
    next = next.next
  }
  
  return head;
};
