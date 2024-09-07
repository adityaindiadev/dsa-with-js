// https://leetcode.com/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} num
 * @return {string}
 */
function extractNumStr(numChar, length, index) {
    return numChar + '0'.repeat(length - index)
}
var intToRoman = function (num) {
    const set = {
        '1000': 'M',
        '900': 'CM',
        '500': 'D',
        '400': 'CD',
        '100': 'C',
        '90': 'XC',
        '50': 'L',
        '40': 'XL',
        '10': 'X',
        '9': 'IX',
        '5': 'V',
        '4': 'IV',
        '1': 'I',
    }
    const numStr = String(num)
    if (set[numStr])
        return set[numStr]

    const numStrLength = numStr.length - 1
    let finalStr = ''
    for (let i = 0; i <= numStrLength; i++) {
        if (numStr[i] == '0') {
            continue
        }
        let extractNum = extractNumStr(numStr[i], numStrLength, i)

        while (parseInt(extractNum) > 0) {
            console.log(extractNum)
            if (set[extractNum]) {
                finalStr += set[extractNum]
                break
            }
            const numFromSetKeys = Object.keys(set).reverse().find((item) => parseInt(extractNum) > parseInt(item))

            finalStr += set[numFromSetKeys]
            extractNum = String(parseInt(extractNum) - parseInt(numFromSetKeys))
        }
    }
    return finalStr
};

console.log(intToRoman(9));
