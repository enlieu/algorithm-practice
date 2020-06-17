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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return compare(root, root)
};

const compare = function(l, r) {
    if (l == null && r == null)
        return true
    if (l == null || r == null)
        return false
    return l.val == r.val && compare(l.left, r.right) && compare(l.right, r.left)
}