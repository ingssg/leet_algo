/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  const max_arr = Array(nums.length).fill(0);
  for(let i = 0; i < nums.length-2; i++) {
    for (let j = i+1; j < nums.length-1; j++) {
      if (nums[i] - nums[j] <= 0)
        continue;
      _max = Math.max(...nums.slice(j+1));
      if((nums[i] - nums[j]) * _max > max_arr[i])
        max_arr[i] = (nums[i] - nums[j]) * _max;
    }
  }
  return Math.max(...max_arr) ? Math.max(...max_arr) : 0;
};