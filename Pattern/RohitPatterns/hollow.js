// ******
// *    *
// *    *
// *    *
// *    *
// ******

function printHollow(numOfRowsAndColumn = 6) {
    if (numOfRowsAndColumn < 1)
        return
    const patternStr = '*'
    let resPattern = ''
    for (let index = 1; index <= numOfRowsAndColumn; index++) {
        resPattern += patternStr
    }
    resPattern += '\n'
    let hollowRows = numOfRowsAndColumn - 2
    const hollowCols = hollowRows
    for (let index = 1; index <= hollowRows; index++) {
        resPattern += patternStr
        for (let index2 = 1; index2 <= hollowCols; index2++) {
            resPattern += " "
        }
        resPattern += patternStr
        resPattern += '\n'
    }
    if (numOfRowsAndColumn < 2) {
        console.log(resPattern);
        return
    }
    for (let index = 1; index <= numOfRowsAndColumn; index++) {
        resPattern += patternStr
    }

    console.log(resPattern);

}

printHollow(10)