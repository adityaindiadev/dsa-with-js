// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=top-interview-150


/**
 * @param {string} digits
 * @return {string[]}
 */

const digitsLettersSet = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

function performPermutation(perm, numIdx, digits, finalArray) {
    if (numIdx >= digits.length) {
        finalArray.push(perm)
        return
    }
    const digitLetters = digitsLettersSet[digits[numIdx]]
    let i = 0
    while (i < digitLetters.length) {
        performPermutation(perm + digitLetters[i], numIdx + 1, digits, finalArray)
        i++
    }
}

var letterCombinations = function (digits) {
    if (digits.length == 0)
        return []
    const finalArray = []
    performPermutation('', 0, digits, finalArray)
    return finalArray
};