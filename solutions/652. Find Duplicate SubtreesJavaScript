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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  if (root === null) return []
  let ans = []
  let map = new Map();
  let queue = [root];
  
  while (queue.length) {
    let current = queue.shift();
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right)
    }
    
    if (!map.has(JSON.stringify(current))) {
      map.set(JSON.stringify(current), 1)
    } else {
      map.set(JSON.stringify(current), map.get(JSON.stringify(current)) + 1)
    }
  }
  
  for (const [node, count] of map.entries()) {
    if (count > 1) {
      ans.push(JSON.parse(node))
    }
  }

  return ans
};