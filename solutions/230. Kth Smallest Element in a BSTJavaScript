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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  if (root === null) {
    return null
  }
  
  let stack = []
  let vals = []
  
  while (true) {
    while(root !== null) {
      stack.push(root)
      root = root.left
    }
    
    root = stack.pop();
    k--

    
    if (k === 0) {
      return root.val
    }
    
    root = root.right
    
  }
  
  
  // console.log(vals)
  // return vals.sort((a, b) => a - b)[k - 1]
};