// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    function isValidEnglishCharacter(char) {

        if(!isNaN(parseInt(char)))
            return true

        const code = char.charCodeAt(0);
        return (code >= 97 && code <= 122);
    }

    let mainString = s.toLowerCase().split("").filter((c => isValidEnglishCharacter(c))).join("")

    let i = 0
    let j = mainString.length-1
    while (i <= j) {
        if(mainString[i] != mainString[j])
            return false
        else{
            i++
            j--
        }
    }

    return true

};