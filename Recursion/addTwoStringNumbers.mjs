let num1 = "1000"

let num2 = "2000"


let global = 0

function countNumber(num, count1) {
    global++

    if (String(count1) == num) {

        return count1

    }

    


    let countCopy = count1 + 1

    return countNumber(num, countCopy)




}

console.log(countNumber(num1, 1) + countNumber(num2, 1))
console.log({global});
