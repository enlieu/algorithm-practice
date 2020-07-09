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
var widthOfBinaryTree = function(root) {
  if (root === null) return null
  
  let queue = [[root, 0]]
  
  let maxLevel = -Infinity
  
  while (queue.length) {
    
    let levelSize = queue.length; 
    let currLevel = []
    
    
    for (let i = 0; i < levelSize; i++) {
      let [node, position] = queue.shift();
      
      if (node.left) {
        queue.push([node.left, position * 2])
      }

      if (node.right) {
        queue.push([node.right, position * 2 + 1])
      }
      currLevel.push([node, position])
    }
    
    let difference = currLevel[currLevel.length-1][1] - currLevel[0][1]

    maxLevel = Math.max(difference + 1, maxLevel) ? Math.max(difference + 1, maxLevel) : 1
    
  }                
  return maxLevel
};