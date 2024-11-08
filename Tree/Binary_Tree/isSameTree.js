// https://leetcode.com/problems/same-tree/description/

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

function traverse(p, q, flag) {
    if (p == null || q == null) {
        if (p || q) {
            flag.value = false
        }
        return
    }
    if (flag.value == false)
        return

    traverse(p.left, q.left, flag)
    // console.log(p.val, q.val)
    if (p.val != q.val) {
        flag.value = false
        return
    }
    traverse(p.right, q.right, flag)
}

var isSameTree = function (p, q) {
    let flag = { value: true }
    traverse(p, q, flag)
    return flag.value
};

var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};