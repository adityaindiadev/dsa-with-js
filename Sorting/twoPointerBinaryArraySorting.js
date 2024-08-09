const arr = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0]

let leftPointer = 0
let rightPointer = arr.length - 1

while (leftPointer <= rightPointer) {

    let leftElem = arr[leftPointer]
    let rightElem = arr[rightPointer]

    if (leftElem == 0 && rightElem == 1) {
        leftPointer++
        rightPointer--
    }

    else if (leftElem == 0 && rightElem == 0) {
        leftPointer++
    }

    else if (leftElem == 1 && rightElem == 1) {
        rightPointer--
    }

    else if (leftElem == 1 && rightElem == 0) {
        arr[leftPointer] = arr[rightPointer]
        arr[rightPointer] = leftElem
        leftPointer++
        rightPointer--
    }

}

console.log({arr});
