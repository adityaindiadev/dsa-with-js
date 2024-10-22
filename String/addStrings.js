// https://leetcode.com/problems/add-strings/description/

function addStrings(num1, num2) {
    let i = num1.length - 1;  // Pointer for num1
    let j = num2.length - 1;  // Pointer for num2
    let carry = 0;            // To handle carry between digits
    let result = [];          // Array to build the final result
    
    // Iterate over the digits from the end to the beginning
    while (i >= 0 || j >= 0 || carry > 0) {
        let digit1 = i >= 0 ? num1.charCodeAt(i) - '0'.charCodeAt(0) : 0;
        let digit2 = j >= 0 ? num2.charCodeAt(j) - '0'.charCodeAt(0) : 0;
        
        let sum = digit1 + digit2 + carry;
        result.push(sum % 10);  // Get the last digit of the sum
        carry = Math.floor(sum / 10);  // Update the carry
        
        i--;  // Move to the next digit in num1
        j--;  // Move to the next digit in num2
    }
    
    return result.reverse().join('');  // Reverse the result and join to form the final string
}
