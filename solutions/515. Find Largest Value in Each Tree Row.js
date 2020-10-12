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
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root || root === null) return [];
  
  let maxVals = [];
  let queue = [root]
  
  while (queue.length) {
    let len = queue.length;
    let rowMax = -Infinity;
    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
      if (current.val > rowMax) rowMax = current.val
    }
    maxVals.push(rowMax)
  }
  
  return maxVals
};
