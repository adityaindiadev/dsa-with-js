const arr = [2, 14, 3, 1]
let maxIndex = 0

for (let index = 0; index < arr.length; index++) {
    for (let jindex = 0; jindex < arr.length - index; jindex++) {
        if (arr[jindex] > arr[maxIndex]) {
            maxIndex = jindex
        }
    }
    [arr[arr.length - 1 - index], arr[maxIndex]] = [arr[maxIndex], arr[arr.length - 1 - index]]
    maxIndex = 0
}

console.log(arr);
