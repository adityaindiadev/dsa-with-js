// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    if (x < 0) {
        return false

    }
    const strNum = String(x)

    let front = 0;
    let back = strNum.length - 1 - front;
    let half = Math.floor(strNum.length / 2)

    while (front <= half) {

        if (strNum.charAt(front) != strNum.charAt(back)) {
            return false;
        }

        front++;
        back--;
    }

    return true;

};