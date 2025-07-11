function sumOfArr(arr = [], idx = 0) {
    if (idx === arr.length) {
        return 0
    }
    return arr[idx] + sumOfArr(arr, idx + 1)
}
const arr = [1, 2, 3, 4, 5, 10]
console.log(sumOfArr(arr));
