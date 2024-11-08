//  https://leetcode.com/problems/binary-tree-postorder-traversal/

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
 * @return {number[]}
 */
function traverse(root, arr) {
    if (root == null) {
        return
    }
    traverse(root.left, arr)
    traverse(root.right, arr)
    arr.push(root.val)
}

var postorderTraversal = function (root) {
    const arr = []
    traverse(root, arr)
    return arr
};