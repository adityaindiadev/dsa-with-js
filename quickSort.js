let a = 1

function initiateQuickSort(array, i, j, pvt) {
    a++;

    console.log({ i, j, pvt })

    if (a > 20) {
        console.log("overflow");
        return
    }

    if (j >= pvt) {

        console.log("break");
        return

    }

    // iIndex = i;
    // jIndex = j

    const pivotElem = array[pvt];

    for (let index = j; index < pvt; index++) {
        const element = array[index];

        if (element <= pivotElem) {
            i++;
            [array[i], array[index]] = [array[index], array[i]];
        }
    }

    i++;
    [array[i], array[pvt]] = [array[pvt], array[i]];

    currentPvtIndex = i

    // console.log(i, pvt);

    console.log(array);

    initiateQuickSort(array, -1, 0, currentPvtIndex - 1)



    initiateQuickSort(array, currentPvtIndex, currentPvtIndex+1, array.length-1)


}

// function partitionAndReturnPivot(array, leftIndex, rightIndex) {

// }

const array = [2, 4, 1, 24, 3]
console.log("Original Array:", array);
initiateQuickSort(array, -1, 0, array.length - 1)
// initiateQuickSort(array, -1, 0, 1)
console.log("Sorted Array:", array);