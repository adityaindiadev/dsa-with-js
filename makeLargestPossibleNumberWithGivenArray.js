//Make Largest Possible Number With Given Array


function findLargestPossibleNumber(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;
        
        for (let j = i + 1; j < n; j++) {
          
                const numStr1 = String(arr[j]) + String(arr[maxIndex])
                const numStr2 = String(arr[maxIndex]) + String(arr[j])

                if (parseInt(numStr1) > parseInt(numStr2)) {
                    
                    maxIndex = j;

                } 

           
        }
        
        if (maxIndex !== i) {
            // Swap arr[i] and arr[maxIndex]
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        }
    }
    
    return arr;
}

// Example usage:
const array = [279, 29, 24, 27, 2911, 276, 2767, 27678];
console.log("Original Array:", array);
console.log("Sorted Array:", findLargestPossibleNumber(array));
console.log("Largest Possible Number with Array Elements:", findLargestPossibleNumber(array).join(''));
