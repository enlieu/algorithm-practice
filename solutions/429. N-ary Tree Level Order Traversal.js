/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []
  
  let queue = [root]
  let ans = []
  
  while (queue.length) {
    let levelArr = [];
    let queueLength = queue.length
    
    for (let i = 0; i < queueLength; i++) {
      let current = queue.shift()
      levelArr.push(current.val)
      
      if (current.children) {
        for (let i = 0; i < current.children.length; i++) {
          queue.push(current.children[i])
        }
      }
    }
    ans.push(levelArr)
  }
return ans
};