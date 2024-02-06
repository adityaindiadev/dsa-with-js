let leftArr = [4, 5];

let rightArr = [4, 9, 12];

let arr = [null, null, null, null];

let i = 0

let leftArrStart = 0;
let rightArrStart = 0;

let leftArrEnd = leftArr.length
let rightArrEnd = rightArr.length

while (leftArrStart < leftArrEnd && rightArrStart < rightArrEnd) {

    console.log("Step: ", i);

    if (leftArr[leftArrStart] <= rightArr[rightArrStart]) {

        console.log(leftArr[leftArrStart], rightArr[rightArrStart]);
        arr[i] = leftArr[leftArrStart]
        leftArrStart++
        i++

    }

    else
    // (leftArr[leftArrStart] >= rightArr[rightArrStart]) 
    {

        arr[i] = rightArr[rightArrStart]
        rightArrStart++
        i++

    }

    console.log("\n");

}

while (leftArrStart < leftArrEnd) {

    arr[i] = leftArr[leftArrStart]
    leftArrStart++
    i++

}

while (rightArrStart < rightArrEnd) {

    arr[i] = rightArr[rightArrStart]
    rightArrStart++
    i++

}

console.log(arr);