function bubbleSort(arr = []) {

    console.log(arr);

    for (let index = 0; index < array.length - 1; index++) {

        for (let jIndex = 0; jIndex < array.length - 1 - index; jIndex++) {

            if (array[jIndex] > array[jIndex + 1]) {

                let temp = array[jIndex]
                array[jIndex] = array[jIndex + 1]
                array[jIndex + 1] = temp
            }
        }
    }

    console.log("Sorted Array-- ", array);

}

let array = [27, 14, 35, 9, 22, 48, 11, 31, 6, 17, 39, 5, 29, 42, 20, 8, 33, 16, 3, 25, 19, 46, 7, 12, 38, 2, 24, 41, 10, 30, 4, 21, 34, 18, 49, 15, 26, 37, 1, 43, 23, 13, 32, 45, 28, 36, 50, 40, 44, 47]
bubbleSort(array)

console.log("After Sorting: ", array);