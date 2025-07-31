/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const uniqueElements = new Map()
    nums.forEach((elem, index) => {
        uniqueElements.set(elem, 'p')
    })
    let index = 0
    for (const num of uniqueElements.keys()) {
        nums[index] = num
        index++
    }

    return index

};

var removeDuplicates = function(nums) {
    const uniqueElements = new Set(nums)
    let index = 0
    for(const num of uniqueElements.keys()){
        nums[index] = num
        index++
    }

    return index

};

removeDuplicates([1, 1, 2])