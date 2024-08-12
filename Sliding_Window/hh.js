class Solution {
    findAnagrams(s, p) {
        let arr = new Array(26).fill(0);
        
        let m = s.length;
        let n = p.length;
        
        for (let ch of p) {
            arr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        let i = 0, j = 0;
        let result = [];
        
        while (j < m) {
            arr[s[j].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            
            if (j - i + 1 === n) {
                if (arr.every(val => val === 0)) {
                    result.push(i);
                }
                
                arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
                i++;
            }
            j++;
        }
        
        return result;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
