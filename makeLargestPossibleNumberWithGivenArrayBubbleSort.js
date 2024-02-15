//Make Largest Possible Number With Given Array with bubble sort


function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            const str1 = String(arr[j + 1]) + String(arr[j])
            const str2 = String(arr[j]) + String(arr[j + 1])

            // parseInt(str1) < parseInt(str2)
            // if (arr[j] < arr[j + 1]) {

            
            if (parseInt(str2) < parseInt(str1)) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let array = [54, 548, 506, 60];
console.log("Original array: ", array);
console.log("Sorted array: ", bubbleSort(array));