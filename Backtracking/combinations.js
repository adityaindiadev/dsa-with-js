// https://leetcode.com/problems/combinations/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function performPermutation(perm, kIdx, nIdx, n, k, finalArray) {
    if (kIdx > k) {
        finalArray.push(perm)
        return
    }
    let i = nIdx
    while (i <= n) {
        performPermutation([...perm, i], kIdx + 1, i + 1, n, k, finalArray)
        i++
    }
}
var combine = function (n, k) {
    const finalArray = []
    performPermutation([], 1, 1, n, k, finalArray)
    return finalArray
};