/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let prev = null;
  
  let stack1 = [];
  let stack2 = [];
  
  let carry = 0;
  
  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next 
  }
  
  while (l2 !== null) {
    stack2.push(l2.val)
    l2 = l2.next;
  }
  
  while (stack1.length || stack2.length) {
    let l1pop = stack1.pop();
    let l2pop = stack2.pop()
    
    let l1Val = l1pop ? l1pop : 0;
    let l2Val = l2pop ? l2pop : 0;
  
    let currentSum = l1Val + l2Val + carry;
  
    carry = Math.floor(currentSum / 10);
    
    let currentNode = new ListNode(Math.floor(currentSum % 10))

    if (prev) {
     currentNode.next = prev 
    }
    prev = currentNode;
  }
  
  if (carry > 0) {
    let newNode = new ListNode(carry);
    newNode.next = prev;
    prev = newNode;
  }
  
  return prev
    
};