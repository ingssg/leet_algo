/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let alp_set = new Set();
  let max_c = 0;
  for (let i = 0; i < s.length; i++) {
    let tmp = alp_set.size;
    alp_set.add(s[i]);
    if (tmp == alp_set.size) {
      max_c = Math.max(max_c, alp_set.size);
      let alp_arr = [...alp_set].slice([...alp_set].indexOf(s[i])+1);
      alp_set = new Set(alp_arr);
      alp_set.add(s[i]);
    }
  }
  max_c = Math.max(max_c, alp_set.size);
  return max_c;
};