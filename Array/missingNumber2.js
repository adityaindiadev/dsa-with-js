function missingNumber(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    let lowestNum = Math.min(...nums)
    let set = new Set(nums)

    let count = 0
    while (set.has(lowestNum)) {
        count++
        lowestNum++
    }
    if (count == nums.length)
        return 0
    else
        return lowestNum
}
const nums = [5, 6, 8, 9, 1, 2, 3, 4]
console.log(missingNumber(nums));

// [28, 6, 1, 4, 27, 7, 13, 15, 21, 10, 11, 18, 20, 9, 14, 16, 19, 8, 5, 25, 17, 24, 23, 29, 2, 26, 3, 12]