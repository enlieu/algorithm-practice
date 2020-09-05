/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  let vals = []
  
  const bfs = (root) => {
    if (root === null) return null;
    
    let queue = [root]
    
    while (queue.length) {
      let current = queue.shift();
      
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
      vals.push(current.val)
    }
  }
  
  bfs(root1)
  bfs(root2)
  
  const mergeSort = (arr) => {
    const merge = (arr1, arr2) => {
      let i = 0;
      let j = 0;
      let res = [];
      
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
          res.push(arr1[i])
          i++
        } else {
          res.push(arr2[j])
          j++
        }
      }
      while (i < arr1.length) {
        res.push(arr1[i])
        i++
      } 
      
      while (j < arr2.length) {
        res.push(arr2[j])
        j++
      }
      return res
    }
    
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }
  
  return mergeSort(vals)
    
};
