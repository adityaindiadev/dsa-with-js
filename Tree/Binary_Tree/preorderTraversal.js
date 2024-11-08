//  https://leetcode.com/problems/binary-tree-preorder-traversal/

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
    arr.push(root.val)
    traverse(root.left, arr)
    traverse(root.right, arr)
}

var preorderTraversal = function (root) {
    const arr = []
    traverse(root, arr)
    return arr
};