function printDiamond(numOfRows = 5) {
    let resPrint = ''
    let spaceCounter = numOfRows - 1
    let starCounter = 1
    for (let row = 1; row <= numOfRows; row++) {

        for (let index = 1; index <= spaceCounter; index++) {
            resPrint += ' '
        }
        for (let index = 1; index <= starCounter; index++) {
            resPrint += '*'
        }
        // for (let index = 1; index <= spaceCounter; index++) {
        //     resPrint += ' '
        // }
        resPrint += '\n'
        spaceCounter--
        starCounter+=2
    }
    spaceCounter+=2
    starCounter-=4
    for (let row = 1; row <= numOfRows; row++) {

        for (let index = 1; index <= spaceCounter; index++) {
            resPrint += ' '
        }
        for (let index = 1; index <= starCounter; index++) {
            resPrint += '*'
        }
        // for (let index = 1; index <= spaceCounter; index++) {
        //     resPrint += ' '
        // }
        resPrint += '\n'
        spaceCounter++
        starCounter-=2
    }
    console.log(resPrint);
}

printDiamond()