/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  for (e of nums) {
    if(e !== max && e !== min)
      return e;
  }
  return -1;
};