/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) 
      return false;
    num = x.toString().split("");
    while(num.length > 1) {
      if(num.shift() !== num.pop())
        return false;
    }
    return true;
};
