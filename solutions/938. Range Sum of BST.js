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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  if (!root || root === null) return 0
  
  let inRange = 0;
  let queue = [root]
  
  while (queue.length) { 
    let current = queue.shift();
    
    if (current.left) {
      queue.push(current.left)
    }
    
    if (current.right) {
      queue.push(current.right)
    }
    
    if (current.val >= low && current.val <= high) {
      inRange += current.val
    }
  }
  
  return inRange;
};
