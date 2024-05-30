/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str_x = x.toString().split("");
  let [l, r] = [0, str_x.length - 1];
  if (x < 0) l++;
  while (l <= r) {
    [str_x[l++], str_x[r--]] = [str_x[r], str_x[l]];
  }
  const rst = Number(str_x.join(""));
  if (rst < 1 << 31 || rst > -((1 << 31) - 1)) return 0;
  return rst;
};