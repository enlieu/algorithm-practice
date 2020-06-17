/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// //
// var bstFromPreorder = function(preorder) {
// //   if (preorder.length === 0) {
// //     return null;
// //   }
  
// //   let root = new TreeNode(preorder[0])
  
// //   let i = 0;
  
// //   while (i < preorder.length) {
// //     if (preorder[i] > preorder[0]) {
// //       break
// //     }
// //     i++
// //   }
  
// //   root.left = bstFromPreorder(preorder.slice(1, i));
  
// //   root.right = bstFromPreorder(preorder.slice(i))
  
// //   return root;
//   if (preorder.length === 0) {
//     return null;
//   }
  
//   let root = new TreeNode(preorder[0]);
  
//   let stack = [preorder[1]];
  
//   while(stack.length) {
// //     let current = stack.pop();
    
// //     if (current.val < root.val) {
      
// //     }
    
    
    

//   }
  
  
//   return root;
  
  
// };

var bstFromPreorder = function(preorder) {
    if (preorder.length === 0) return null
    let root = new TreeNode(preorder[0])
    // find the right side
    let i = 0
    while (i < preorder.length) {
        if (preorder[i] > preorder[0]) {
            break
        }
        i++
    }
    root.left = bstFromPreorder(preorder.slice(1,i))
    root.right = bstFromPreorder(preorder.slice(i))
    return root
};