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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let level = 1;
  
  if (root === null) return false
  console.log(root.val)
  // let rootVal = root.val;
  // let hash = { rootVal : {depth: 0, parent: null}}

// console.log(root.val);
  
  let hash = {};

  hash[root.val] = {depth: 0, parent: null}

  
  let queue = [root]
  
  while(queue.length > 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let parent = queue.shift()
      
      if (parent.left) {
        if (parent.left.val === x) {
          hash[x] = {depth: level, parent: parent.val}
        }
        if (parent.left.val === y) {
          hash[y] = {depth: level, parent: parent.val}
        }
        queue.push(parent.left)
      }
       if (parent.right) {
        if (parent.right.val === x) {
          hash[x] = {depth: level, parent: parent.val}
        }
        if (parent.right.val === y) {
          hash[y] = {depth: level, parent: parent.val}
        }
        queue.push(parent.right)
      }
    }
    level++
  }

    if (hash[x].depth === hash[y].depth && hash[x].parent !== hash[y].parent) {
      return true;
    } else {
      return false;
    }
    
};