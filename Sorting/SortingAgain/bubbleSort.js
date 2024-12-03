
const arr = [2, 14, 3, 1]

for (let index = 0; index < arr.length; index++) {
    for (let jindex = 0; jindex < arr.length - 1 - index; jindex++) {
        if (arr[jindex] > arr[jindex + 1]) {
            [arr[jindex], arr[jindex + 1]] = [arr[jindex + 1], arr[jindex]]
        }
    }
}

console.log(arr);
