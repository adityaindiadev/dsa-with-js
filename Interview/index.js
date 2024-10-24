const data = { "data": [["Java", "SpringBoot", "Kotlin"], ["Data", "DB", "MainFile"], ["Uba", "Duba", "Suba"]] }


// Flatten the array
// findout the item that is starting with the letter S

const dataArray = data.data.flat()

// console.log({dataArray});


const stringStartsWithS = dataArray.filter((item) => item[0] == 'S')

console.log({ stringStartsWithS });
