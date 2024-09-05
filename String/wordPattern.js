// https://leetcode.com/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const sArr = s.split(" ")
    if (pattern.length != sArr.length)
        return false
    const map = new Map()
    const sMap = new Map()
    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) != sArr[i]) {
                console.log("if", JSON.stringify(map))
                console.log("ifsMap", JSON.stringify(sMap))
                return false
            }
        }
        else {
            if (sMap.has(sArr[i])){
                console.log("else", JSON.stringify(map))
                console.log("elsesMap", JSON.stringify(sMap))
                return false
            }
            map.set(pattern[i], sArr[i])
            sMap.set(sArr[i], pattern[i])
        }
    }
    console.log(JSON.stringify(map))
    return true
};