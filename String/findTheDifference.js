// https://leetcode.com/problems/find-the-difference/


function findTheDifference(s, t) {
    const count = {};
    
    // Count frequency of characters in s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    // Subtract frequency based on characters in t
    for (let char of t) {
        if (!count[char] || count[char] === 0) {
            return char;  // This is the extra character
        }
        count[char]--;
    }
}
