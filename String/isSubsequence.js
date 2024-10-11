// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0, j = 0
    while (i < s.length && j < t.length) {
        if (s[i] === t[j])
            i++
        j++
    }

    return (i>s.length-1)
};