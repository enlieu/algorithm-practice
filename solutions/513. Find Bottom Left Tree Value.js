/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  if (root === null) return null;
  
  let queue = [root]
  let current;
  
  while (queue.length) {
    current = queue.shift();
    if (current.right) {
      queue.push(current.right)
    }
    if (current.left) {
      queue.push(current.left)
    }
  }
  
  return current.val
    
};
