/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    if (nums.length == 1) return [-1]
    let elemIndex = 0
    const resStack = []
    while (elemIndex < nums.length) {
        let greater = null
        let i = elemIndex + 1
        const elem = nums[elemIndex]
        while (i < nums.length) {
            const nextElem = nums[i]
            if (nextElem > elem) {
                greater = nextElem
                break
            }
            i++
        }

        if (greater == null) {
            let j = 0
            while (j < elemIndex) {
                const nextElem = nums[j]
                if (nextElem > elem) {
                    greater = nextElem
                    break
                }
                j++
            }
        }


        resStack.push(greater != null ? greater : -1)
        elemIndex++
    }

    return resStack
};