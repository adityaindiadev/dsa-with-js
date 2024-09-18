// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length == 1) return 0
    let max = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = (i + 1); j < prices.length; j++) {
            console.log({i,j}, prices[j], prices[i], {max}, prices[j] - prices[i]);
            
            if (max < (prices[j] - prices[i])) {
                max = (prices[j] - prices[i])
            }
            console.log({max});
            
        }
    }
    return max
};

const arr = [7,1,5,3,6,4]

console.log(maxProfit(arr));
