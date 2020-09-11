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
var minDepth = function(root) {
  if (root === null) return null;
  
  let queue = [[root, 1]]
  let minDepth = Infinity
  
  while (queue.length) {
    let [current, depth] = queue.shift();
    
    if (current.left) {
      queue.push([current.left, depth + 1])
    }
    if (current.right) {
      queue.push([current.right, depth + 1])
    }
    
    if (!current.left && !current.right) {
      minDepth = Math.min(depth, minDepth)
    }
  }
  
  return minDepth
};
