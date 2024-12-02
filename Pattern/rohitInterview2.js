function printItDear(numOfRows = 2) {
    let firstRow = 1
    let secondRow = 2
    if (numOfRows <= 0) {
        return
    }
    let resString = ''

    for (let index = 1; index <= firstRow; index++) {
        resString += '*'
    }
    resString += '\n'
    if (numOfRows < 2) {
        return
    }
    for (let index = 1; index <= secondRow; index++) {
        resString += '*'
    }
    resString += '\n'
    if (numOfRows < 3) {
        return
    }
    
    for (let index = 3; index <= numOfRows; index++) {
        const newSecondRow = (firstRow + secondRow)
        for (let index2 = 1; index2 <= newSecondRow; index2++) {
            resString += '*'
        }
        firstRow = secondRow
        secondRow = newSecondRow
        resString += '\n'
    }
    console.log(resString);

}

printItDear(0)