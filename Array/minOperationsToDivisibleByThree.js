// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/

function minOperationsToDivisibleByThree(nums) {
    let operations = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let remainder = nums[i] % 3;
        
        if (remainder === 1) {
            // It takes either subtracting 1 or adding 2
            operations += 1;  // The minimum is to subtract 1 (1 operation)
        } else if (remainder === 2) {
            // It takes either subtracting 2 or adding 1
            operations += 1;  // The minimum is to add 1 (1 operation)
        }
        // If remainder === 0, no operation is needed
    }
    
    return operations;
}
