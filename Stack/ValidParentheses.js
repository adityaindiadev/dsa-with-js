/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let openingBracketArr = ['(', '{', '[']
    let closingBracketArr = [')', '}', ']']

    const isOpeningBracket = (char) => openingBracketArr.findIndex((item) => item == char)
    const isClosingBracket = (char) => closingBracketArr.findIndex((item) => item == char)

    const stack = []

    for (i = 0; i < s.length; i++) {
        const char = s[i]

        if (isOpeningBracket(char) != -1) {
            stack.push(char)
        }
        else {
            const closingBacketIndex = isClosingBracket(char)
            if (closingBacketIndex != -1) {
                if (stack.pop() != openingBracketArr[closingBacketIndex]) {
                    return false
                }

            }
            else
                return false
        }
    }

    if (stack.length == 0) {
        return true
    }
    else {
        return false
    }
};