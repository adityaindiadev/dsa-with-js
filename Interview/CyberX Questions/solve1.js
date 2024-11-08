// 1)Given an array arr[], the task is to find the subarray that has the maximum sum and return its sum.
// 	const arr = [21, 13, -8, 4, -1, 22, 3, -1, 85, 47];

function findTheMaximumSumSubArray(arr = []) {
    let i = 0
    // const possibleSolArr = []
    // possibleSolArr.push(arr[i])
    const obj = {}

    while (i < arr.length) {
        let j = 0
        while (j < arr.length) {
            let sum = 0
            for (let index = i; index <= j; index++) {
                const element = arr[index];
                sum = sum + element
            }
            obj[String(sum)] = `${i},${j}`
            j++
        }
        i++
    }

    const keyArr = Object.keys(obj)
    keyArr.sort((a,b)=>b-a)

    console.log("Maximum Sub Array Sum: ", parseInt(keyArr[0]));

    // console.log({ obj }, obj[keyArr[0]],keyArr[0]);

    // const indexes = obj[keyArr[0]]
    // let start = indexes.split(',')[0]
    // let end = indexes.split(',')[1]
    // console.log(start,end);

    // console.log("Maximum Sum Sub Array: ",arr.slice(start,end+1));
    
    

}

findTheMaximumSumSubArray([21, 13, -8, 4, -1, 22, 3, -1, 85, 47])