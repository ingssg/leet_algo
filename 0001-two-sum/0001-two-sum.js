/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  ans = [];
  for (let i = 0; i < nums.length; i++) {
    if(nums.slice(i+1).includes(target - nums[i])) {
      ans.push(i, nums.indexOf(target - nums[i], i+1))
      break;
    }
  }
  return ans;
};
