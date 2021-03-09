/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (d === 1) {
    let temp = root;
    root = new TreeNode(v)
    root.left = temp;
    return root;
  }
  
  let queue = [[root, 0]]
  
  while (queue.length) {
    let [current, level] = queue.shift();
​
    if (level === d - 2) {
      if (current.left) {
        let tempLeft = current.left;
        current.left = new TreeNode(v)
        current.left.left = tempLeft;
      }
      if (current.right) {
        let tempRight = current.right;
        current.right = new TreeNode(v)
        current.right.right = tempRight;
      }
​
      if (!current.left) {
        current.left = new TreeNode(v)
      }
      if (!current.right) {
        current.right = new TreeNode(v)
      }
    } else {
      if (current.left) {
        queue.push([current.left, level + 1])
      }
      if (current.right) {
        queue.push([current.right, level + 1])
      }
    }
  }
  
  return root;
};
