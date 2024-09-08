// https://leetcode.com/problems/combination-sum/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let finalArr = []
    performCombination(candidates, target, 0, [], finalArr, 0)
    return finalArr
};

function performCombination(candidates, target, idx, combiArr = [], finalArr, checkSum) {
    // console.log({candidates, target, idx, combiArr, finalArr});
    // const checkSum = (combiArr.reduce((a, b) => a + b, 0))
    if (checkSum == target) {
        finalArr.push(combiArr)
        return
    }
    if (checkSum > target) {
        return
    }
    for (let index = idx; index < candidates.length; index++) {
        // const element = candidates[index];
        performCombination(candidates, target, index, [...combiArr, candidates[index]], finalArr, checkSum+candidates[index])
    }
}
console.log(combinationSum([2, 3, 5], 8));

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]