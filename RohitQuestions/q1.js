/*  Reverse order of with multiple groups
        Input:
        N = 5, K = 3
        arr[] = {1,2,3,4,5}
        Output: 3 2 1 5 4
        Explanation: First group consists of elements 1, 2, 3. Second group consists of 4,5.
    */

function revArrByGivenGroup(arr = [], k = 0) {

    let index = 0
    let limitIndex = k
    while (index < arr.length) {
        let revIndex = (limitIndex > arr.length ? (arr.length - 1) : (limitIndex - 1))
        // console.log({revIndex});

        while ((index <= revIndex) && (index < arr.length)) {
            // console.log("ddd");

            [arr[index], arr[revIndex]] = [arr[revIndex], arr[index]]
            index++
            revIndex--
            // console.log({index,limitIndex,revIndex,arr});
        }

        index = limitIndex
        limitIndex += k
    }

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

revArrByGivenGroup(arr, 3)

console.log(arr);

