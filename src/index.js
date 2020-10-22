module.exports = function check(str, bracketsConfig) {
    let arr = bracketsConfig.join().split(","),
        stack = [],
        open = [],
        close = [];
    for (let j = 0; j < arr.length; j++) {
        if (j % 2 == 0) {
            open.push(arr[j]);
        } else {
            close.push(arr[j]);
        }
    }

    for (let i = 0; i < str.length; i++) {
      if (open.indexOf(str[i]) !== -1) {
        if (close.indexOf(str[i]) !== -1) {
          if (stack[stack.length - 1] == str[i]) {
            stack.pop();
          } else {
            stack.push(str[i]);
          }
        } else {
          stack.push(str[i]);
        }
      } else {
        if (stack[stack.length - 1] == open[close.indexOf(str[i])]) {
                stack.pop();
            } else {
              return false
            }
        }
    }
    return stack.length == 0;
};
