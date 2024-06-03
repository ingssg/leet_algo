/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let sum = 0, ans = 0;
  const q = [];
  for (n of nums) {
    sum += n;
    q.push(n);
    while(sum > k) {
      sum -= q.shift();
    }
    if(sum === k && q.length)
      ans += 1;
  }
  return ans;
};
