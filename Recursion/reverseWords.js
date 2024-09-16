
function reverseString(word, finalResult) {
    if (word.length == 0) {
        return
    }
    const char = word[0]
    reverseString(word.slice(1), finalResult)
    finalResult.push(char)

}
function reverseWords(words) {
    const wordsArr = words.split(' ')
    const finalResult = []
    wordsArr.forEach((word, index) => {
        reverseString(word, finalResult)
        finalResult.push(' ')
    })
    return finalResult.join('')
}

const ip = "Hello Word"

console.log(reverseWords(ip));
