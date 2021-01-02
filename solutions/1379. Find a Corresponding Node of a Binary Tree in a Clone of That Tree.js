/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
​
var getTargetCopy = function(original, cloned, target) {
  let queue = [[original, cloned]]
  
  while (queue.length) {
    let [ogNode, clonedNode] = queue.shift();
    
    if (ogNode.left && clonedNode.left) {
      queue.push([ogNode.left, clonedNode.left])
    }
    if (ogNode.right && clonedNode.right) {
      queue.push([ogNode.right, clonedNode.right])
    }
    
    if (ogNode === target) {
      return clonedNode
    }
  }
};
