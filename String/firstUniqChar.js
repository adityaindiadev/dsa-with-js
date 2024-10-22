// https://leetcode.com/problems/first-unique-character-in-a-string/description/

function firstUniqChar(s) {
    const charCount = {};  // Object to store the frequency of each character.
    
    // First pass: Count frequency of each character.
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Second pass: Find the first character with a count of 1.
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;  // Return the index of the first unique character.
        }
    }
    
    return -1;  // No unique character found.
}
