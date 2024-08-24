// https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    const uniqueObj = {}
    const resultArrObj = {}

    for (let index = 0; index < nums1.length; index++) {
        uniqueObj[nums1[index]] = 1
    }

    for (let index = 0; index < nums2.length; index++) {
        if(uniqueObj[nums2[index]]){
            resultArrObj[nums2[index]] = 1
        }
    }

    return Object.keys(resultArrObj)
};