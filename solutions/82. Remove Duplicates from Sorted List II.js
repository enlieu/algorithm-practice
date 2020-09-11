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
  
  let map = new Map();
  let current = head;
  
  while (current) {
    if (!map.has(current.val)) {
      map.set(current.val, 1)
    } else {
      map.set(current.val, map.get(current.val) + 1)
    }
    current = current.next
  }
  
  let headVal;
  let newHead;
  
  for (const [val, count] of map.entries()) {
    if (count === 1) {
      headVal = val
      break;
    }
  }
  
  current = head;
  
  while (current) {
    if (current.val === headVal) {
      newHead = current;
      break;
    }
    current = current.next;
  }
  
  if (!newHead) return null;
  
  current = newHead
  let next = current.next;
  
  while (next) {
    if (map.get(next.val) > 1) {
      current.next = null;
    } else {
      current.next = next;
      current = next;
    }
    next = next.next;
  }
  
  return newHead;
    
};
