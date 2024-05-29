/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let start = strs[0];
  for(s of strs) {
    if(s === strs[0]) 
      continue;
    while(s.indexOf(start) != 0) {
      start = start.substring(0, start.length - 1)
      if (start.length == 0) 
        return "";
    }
  }
  return start;
};