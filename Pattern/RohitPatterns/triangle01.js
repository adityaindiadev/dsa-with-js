function printTriangle01(numOfRows = 6) {
    let printStr = 1
    let resPrint = ''
    for (let index = 1; index <= numOfRows; index++) {
        let nextPrintStr = printStr ? 0 : 1
        for (let index2 = 1; index2 <= index; index2++) {
            resPrint += printStr
            printStr = printStr ? 0 : 1
        }
        resPrint += '\n'
        printStr = nextPrintStr
    }
    console.log(resPrint);
    
}

printTriangle01()
