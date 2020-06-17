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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) {
    return false;
  }
  
  let queue = [root]
  
  let currentSum = root.val
  
  while (queue.length) {
    let current = queue.shift();
    if (!current.left && !current.right && current.val == sum) {
      return true;
    }
    
    if (current.left) {
      current.left.val += current.val
      queue.push(current.left)
    }
    
    if (current.right) {
      current.right.val += current.val
      queue.push(current.right)
    }
  }  
  return false
};