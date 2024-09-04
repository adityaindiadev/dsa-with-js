// https://leetcode.com/problems/merge-strings-alternately/description/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var string1 = word1
var string2 = word2
let res = ''

let i = 0
while (((i < string1.length) && (i < string2.length))) {
    res += string1[i]
    res += string2[i]
    i++
}

while ((i < string1.length)) {
    res += string1[i]
    i++
}

while ((i < string2.length)) {
    res += string2[i]
    i++
}

return res
};