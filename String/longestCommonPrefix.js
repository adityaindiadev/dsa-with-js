// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let finalStr = ''
    let i = 0

    if (!strs.length) {
        return ""
    }
    


    while (strs[0][i]) {
        let selectedChar = strs[0][i]

        for (let j = 1; j < strs.length; j++) {
            console.log({j});
            
            const str = strs[j]
            if (selectedChar != str[i])
                return finalStr
        }
        console.log({i});
        finalStr += selectedChar
        i++
    }
    return finalStr
};
const strs = ["apple", "a", "apricot"] 
console.log(longestCommonPrefix(strs));
