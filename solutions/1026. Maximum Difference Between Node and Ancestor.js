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
var maxAncestorDiff = function(root) {
  if (root === null || !root) return 0;
  
  let queue = [[root, root.val, root.val]]
  
  let maxDiff = 0;
  
  
  while (queue.length) {
    let [node, min, max] = queue.shift();
    maxDiff = Math.max(maxDiff, node.val - min, max - node.val)
    let newMin = Math.min(min, node.val)
    let newMax = Math.max(max, node.val)
    
    if (node.left) {
      queue.push([node.left, newMin, newMax])
    }
    if (node.right) {
      queue.push([node.right, newMin, newMax])
    }
  }
  
  return maxDiff
};
