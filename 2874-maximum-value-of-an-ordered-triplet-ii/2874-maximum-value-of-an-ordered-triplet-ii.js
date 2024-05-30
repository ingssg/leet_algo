/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  let max_ = 0;
  const max_i = Array(nums.length).fill(0);
  const max_k = Array(nums.length).fill(0);
  max_k[nums.length-1] = nums[nums.length-1];
  for(let k = nums.length-2; k >= 2; k--) {
    max_k[k] = Math.max(max_k[k+1], nums[k]);
  }
  max_i[0] = nums[0];
  for(let i = 1; i<nums.length-2; i++) {
    max_i[i] = Math.max(max_i[i-1], nums[i]);
  }

  for(let i = 1; i < nums.length-1; i++) {
    max_ = Math.max(max_, (max_i[i-1] - nums[i]) * max_k[i+1])
  }
  return max_;
};