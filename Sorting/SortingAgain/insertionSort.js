const arr = [27, 14, 35, 9, 22, 48, 11, 31, 6, 17, 39, 5, 29, 42, 20, 8, 33, 16, 3, 25, 19, 46, 7, 12, 38, 2, 24, 41, 10, 30, 4, 21, 34, 18, 49, 15, 26, 37, 1, 43, 23, 13, 32, 45, 28, 36, 50, 40, 44, 47]
let sortedNumIndex = 0
// let sortedNum = arr[0]
let unSortedNumIndex = 1
while (unSortedNumIndex < arr.length) {

    let prev = sortedNumIndex
    let curr = unSortedNumIndex
    while (arr[prev] > arr[curr] && prev >= 0) {
        [arr[prev], arr[curr]] = [arr[curr], arr[prev]]
        prev--
        curr--
    }
    sortedNumIndex++
    unSortedNumIndex++
}

console.log(arr);