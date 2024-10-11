// https://leetcode.com/problems/zigzag-conversion/description/?envType=study-plan-v2&envId=top-interview-150
// Solved by Aditya

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // return 
    if (s.length == 1 || s.length == 2 || numRows == 1)
        return s
    let strArray = Array(numRows).fill('')
    let i = 1
    strArray[0] = s[0]
    while (i < s.length) {
        let j = 1
        while (j < numRows && i < s.length) {
            strArray[j] += s[i]
            j++
            i++
        }
        j = j - 2
        while (j >= 0 && i < s.length) {
            strArray[j] += s[i]
            j--
            i++
        }

    }
    // console.log(JSON.stringify(strArray))
    return strArray.join('')
};

const s = "PAYPALISHIRING", numRows = 4
console.log(convert(s, numRows))
