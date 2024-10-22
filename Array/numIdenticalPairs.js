// https://leetcode.com/problems/number-of-good-pairs/

function numIdenticalPairs(nums) {
    let countMap = {};
    let goodPairs = 0;
    
    for (let num of nums) {
        if (countMap[num]) {
            // If num has appeared before, it can form new good pairs
            goodPairs += countMap[num];
            countMap[num] += 1;
        } else {
            // First time seeing this num
            countMap[num] = 1;
        }
    }
    
    return goodPairs;
}
