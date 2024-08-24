// https://leetcode.com/problems/length-of-last-word/description/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let lastSpaceIndexBeforeLastChar = -1
    let lastCharIndex = -1

    let lastSpaceIndex = -1


    for (let index = 0; index < s.length; index++) {
        const char = s[index];

        if (char != " ") {
            lastCharIndex = index
            lastSpaceIndexBeforeLastChar = lastSpaceIndex
        } else {
            lastSpaceIndex = index
        }

    }
    return (lastCharIndex - lastSpaceIndexBeforeLastChar)
};