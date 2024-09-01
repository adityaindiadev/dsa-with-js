/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let mainResult = '';
    let word = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            word = s[i] + word;
        } else if (word) {
            mainResult = mainResult ? mainResult + ' ' + word : word;
            word = '';
        }
    }
    if (word) {
        mainResult = mainResult ? mainResult + ' ' + word : word;
    }
    return mainResult;
};