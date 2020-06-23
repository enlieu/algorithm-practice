/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if (root === null) return null
  
  let queue = [root]
  let count = 0;
  
  while (queue.length) {
    let current = queue.shift();
    
    if (current.left) {
      queue.push(current.left)
    }
    
    if (current.right) {
      queue.push(current.right)
    }
    count++
  }
  
  return count;
};