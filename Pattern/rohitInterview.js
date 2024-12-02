// **
// ***
// ****
// *********
// Ye star pattern print kro
// First row 2 start
// Second row 3 star
// Third row 4 star
// Fourth row 9 star


function printItDear(numOfRows = 2) {
    let odd = 2
    let even = 3

    let resString = ''

    for (let index = 1; index <= numOfRows; index++) {
        let terms;
        if ((index % 2) === 0) {
            terms = even
            even = even * even
        }
        else {
            terms = odd
            odd = odd * odd
        }
        
        for (let index2 = 1; index2 <= terms; index2++) {
            resString += "*"
        }
        resString += "\n"
    }

    console.log(resString);

}

printItDear(7)