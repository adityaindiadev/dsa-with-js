
function reverseString(str = '', idx = 0) {
    if (idx === str.length) {
        return ''
    }
    return reverseString(str, idx + 1) + str[idx]
}

const str = "asad"

console.log(reverseString(str));

