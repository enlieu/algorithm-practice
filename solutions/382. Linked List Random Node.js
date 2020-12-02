/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
  let current = this.head;
  let len = 1;
  
  while (current.next) {
    current = current.next
    len++
  }
  
  return len 
};
​
/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let len = Solution(this.head);
  let randomElement = Math.floor(Math.random() * len)
  let position = 0;
  let current = this.head;
  
  while (position < randomElement) {
    current = current.next;
    position++
  }
  
  return current.val
};
​
/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
