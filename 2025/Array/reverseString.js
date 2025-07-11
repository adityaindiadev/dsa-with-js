/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let front = 0
    let rear = s.length - 1

    while (front < rear) {
        [s[front], s[rear]] = [s[rear], s[front]]
        front++
        rear--
    }
};

reverseString(["h","e","l","l","o"])