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
var sumNumbers = function(root) {
  if (!root) return null
  
  let sum = 0;
  
  const traverse = (node, num = '') => {
    if (!node.left && !node.right) {
      sum += Number(num + node.val.toString())
    }
    
    if (node.left) {
      traverse(node.left, num + node.val.toString())
    }
    if (node.right) {
      traverse(node.right, num + node.val.toString())
    }
  }
  traverse(root)
  return sum;
  
//   const traverse = (node, num) => {
//     if (!node) return null
//     num += node.val
    
//     if (!node.left && !node.right) return +num
//     return traverse(node.left, num) + (traverse(node.right, num))
//   }
  
//   return traverse(root, '')
};