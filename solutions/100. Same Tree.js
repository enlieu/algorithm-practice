/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === null && q === null) return true
  
  let queue = [p, q]
  
  while (queue.length) {
    let first = queue.shift();
    let second = queue.shift()
    
    if (first === null && second === null) continue
    
    if (first === null || second === null) return false
    
    if (first.val !== second.val) return false
    
    queue.push(first.left)
    queue.push(second.left)
    queue.push(first.right)
    queue.push(second.right)
  }
  return true
};