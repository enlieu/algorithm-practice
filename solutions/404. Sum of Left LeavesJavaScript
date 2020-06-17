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
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  
  if (root === null) {
    return sum
  }
  
  let stack = [root];
  
  while (stack.length !== 0) {
    let current = stack.pop();
    
    if (current.left !== null) {
      if (current.left.left === null && current.left.right === null) {
        sum += current.left.val
      } else{
        stack.push(current.left)
      }
    }
    
    if (current.right !== null) {
      if (current.right.left !== null || current.right.right !== null) {
        stack.push(current.right)
      }
    }
  }
  return sum;
  
  
//   if (root.left !== null) {
//     if (root.left.left === null && root.left.right === null) {
//       sum += root.left.val
//     } else {
//       sum += sumOfLeftLeaves(root.left)
//     }
//   }
  
//   if (root.right !== null) {
//     if (root.right.left !== null || root.right.right !== null) {
//       sum += sumOfLeftLeaves(root.right)
//     }
//   }
  
//   return sum
};