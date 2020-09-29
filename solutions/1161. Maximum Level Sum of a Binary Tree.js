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
var maxLevelSum = function(root) {
  if (!root || root === null) return 0
  
  let queue = [[root, 1]]
  let maxSum = root.val;
  let maxSumLevel = 1
  let map = new Map();
  
  while (queue.length) {
    let levelLen = queue.length;
    let nextLevelSum = 0
    let nextLevel;
    
    for (let i = 0; i < levelLen; i++) {
      let [current, level] = queue.shift();
    
      if (current.left) {
        nextLevelSum += current.left.val
        queue.push([current.left, level + 1])
      }
    
      if (current.right) {
        nextLevelSum += current.right.val
        queue.push([current.right, level + 1])
      }
      nextLevel = level + 1
    }
    
    if (nextLevelSum > maxSum) {
      maxSum = nextLevelSum;
      maxSumLevel = nextLevel
    }
  }
  
  return maxSumLevel
};
