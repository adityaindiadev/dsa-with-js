const matrix =
    [[1, 2, 3, 4,],
    [5, 6, 7, 8,],
    [9, 10, 11, 12,],
     [13, 14, 15, 16],
    [17, 18, 19, 20,]
    ]



const m = matrix.length
const n = matrix[0].length
const ouputArray = []

let lastRow = m - 1
let lastCol = n - 1

let firstRow = 0
let firstCol = 0

let row = 0
let column = 0

while (lastRow >= parseInt(m/2) && lastCol >= parseInt(n / 2)) {
    console.log("rrr");

    if (!(column <= lastCol)) {
        break
    }

    // print FirstRow
    while (column <= lastCol) {

        ouputArray.push(matrix[row][column])
        column++
    }
    column--
    row++
    
    if (!(row <= lastRow)) {
        break
    }

    // Last column 
    while (row <= lastRow) {

        ouputArray.push(matrix[row][column])
        row++
    }
    row--
    column--

    if (!(column >= firstCol)) {
        break
    }

    // Last Row 
    while (column >= firstCol) {

        ouputArray.push(matrix[row][column])
        column--
    }
    column++
    row--

    firstRow++

    if (!(row >= firstRow)) {
        break
    }

    // First Column 
    while (row >= firstRow) {

        ouputArray.push(matrix[row][column])
        row--
    }
    row++
    column++

    firstCol++

    lastRow--
    lastCol--

    // console.log(lastRow, lastCol, lastRow >= m/2 && lastCol >= n / 2);
    
}
console.log({ ouputArray });
