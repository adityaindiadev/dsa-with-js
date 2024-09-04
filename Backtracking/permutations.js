// https://leetcode.com/problems/permutations/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function performPermutation(nums, index, perm, finalArray) {

    if (nums.length == 0) {
        finalArray.push(perm)
        return
    }

    for (let i = 0; i < nums.length; i++) {
        let newNumsArr = [...nums.slice(0, i), ...nums.slice(i + 1)]
        performPermutation(newNumsArr, index + 1, [...perm, nums[i]], finalArray)
    }

}

var permute = function (nums) {
    const finalArray = []
    performPermutation(nums, 0, [], finalArray)
    return finalArray
};