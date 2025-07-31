/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesInPlace = function (nums) {
    let uniqueIdx = 0
    let compareIdx = 0

    while (compareIdx < nums.length) {
        if (nums[compareIdx] != nums[uniqueIdx]) {
            uniqueIdx++
            nums[uniqueIdx] = nums[compareIdx]
        }
        compareIdx++
    }
    return uniqueIdx + 1
};

removeDuplicatesInPlace([1,2,2,3,3])