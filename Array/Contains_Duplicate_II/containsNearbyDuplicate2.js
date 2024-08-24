/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    let obj = {}
    let startPointer = 0

    for (let i = 0; i < nums.length; i++) {

        if ((Math.abs(i - startPointer) > k)) {
            delete obj[nums[startPointer]]
            startPointer++
        }

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