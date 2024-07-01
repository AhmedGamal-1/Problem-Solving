/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/


var maxProfit = function (prices) {
    let sellIndex = prices.length - 1;
    let profit = 0;

    for (let buyIndex = prices.length - 1; buyIndex >= 0; buyIndex--) {
        let buyValue = prices[buyIndex];
        let sellValue = prices[sellIndex];
        if (buyValue - sellValue >= 0) {
            sellIndex = buyIndex;
        } else {
            let price = sellValue - buyValue;
            profit = Math.max(profit, price)
        }
    }
    return profit
};