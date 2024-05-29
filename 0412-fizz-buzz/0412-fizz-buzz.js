/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    ans = []
    for (let i = 1; i <=n; i++) {
      if(i % 3 == 0) {
        if(i % 5 == 0) 
          ans.push("FizzBuzz");
        else
          ans.push("Fizz");
      }
      else if (i % 5 == 0)
        ans.push("Buzz");
      else
        ans.push(String(i));
    }
    console.log(ans)
    return ans;
};
