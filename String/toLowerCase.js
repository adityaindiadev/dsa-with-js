// https://leetcode.com/problems/to-lower-case/description/

function toLowerCase(s) {
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        // Check if the character is an uppercase letter
        if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode(char.charCodeAt(0) + 32);
        } else {
            result += char;  // Append the character as it is
        }
    }
    
    return result;
}
