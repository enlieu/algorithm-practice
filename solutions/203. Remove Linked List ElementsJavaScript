/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  //move through the linked list
  //if the value of node is val, then connect the previous node's next to that node's next
  
  if (head === null) return null
  
  let dHead = new ListNode('Dummy', head)
  
  
  let curr = dHead;
  
  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  
  return dHead.next;
    
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
