/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  let ordered = [];
  
  if (root === null) {
    return ordered;
  }
  
  let stack = [root];
  
  while(stack.length) {
    let node = stack.pop();
    if (node === null) {
      continue
    }
    ordered.push(node.val);
    
    if (node.children) {
      stack.push(...node.children)
    }
  }
  
  return ordered.reverse();
  
}
//   let ordered = [];

//   traverse(root);
  
//   function traverse(node) {
//     if (node === null) {
//       return ordered;
//     }
    
//    if (node.children !== null) {
//      node.children.forEach(child => traverse(child))
//    }
//     ordered.push(node.val)
//   }
  
//   return ordered;
// };