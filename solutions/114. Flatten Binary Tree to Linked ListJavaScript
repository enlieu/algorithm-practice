/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  //
  if (root === null) {
    return null;
  }
  
  let stack = [root]
  
  /*
  stack = [1, 5, 2] [ 4, 3]
  current = 6
  current.right = null
  current.left = null
  
  1 => 2 => 3 => 4 => 5 => 6
  
  
  */
  
  while (stack.length) {
    let current = stack.pop();
    
    if (current.right) {
      stack.push(current.right)
    }
    
    if (current.left) {
      stack.push(current.left)
    }
    
    current.right = stack[stack.length - 1]; 
    current.left = null
  }
};