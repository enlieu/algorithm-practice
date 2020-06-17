/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let reverse = [];
  
  while (head !== null) {
    reverse.push(head.val)
    head = head.next;
  }
  
  if (reverse.toString() === reverse.reverse().toString())  {
    return true
  } else {
    return false;
  }
    
};