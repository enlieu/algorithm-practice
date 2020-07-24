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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) return []
  
  let queue = [root]
  let ans = []
  
  while (queue.length) {
    let levelArr = [];
    let queueLength = queue.length
    
    for (let i = 0; i < queueLength; i++) {
      let current = queue.shift()
      levelArr.push(current.val)
  
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
    ans.push(levelArr)
  }
  return ans.reverse()
};