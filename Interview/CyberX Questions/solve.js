// 2)Given a string s, find the length of the longest substring without repeating characters.
// 	Input: s = "abcabcbbfpdpdf"


function longestSubstringWRepeat(string = '') {

    let obj = {}
    const possibleResArray = []

    for (let i = 0; i < string.length; i++) {

        let subStr = ''
        for (let j = i; j < string.length; j++) {
            const char = string[j];

            if (obj[char]) {
                break
            }
            else {
                obj[char] = 1
                subStr += char
            }
        }

        possibleResArray.push(subStr)
        obj = {}

        possibleResArray.sort((a, b) => a.length - b.length)

    }

    // console.log({ possibleResArray });

    console.log("Longest Substring: = ", possibleResArray[possibleResArray.length-1], " and length of it is: = ", possibleResArray[possibleResArray.length-1].length);
    

}

longestSubstringWRepeat('abcabcbbfpdpdf')



