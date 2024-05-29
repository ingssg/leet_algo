/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const ans = new Set();
    nums.sort((a, b) => a-b)
    
    for(let i = 0; i < nums.length-2; i++) {
      let l = i + 1, r = nums.length - 1
      while(l<r) {
        if(nums[i] + nums[l] + nums[r] === 0){
          ans.add(JSON.stringify([nums[i], nums[l], nums[r]]));
          while(l<r && nums[l] === nums[l+1])
            l++;
          while(l<r && nums[r] === nums[r-1])
            r--;

          l++;
          r--;
        }
          
        else if(nums[i] + nums[l] + nums[r] < 0)
          l++;
        else
          r--;
      }  
    }
    const result = Array.from(ans).map(str => JSON.parse(str));
    return result;
};