// https://leetcode.com/problems/summary-ranges/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length == 0) return []
    let first = nums[0]
    let last = nums[0]
    let i = 1
    const res = []
    while (i < nums.length) {
        const currNum = nums[i]
        if ((last + 1) == currNum) {
            last = currNum
        }
        else {
            if (first == last) {
                res.push(String(first))
                first = last = currNum
            }
            else {
                res.push(String(first) + "->" + String(last))
                first = last = currNum
            }
        }

        i++
    }

    if (first == last) {
        res.push(String(first))
  
    }
    else {
        res.push(String(first) + "->" + String(last))
        
    }

    return res

};