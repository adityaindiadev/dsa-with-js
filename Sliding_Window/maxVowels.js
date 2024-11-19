// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let left = 0
    let right = k - 1
    let max = 0
    let count = 0
    while (right < s.length) {
        let isLeftVowel = vowels.has(s[left])
        if (left === 0) {
            for (let index = left; index <= right; index++) {
                const char = s[index]
                if (vowels.has(char))
                    count++
            }
        }
        else {
            if (vowels.has(s[right]))
                count++
        }

        max = Math.max(max, count)
        left++
        right++
        if (isLeftVowel)
            count--
    }
    return max
};