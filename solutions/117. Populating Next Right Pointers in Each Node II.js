/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = root => {
    if (root == null) return root;
    let queue = [root];
    let level = [];
    
    while(queue.length) {
        const node = queue.shift();
        node.next = queue[0] 
        if (node.left != null) level.push(node.left);
        if (node.right != null) level.push(node.right);
        if(queue.length == 0){         
            queue = level;
            level = [];
        }
     }
    return root;
}