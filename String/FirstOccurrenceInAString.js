// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let i = 0
    while (i < haystack.length) {
        let j = 0
        let k = i
        while (needle[j] == haystack[k]) {
            if (j == needle.length - 1)
                return i
            j++
            k++
        }
        i++
    }
    return -1
};