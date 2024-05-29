/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  let str_s = s.split("");
  for(e of str_s) {
    if(e === '(' || e === '[' || e === '{') {
      stack.push(e);
    }
    else {
      if(stack.length == 0)
        return false;
      if(e === ')' && stack[stack.length-1] === '(')
        stack.pop();
      else if(e === ']' && stack[stack.length-1] === '[')
        stack.pop();
      else if(e === '}' && stack[stack.length-1] === '{')
        stack.pop();
      else
        return false;
    }
  }
  if(stack.length > 0)
    return false;
  return true;
};