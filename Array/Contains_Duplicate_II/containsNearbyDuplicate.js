// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (obj[num] != undefined) {
            if (Math.abs(i - obj[num]) <= k) {
                return true
            }
        }
        obj[num] = i
    }

    return false
};