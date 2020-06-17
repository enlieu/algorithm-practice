/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let l3 = dummyHead;
  let carry = 0;
  
  while (l1 !== null || l2 !== null) {
    let l1Val = l1 !== null ? l1.val : 0;
    let l2Val = l2 !== null ? l2.val : 0;
    
    let currentSum = l1Val + l2Val + carry;
    
    carry = Math.floor(currentSum / 10);

    let lastDigit = Math.floor(currentSum % 10);
    
    let newNode = new ListNode(lastDigit);
    
    l3.next = newNode;
    
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
    l3 = l3.next
  }
  
  if (carry > 0) {
    let newNode = new ListNode(carry);
    
    l3.next = newNode;
    l3 = l3.next;
  }
  
  return dummyHead.next
};