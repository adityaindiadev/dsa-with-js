/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = [];
     
     // Loop through each word in the words array
     for (let i = 0; i < words.length; i++) {
         let word = words[i];
         let indexToPush = null;
         
         // Loop through each character of the current word
         for (let j = 0; j < word.length; j++) {
             if (word[j] === x) {
                 indexToPush = j;
                 break;  // If we found the character, stop checking further
             }
         }
         
         // If the character is found, add the word to the result array
         if (indexToPush != null) {
             result.push(indexToPush);
             indexToPush = null
         }
     }
     
     return result;
 };
const words = ["abc","bcd","aaaa","cbc"], x = "a"
 console.log(findWordsContaining(words,x));
 