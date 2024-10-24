/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let val = 0
    operations.forEach((op, _) => {
        switch (op) {
            case '++X':
                ++val
                break;
            case 'X++':
                val++
                break;
            case '--X':
                --val
                break;
            case 'X--':
                val--
                break;

            default:
                break;
        }
    })

    return val
};


console.log();


// operations[i] will be either "++X", "X++", "--X", or "X--".