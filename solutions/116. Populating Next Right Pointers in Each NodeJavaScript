/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root === null) {
    return null
  }
  root.next = null;
  
  let queue = [root]
  
  
  while (queue.length) {
    let current = queue.shift();
    
    if (current.left && current.right) {
      current.left.next = current.right
      queue.push(current.left)
      queue.push(current.right)
    }
    if (current.next !== null && current.left !== null && current.next.left !== null) {
      current.right.next = current.next.left
    }
    
  }
  
  return root
    
};