/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  const ans = [];
  let temp = [];
  temp.push(intervals[0][0]);
  let tmp = intervals[0][1];
  for (i of intervals.slice(1)) {
    if (tmp < i[0]) {
      temp.push(tmp);
      ans.push(temp);
      temp = [i[0]];
    }
    tmp = Math.max(i[1], tmp);
  }
  if (temp.length !== 0) {
    temp.push(tmp);
    ans.push(temp);
  }
  return ans;
};
