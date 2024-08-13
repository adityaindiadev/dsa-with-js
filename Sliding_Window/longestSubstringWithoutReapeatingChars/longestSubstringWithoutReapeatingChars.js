// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// O(n)2 Solution

function isSubStrNotUnique(left, right, string, compareChar) {

    for (let index = left; index < right; index++) {
        const element = string[index];

        if (element == compareChar) {
            return true
        }

    }


    return false

}

const s = "dvdf"
            // i j

if(s.length == 0)
    return 0

let count = 1

let left = 0
let right = 1

while (right < s.length) {

    if (isSubStrNotUnique(left, right, s, s[right])) {
        left++
        
    }
    else {
        let tempCount = (right - left) + 1
        if (tempCount > count) {

            count = tempCount
            right++

        } else {
            right++
        }
    }

}

console.log({ count });

