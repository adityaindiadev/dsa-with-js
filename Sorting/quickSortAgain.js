function partition(low, high, arr = []) {
    const pivotElement = arr[high]
    let pivotIndex = low - 1

    for (let index = low; index < high; index++) {

        if (arr[index] <= pivotElement) {
            pivotIndex++
            [arr[index], arr[pivotIndex]] = [arr[pivotIndex], arr[index]]
        }
    }

    [arr[high], arr[pivotIndex + 1]] = [arr[pivotIndex + 1], arr[high]]
    return pivotIndex + 1
}

function quickSort(arr = [], low, high) {

    if (low >= high) {
        return
    }

    const pivotIndex = partition(low, high, arr)
    console.log({ pivotIndex });

    quickSort(arr, low, pivotIndex - 1) // for Left
    quickSort(arr, pivotIndex + 1, high) // for Right

}
const arr = [2, 5, 1, 6, 4]
quickSort(arr, 0, arr.length - 1)
console.log({ arr });


// [5,2,1,6,4]
// [2,5,1,6,4]
// [2,1,4,6,5]
// [2,1,4,6,5] //pivot 4
// [2,1] //left
// [1,2]
// [6,5] //right
// [5,6]

// [2, 5, 1, 6, 4]
// [2, 1, 5, 6, 4]