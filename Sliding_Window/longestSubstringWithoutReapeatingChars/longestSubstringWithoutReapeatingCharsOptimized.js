// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// O(n) Solution

/**
 * @param {string} s
 * @return {number}
 */
let obj = {}
function isSubStrNotUnique(left, right, string, compareChar) {

    for (let index = left; index < right; index++) {
        const element = string[index];

        if (element == compareChar) {
            return true
        }

    }


    return false

}

var lengthOfLongestSubstring = function(s) {

   if (s.length == 0)
    return 0

let obj = {}
let count = 1

let left = 0
let right = 1

obj[s[left]] = 1

while (right < s.length) {

    if (obj[s[right]]) {

        delete obj[s[left]]
        left++
    }

    else {
        obj[s[right]] = 1
        let tempCount = (right - left) + 1
        if (tempCount > count) {

            count = tempCount
            right++

        } else {
            right++
        }
    }

}
    return count


    
};

