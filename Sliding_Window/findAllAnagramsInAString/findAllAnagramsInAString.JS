// https://leetcode.com/problems/find-all-anagrams-in-a-string/submissions/1353671533/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    let loopCount = 1

    let obj = {}

    // put characters in hashmap
    for (let index = 0; index < p.length; index++) {
        const char = p[index]

        if (obj[char]) {
            obj[char] = obj[char] + 1
        } else
            obj[char] = 1
    }

    // check if all keys are marked as 0 in object
    const checkIfObjAllZero = () => Object.values(obj).every(value => value <= 0);

    let left = 0
    let right = 0

    const outputArray = []

    const patternSize = p.length

    while (right < s.length && left <= right) {

        console.log(`Loop ${loopCount}: `, { left }, { right }, { obj });


        let windowSize = (right - left) + 1

        const rightPointerChar = s[right]

        if (obj[rightPointerChar] != undefined) {
            obj[rightPointerChar] = obj[rightPointerChar] - 1
            console.log("obj[rightPointerChar] == 1", rightPointerChar, { obj });
        }



        if (windowSize == patternSize) {
            console.log("got pattern");

            if (checkIfObjAllZero()) {
                console.log("ObjAllZero");

                outputArray.push(left)
            }

            const leftPointerChar = s[left]
            if (obj[leftPointerChar] != undefined) {
                console.log("obj[leftPointerChar] = 1", leftPointerChar);

                obj[leftPointerChar] = obj[leftPointerChar] + 1
            }
            left++

        }

        // else {
            right++
        // }


        loopCount++

        console.log('\n');

    }


    return outputArray

};

const string = 'cbaebabacd'
const pattern = 'abc'

console.log(findAnagrams(string, pattern));