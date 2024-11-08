// 4)Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers. Return any array that satisfies this condition.
// Input: nums = [3,1,2,4]

function solution(nums = []) {
    const evenArr = []
    const oddArr = []

    nums.forEach((item, _) => {

        if ((item % 2) == 0) {
            evenArr.push(item)
        } else {
            oddArr.push(item)
        }
    })

    return [...evenArr,...oddArr]

}

const nums = [3, 1, 2, 4]

console.log(solution(nums));




