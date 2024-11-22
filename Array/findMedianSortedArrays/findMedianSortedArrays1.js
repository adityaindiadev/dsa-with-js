// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;


    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

var findMedianSortedArrays = function (nums1, nums2) {
    merge(nums1, nums1.length, nums2, nums2.length)

    // console.log(nums1)

    const findMid = (nums1.length / 2)

    const isInt = findMid % 1 === 0

    if (isInt)
        return (nums1[findMid] + nums1[findMid - 1]) / 2
    else
        return nums1[parseInt(findMid)]
};