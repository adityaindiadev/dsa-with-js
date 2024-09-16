// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const charMap = new Map()
    for (let i = 0; i < magazine.length; i++) {
        const key = magazine[i]
        charMap.has(key) ? charMap.set(key, (charMap.get(key) + 1)) : charMap.set(key, 1)
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const key = ransomNote[i]
        if (!charMap.has(key))
            return false
        const count = charMap.get(key)
        if (count < 1)
            return false
        else
            charMap.set(key, count - 1)

    }

    return true
};