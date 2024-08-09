// Dutch National Flag problem binary sort

const arr = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0];

let leftPointer = 0;
let rightPointer = 0;

while (leftPointer < arr.length) {
    if (arr[leftPointer] === 0) {
        // Swap arr[leftPointer] with arr[rightPointer]
        [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]];
        rightPointer++;
    }
    leftPointer++;
}

console.log({ arr });
