/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let candidate = nums[0]
    let count = 1

    for (let i = 1; i < nums.length; i++) {

        if (count == 0) {
            count = 1
            candidate = nums[i]
        }
        else {
            if (candidate == nums[i])
                count++
            else
                count--
        }

    }

    return candidate

};