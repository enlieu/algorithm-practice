/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let hash = new Map();
  
  if (head === null) {
    return null;
  }
  
  let newHead = head
  
  while (newHead) {
    hash.set(newHead, new Node(newHead.val))
    newHead = newHead.next
  }
  
  
  newHead = head;
  console.log(hash.get(newHead))

  
  while (newHead) {
    hash.get(newHead).next = hash.get(newHead.next) || null
    hash.get(newHead).random = hash.get(newHead.random) || null
    newHead = newHead.next
  }
  
  
  
  return hash.get(head);

  
  
}
    