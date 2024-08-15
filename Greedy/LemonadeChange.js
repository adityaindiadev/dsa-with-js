/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0
    let ten = 0
    let twenty = 0

    for (let index = 0; index < bills.length; index++) {
        const bill = bills[index];

        if (bill === 5) {
            five++
            continue
        }
        else if (bill === 10) {
            ten++
            if (five > 0) {
                five--
                continue
            }
            else
                return false
        }
        else if (bill === 20) {

            if (five === 0)
                return false
            else if (ten === 0) {
                if (five < 3) {
                    return false
                }
                else
                    five = five - 3
                continue
            }
            else if (ten > 0) {
                ten--
                five--
            }
        }

    }

    return true
};

const billsArray = [5,5,5,20]

console.log(lemonadeChange(billsArray));

