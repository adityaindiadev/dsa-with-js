//   1
//  121
// 12321

function printPym(num = 3) {

    let ourNumSpaces = num - 1
    let numIndex = 1
    let row = 1
    let printNum = ''
    while (row <= num) {



        for (let index = 1; index <= ourNumSpaces; index++) {
            printNum += ' '
        }

        for (let index = 1; index <= numIndex; index++) {
            printNum += index
        }
        let revIndex = numIndex - 1
        for (let index = revIndex; index >= 1; index--) {
            printNum += index
        }

        printNum += '\n'
        numIndex++
        row++
        ourNumSpaces--
    }

    return printNum
}

console.log(printPym(3));


