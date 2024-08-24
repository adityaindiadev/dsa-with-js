// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s, start = 0, end) {
    // Clean the string once and set up initial start and end indices
    if (start === 0) {
        s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        end = s.length - 1;
    }

    // Base case: if start index is greater than or equal to end index
    if (start >= end) {
        return true;
    }

    // If characters at start and end are not the same, return false
    if (s[start] !== s[end]) {
        return false;
    }

    // Recursive call with the next pair of indices
    return isPalindrome(s, start + 1, end - 1);
};