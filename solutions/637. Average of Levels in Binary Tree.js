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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let avg = []
  let queue = [root]  
  while (queue.length) {
    let sum = 0;
    let levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
      sum += current.val
    }
    avg.push(sum / levelSize)
  }
  
  return avg
};