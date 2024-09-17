// https://leetcode.com/problems/missing-number/


/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//     let numbers = new Set(nums);
//     let n = nums.length;

//     for (let i = 0; i < n; i++) {
//         if (!numbers.has(i)) return i;
//     }

//     return n;
// };

var missingNumber = function (nums) {
    let n = nums.length
    let expected = Math.floor(n * (n + 1) / 2)
    return expected - nums.reduce((partialSum, a) => partialSum + a, 0)
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
console.log(missingNumber(nums));
