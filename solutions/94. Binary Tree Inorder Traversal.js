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
var inorderTraversal = function(root) {
//   if (root === null) return []
  
//    if (root.left !== null) {
//       inorderTraversal(root.left, vals)  
//     }
  
//   vals.push(root.val)
  
//     if (root.right !== null) {
//       inorderTraversal(root.right, vals)
//     }

//   return vals
    
// };
  
//   let queue = [root];
//   let vals = []
  
//   while (queue.length) {
//     let current = stack.pop();
    
//     if (current.left) {
//       queue.unshift(current.left)
//       current = current.left
//     }
//     while (current.right) {
      
//     }
//   }
  


  
//   if (root === null) return [];
  
//   let stack = [root]
//   let vals = []
  
//   let dummy = root
  
//   while (dummy.left) {
//     stack.push(dummy.left)
//     dummy = dummy.left
//   }
  
 
  
//   while (stack.length > 0) {
//     let current = stack.pop();
//     if (current.right) {

//       stack.push(current.right)
//     } 
//       vals.push(current.val)
//   }
  
  const stack = [];
  const res = [];
  // root = 5
  //stack = []
  //res = [4, 2, 5, 1, 3]

  //while there is a root, or there is something in the stack
  while (root || stack.length) {
    //if root isn't null / it exists
    if (root) {
      //push it into the stack
      stack.push(root);
      //reassign, traverse to bottom left
      root = root.left;
    } else {
      //no more left? then start popping off what you have in the stack
      root = stack.pop();
      //push vals into res
      res.push(root.val);
      //reassign root to be root.right, checks if there's a right
      root = root.right;
    }
  }

  return res;

  
//   dummy = root
  
//    while (dummy.right) {
//     stack.push(dummy.right)
//     dummy = dummy.right
//   }
  
//     while (stack.length > 0) {
//     let current = stack.pop();
//     if (current.left) {

//       stack.push(current.left)
//     } 
//       vals.push(current.val)
//     }
  
  
  
  
  //you want to push in what you're popping off the stack once you hit current.left === null
  
  // while(root.right) {
  //   stack.push(root.right.val)
  //   root = root.right
  // }
  
  
  
//     vals.push(current.val)
    
//     while (right) {
//       stack.push(right)
//       right = right.right
//     }
//   }
    
    



  
  
  
}
    
   
   
    
  

  
  
  
  
  
  
  
