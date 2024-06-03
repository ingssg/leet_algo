/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let width = 0;
  let [l, r] = [0, height.length-1];
  while(l<r) {
    width = Math.max(width, (r-l)*Math.min(height[l], height[r]));
    if(height[l] < height[r])
      l+=1;
    else
      r-=1;
  }
  
  return width;
};
