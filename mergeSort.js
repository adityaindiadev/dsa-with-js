let testArr = [5, 4, 3, 7, 6, 9]

let finalArr = []

let a = 1

let i = 0

function divideBeforeMerge(arr = [], left, right) {

    console.log("Step: ", a);
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


    while (leftArrStart < leftArrEnd && rightArrStart < rightArrEnd) {

        console.log("Step: ", i);

        if (arr[leftArrStart] <= arr[rightArrStart]) {

            console.log(arr[leftArrStart], arr[rightArrStart]);
            finalArr[i] = arr[leftArrStart]
            leftArrStart++
            i++

        }

        else
        // (arr[leftArrStart] >= arr[rightArrStart]) 
        {

            finalArr[i] = arr[rightArrStart]
            rightArrStart++
            i++

        }

        console.log("\n");

    }

    while (leftArrStart < leftArrEnd) {

        finalArr[i] = arr[leftArrStart]
        leftArrStart++
        i++

    }

    while (rightArrStart < rightArrEnd) {

        finalArr[i] = arr[rightArrStart]
        rightArrStart++
        i++

    }

}

divideBeforeMerge(testArr, 0, testArr.length - 1)

console.log("finalArr", finalArr);
console.log("testArr", testArr);
