/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let [reverse, temp] = [0, 0];
  let abs_x = Math.abs(x);
  while(abs_x > 0){;
    temp = abs_x % 10;
    reverse = reverse * 10 + temp;
    abs_x = Math.floor(abs_x/10);
  }
  if(reverse < (1 << 31) || reverse > -(1 << 31) + 1)
    return 0;

  if(x < 0)
    reverse *= -1;
  return reverse;
};