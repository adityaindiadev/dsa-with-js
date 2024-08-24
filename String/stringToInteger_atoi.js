/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

    function isNum(char = '', index) {
        if (isNaN(parseInt(char))) {

            if ((char == '+' || char == '-') && index == 0) {
                return true
            }
            else {
                return false
            }

        }
        else {
            return true
        }
    }

    let outputStr = ''

    const str = s.trim()

    for (let index = 0; index < str.length; index++) {
        const char = str[index];

        if (isNum(char, index)) {
            outputStr = outputStr + char
        }
        else
            break

    }

    if (outputStr.length == 0) {
        return 0
    }
    else {
        const returnNum = Number.parseInt(outputStr)
        if (returnNum) {
            if (returnNum <= -2147483648) return -2147483648;
            else if (returnNum >= 2147483647) return 2147483647;
            else return returnNum;
        }
        else {
            return 0
        }
    }

};