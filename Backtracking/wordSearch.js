// https://leetcode.com/problems/word-search/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    return initiateWordSearch(board, word, 0, 0, 0)
};
function initiateWordSearch(board, word, row, column, wordCharIndex, hashMap) {

    if (wordCharIndex >= word.length) {
        console.log('wordCharIndex >= word.length', { board, word, row, column, wordCharIndex });
        return true
    }
    if (row >= board.length)
        return false
    if (column >= board[0].length)
        return false
    if (row < 0)
        return false
    if (column < 0)
        return false
    if (board[row, column] == undefined) {
        return false
    }
    if (board[row][column] != word[wordCharIndex]) {
        return false
    }
    if (initiateWordSearch(board, word, row, column + 1, wordCharIndex + 1) || initiateWordSearch(board, word, row + 1, column, wordCharIndex + 1) || initiateWordSearch(board, word, row, column - 1, wordCharIndex + 1) || initiateWordSearch(board, word, row - 1, column, wordCharIndex + 1)) {
        console.log('if', { board, word, row, column, wordCharIndex });
        return true
    }
    else {
        return (initiateWordSearch(board, word, row, column + 1, 0) || initiateWordSearch(board, word, row + 1, column, 0) || initiateWordSearch(board, word, row, column - 1, 0) || initiateWordSearch(board, word, row - 1, column, 0))
    }


}
const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
const word = "ABCB"
console.log(exist(board, word));
