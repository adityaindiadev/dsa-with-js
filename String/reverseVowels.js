// https://leetcode.com/problems/reverse-vowels-of-a-string/description/

function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let strArr = s.split('');  // Convert the string into an array to mutate it.
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (!vowels.has(strArr[left])) {
            left++;  // Move the left pointer to the right if not a vowel.
        } else if (!vowels.has(strArr[right])) {
            right--;  // Move the right pointer to the left if not a vowel.
        } else {
            // Swap the vowels.
            [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
            left++;
            right--;
        }
    }
    
    return strArr.join('');  // Convert the array back to a string.
}
