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
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//   if (root === null) return []
  
//   let queue = [root]
//   let res = [[root.val]]
//   let count = 1
  
//   while (queue.length > 0) {
//     let level = []
//     let current = queue.shift();
//     if (current.left) {
//       level.push(current.left.val)
//       queue.push(current.left)
//     }
//     if (current.right) {
//       level.push(current.right.val)
//       queue.push(current.right)
//     }
//     if (level.length !== 0) res.push(level)
//     count++
    
//   }
//   return res
// };

var levelOrder = function(root) {
    let res = [];
    if (root === null) return res;
    
    let q = [root];
    
    //q - [9, 20]
    //res - []
    while (q.length) {
        let level = [];
        let currLength = q.length
        
        for (let i = 0; i < currLength; i++) {
            let curr = q.shift();//3
            level.push(curr.val)
            
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
            
        }
        res.push(level)
        
    }
    
    return res;
};