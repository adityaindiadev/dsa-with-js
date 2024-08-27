// https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150


/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {

    let finalResult = 0
    let leftResultArr = [1]
    let rightResultArr = new Array(ratings.length).fill(1)
    let finalResultArr = []

    for (let index = 1; index < ratings.length; index++) {
        let leftElemRating = ratings[index - 1]
        let currElemRating = ratings[index]
        if (currElemRating <= leftElemRating) {
            leftResultArr.push(1)
        } else {
            leftResultArr.push(leftResultArr[index - 1] + 1)
        }
    }

    for (let index = ratings.length - 2; index >= 0; index--) {
        let rightElemRating = ratings[index + 1]
        let currElemRating = ratings[index]
        if (currElemRating <= rightElemRating) {
            // leftResultArr.push(1)
        } else {
            rightResultArr[index] = rightResultArr[index + 1] + 1
        }
    }

    for (let index = 0; index < ratings.length; index++) {
        finalResultArr.push(Math.max(leftResultArr[index], rightResultArr[index]))
    }

    finalResult = finalResultArr.reduce((acc, curr) => acc + curr, 0)

    return finalResult



};