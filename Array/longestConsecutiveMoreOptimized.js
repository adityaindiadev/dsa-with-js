// https://leetcode.com/problems/longest-consecutive-sequence/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        // Check if 'num' is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count the length of the consecutive sequence starting from 'num'
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Update the longest streak found so far
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
