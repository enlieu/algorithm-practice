/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root, ordered = []) {

  // let ordered = [];
  
  // traverse(root)

  
    if (root === null) {
      return ordered;
    }
    if (root.children !== null){
    ordered.push(root.val)
    root.children.forEach(child => preorder(child, ordered));
    }
  
  return ordered
}
  
//   return ordered;
  
//   let ordered = [];

//   if (root === null) {
//     return ordered;
//   }

//   let stack = [root];

//   while (stack.length) {
//     let node = stack.pop()
//     if (node === null) {
//       continue;
//     }
    
//     ordered.push(node.val);
    

//     if (node.children) {
//       stack.push(...node.children.reverse())
//     }
//   }
//   return ordered
// }
    