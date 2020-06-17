/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// var mergeTrees = function(t1, t2) {
//     //DFS
//     //Check 2 nodes exist at that level
//     //if only 1 node exists just return that node to your merged tree
//     if(t1 === null){
//         return t2
//     }
//     if(t2 === null){
//         return t1
//     }
    
//     //add 2 node vals together
//     let newNode = new TreeNode(t1.val + t2.val);
//     //check left
//     newNode.left = mergeTrees(t1.left, t2.left);
//     //checck right
//     newNode.right = mergeTrees(t1.right, t2.right);
    
//     return newNode;
// };

var mergeTrees = function(t1, t2) {
    if(t1==null) return t2;
    if(t2==null) return t1;
    
    var queue = [[t1, t2]];
    while(queue.length > 0){
        var [node1, node2] = queue.shift();
        if(node1 === null || node2 === null) continue;
        
        node1.val += node2.val;
      
        if(node1.left === null){
            node1.left = node2.left;
        }
        else{
            queue.push([node1.left, node2.left]);
        }
        
        if(node1.right === null){
            node1.right = node2.right;
        }
        else{
            queue.push([node1.right, node2.right]);
        }
    }
    
    return t1;
};