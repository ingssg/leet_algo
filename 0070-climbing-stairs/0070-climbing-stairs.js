/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = Array(n+1).fill(0)
    if(n <= 2)
      return n;
    dp[1] = 1
    dp[2] = 2
    for(let i = 3; i < n+1; i++){
      dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n];
};