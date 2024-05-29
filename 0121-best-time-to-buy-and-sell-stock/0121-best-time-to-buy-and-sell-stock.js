/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max_ = 0
  let min_ = prices[0]
  for(let i = 0; i < prices.length; i++){
    min_ = Math.min(prices[i], min_);
    max_ = Math.max(max_, prices[i] - min_);
  }
  return max_;
};
