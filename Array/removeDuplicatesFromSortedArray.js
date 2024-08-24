// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0
    let right = 1
    let check = 1

    while (right < nums.length && left <= right) {
        if (nums[right] == nums[right - 1]) {

            if (check < 2) {
                check = 2
                left++
                nums[left] = nums[right]
            }
            right++
        }
        else {
            check = 1
            left++
            nums[left] = nums[right]
            right++
        }
    }

    // console.log(nums);
    return left + 1

};