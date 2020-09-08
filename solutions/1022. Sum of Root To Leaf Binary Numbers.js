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
var sumRootToLeaf = function(root) {
  let sum = 0;
  
  const traverse = (node, currNum = '') => {
    currNum += node.val.toString();
    if (!node.left && !node.right) {
      sum += parseInt(currNum, 2)
      return;
    }
    
    if (node.left) traverse(node.left, currNum)
    
    if (node.right) traverse(node.right, currNum)
  }
​
  traverse(root)
  
  return sum
};
