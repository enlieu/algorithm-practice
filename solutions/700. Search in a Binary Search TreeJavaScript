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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root === null || root.val === val) {
    return root;
  } else if (root.val > val) {
    return searchBST(root.left, val)
  } else if (root.val < val) {
    return searchBST(root.right, val)
  }
  
//   if (root === null) return null
  
//   let queue = [root]
  
//   while (queue.length) {
//     let current = queue.shift();
    
//     if (current.right) queue.push(current.right)
//     if (current.left) queue.push(current.left)
    
//     if (current.val === val){
//       // console.log(current)
//       return current
//     }
//   }
  
  
//   return null;
};