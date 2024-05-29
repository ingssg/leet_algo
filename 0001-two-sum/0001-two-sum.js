/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hm = new Map();
  for (let i = 0; i < nums.length; i++) {
    if(hm.has(target-nums[i])) 
      return [hm.get(target-nums[i]), i]
    hm.set(nums[i], i)
  }
};
