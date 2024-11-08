// 	Input: candidates = [2,3,6,7], target = 7
// 10)Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// 	Input: x = 2.00000, n = 10


function pow(x, n) {
    
    let powRes = x
    for (let index = 2; index <= n; index++) {
        
        powRes = powRes * x
    }

    return powRes
}


console.log(pow(3,3));

