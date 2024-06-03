/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let [l, r] = [0, nums.length-1];
    while(l <= r) {
        let mid = Math.floor((l + r) / 2);
        if(nums[mid] === target) {
            l = r = mid;
            while(l >= 0 && nums[l] === target) {
                l--;
            }
            while(r < nums.length && nums[r] === target) {
                r++;
            }
            return [l+1, r-1];
        }
        if(nums[mid] > target)
            r = mid-1;
        else
            l = mid+1;
    }
    return [-1, -1];
};