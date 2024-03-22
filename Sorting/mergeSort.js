let testArr = [27, 14, 35, 9, 22, 48, 11, 31, 6, 17, 39, 5, 29, 42, 20, 8, 33, 16, 3, 25, 19, 46, 7, 12, 38, 2, 24, 41, 10, 30, 4, 21, 34, 18, 49, 15, 26, 37, 1, 43, 23, 13, 32, 45, 28, 36, 50, 40, 44, 47]


let finalArr = []

let a = 1

let i = 0

function divideBeforeMerge(arr = [], left, right) {

    console.log("divideBeforeMerge Step: ", a);
    console.log("Left: ", left, " || ", "Right: ", right);
    console.log("\n");

    a++;

    if (a > 1000) {

        console.log("overflow");
        return
    }


    if (left == right) {
        return
    }

    const mid = parseInt((left + right) / 2)

    divideBeforeMerge(arr, left, mid)
    divideBeforeMerge(arr, mid + 1, right)

    merge(arr, left, mid, mid + 1, right)

}

function merge(arr, leftArrStart, leftArrEnd, rightArrStart, rightArrEnd) {


    console.log("merge Step: ", i);

    console.log({ arr, leftArrStart, leftArrEnd, rightArrStart, rightArrEnd });

    const leftArrSize = leftArrEnd - leftArrStart + 1
    const rightArrSize = rightArrEnd - rightArrStart + 1

    let leftArr = new Array(leftArrSize)
    let rightArr = new Array(rightArrSize)

    // insert values to left temp array
    for (let index = 0; index < leftArrSize; index++) {
        leftArr[index] = arr[leftArrStart + index];

    }

    // insert values to right temp array
    for (let index = 0; index < rightArrSize; index++) {
        rightArr[index] = arr[rightArrStart + index];
    }

    console.log("leftArr", leftArr);
    console.log("rightArr", rightArr);

    let iIndex = 0
    let jIndex = 0
    let kIndex = leftArrStart

    while (iIndex < leftArrSize && jIndex < rightArrSize) {

        console.log("while");

        if (leftArr[iIndex] <= rightArr[jIndex]) {

            console.log("leftArr[iIndex] < rightArr[jIndex]");
            arr[kIndex] = leftArr[iIndex]
            iIndex++
            kIndex++

        }

        else
        // (arr[leftArrStart] >= arr[rightArrStart]) 
        {
            console.log("else");

            arr[kIndex] = rightArr[jIndex]
            jIndex++
            kIndex++
            console.log({kIndex});


        }



    }

    while (iIndex < leftArr.length) {

        console.log("iIndex < leftArr.length");

        arr[kIndex] = leftArr[iIndex]
        iIndex++
        kIndex++
        console.log({kIndex});


    }

    while (jIndex < rightArr.length) {

        console.log("jIndex < rightArr.length");

        arr[kIndex] = rightArr[jIndex]
        jIndex++
        kIndex++
        console.log({kIndex});


    }

    i++
    console.log("After Merge Final Array: ", arr);
    console.log("\n");
}

divideBeforeMerge(testArr, 0, testArr.length - 1)

// console.log("testArr", testArr);
console.log("finalArr", testArr);

