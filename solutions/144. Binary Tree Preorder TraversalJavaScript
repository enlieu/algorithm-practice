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
var preorderTraversal = function(root, vals = []) {
  
  if (root === null) {
    return vals
  }
    vals.push(root.val)
    preorderTraversal(root.left, vals)
    preorderTraversal(root.right, vals)
    
  
  return vals
  
  
//   let stack = [root]
//   let vals = [];
  
//   while (stack.length > 0) {
//     let current = stack.pop()
    
//     vals.push(current.val)
    
//     if (current.right) {
//       stack.push(current.right)
//     }
    
//     if (current.left) {
//       stack.push(current.left)
//     }
    
//   }

};