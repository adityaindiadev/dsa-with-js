let arr = [2, 3, 4, 5]


function rec(arr = [], index, elementToAdd) {

    if (arr.length == index) {

        arr[index] = elementToAdd
        console.log("return");
        return
    } 
    console.log("elem: ", arr[index]);

    const copyElementToAdd = arr[index]

    arr[index] = elementToAdd

    rec(arr, index + 1, copyElementToAdd)



}

rec(arr, 0, 1)

console.log(arr);

