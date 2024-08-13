// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    if (nums[0] >= target) {
        return 1
    }

    let left = 0
    let right = 1
    let sum = nums[0]
    let minimumSizeOfSubArray = nums.length + 1
    let isRightExecuted = true

    while (right < nums.length && left <= right) {

        if (isRightExecuted) {
            sum = sum + nums[right]
        }

        if (sum >= target) {

            if (((right - left) + 1) <= minimumSizeOfSubArray) {
                minimumSizeOfSubArray = ((right - left) + 1)
            }
            sum = sum - nums[left]
            left++
            isRightExecuted = false
        }
        else {
            right++
            isRightExecuted = true
        }
    }
    if (minimumSizeOfSubArray == nums.length + 1)
        return 0
    else
        return minimumSizeOfSubArray
};

const arr = [1,1,1,1,1,1,1,1]
const target = 11
console.log("minSubArrayLen", minSubArrayLen(target, arr));
