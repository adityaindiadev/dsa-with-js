// https://leetcode.com/problems/generate-parentheses/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} n
 * @return {string[]}
 */

function initiateCode(n, finalArray = [], prntStr = '', openPrntCount, closePrntCount) {
    if (closePrntCount > openPrntCount)
        return
    if (prntStr.length == (n * 2)) {
        finalArray.push(prntStr)
        return
    }
    if (openPrntCount == n) {
        for (let i = 0; i < (openPrntCount - closePrntCount); i++) {
            prntStr += ')'
        }
        finalArray.push(prntStr)
        return
    }
    initiateCode(n, finalArray, prntStr + '(', openPrntCount + 1, closePrntCount)
    initiateCode(n, finalArray, prntStr + ')', openPrntCount, closePrntCount + 1)
}

var generateParenthesis = function (n) {
    const finalArray = []
    initiateCode(n, finalArray, '', 0, 0)
    return finalArray
};