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
var sumOfLeftLeaves = function(root) {
  if (root === null) return 0
  let sum = 0
  let queue = [root]
  
  while (queue.length) {
    let current = queue.shift()
    if (current.left) {
      queue.push(current.left)
      if (current.left.left === null && current.left.right === null) {
        sum += current.left.val
      }
    }
    if (current.right) {
      queue.push(current.right)
    }
  }
  
  return sum;
  
  
//   if (root.left !== null) {
//     if (root.left.left === null && root.left.right === null) {
//       sum += root.left.val
//     } else {
//       sum += sumOfLeftLeaves(root.left)
//     }
//   }
  
//   if (root.right !== null) {
//     if (root.right.left !== null || root.right.right !== null) {
//       sum += sumOfLeftLeaves(root.right)
//     }
//   }
  
//   return sum
};
