// https://leetcode.com/problems/build-array-from-permutation/

function buildArray(nums) {
    let ans = new Array(nums.length);  // Initialize an empty array of the same length
    
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];  // Assign nums[nums[i]] to ans[i]
    }
    
    return ans;
}
