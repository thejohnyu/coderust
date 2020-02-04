class token {
    constructor(value, is_operator) {
      this.value = value;
      this.is_operator = is_operator;
    }
  }
  
  let is_operator = function(c) {
    return (c === '+' || c === '-' || c === '*' || c === '/');
  };
  // returns true if op1 has higher/equal precedence
  // compared to op2
  let preced = function(op1, op2) {
    if (op1 === '*' || op1 === '/') {
      return true;
    }
  
    if (op1 === '+' || op1 === '-') {
      if (op2 === '+' || op2 === '-') {
        return true;
      }
    }
  
    return false;
  };
  
  let is_digit = function(ch) {
    return (ch >= '0' && ch <= '9');
  };
  
  let str_to_double = function(s, i) {
    let n = s.length;
    if (i >= n) {
      return null;
    }
  
    let temp = '';
    while (i < n && (s[i] === ' ' || s[i] === '\t')) {
      i++;
    }
  
    if (i >= n) {
      return null;
    }
  
    if (s[i] === '-') {
      temp += '-';
      i++;
    }
  
    while (i < n) {
      let ch = s[i];
      if (ch !== '.' && !is_digit(ch)) {
        break;
      }
  
      temp += ch;
      i++;
    }
  
    return {
      digit: parseFloat(temp),
      index: i
    };
  };
  
  let convert_to_postfix = function(expr) {
    let post_fix = [];
  
    let operators = [];
    let n = expr.length;
    let i = 0;
    while (i < n) {
      let ch = expr[i];
      if (ch === ' ' || ch === '\t') {
        i++;
        continue;
      }
  
      if (is_operator(ch)) {
        while (operators && preced(operators[operators.length - 1], ch)) {
          let t = new token(operators.pop(), true);
          post_fix.push(t);
        }
        operators.push(ch);
        i++;
      } else {
        let re = str_to_double(expr, i);
        let d = re.digit;
        i = re.index;
        let t = new token(d, false);
        post_fix.push(t);
      }
    }
    while (operators.length > 0) {
      let t = new token(operators.pop(), true);
      post_fix.push(t);
    }
    return post_fix;
  };
  
  let evaluate1 = function(post_fix) {
    let operands = [];
    for (let x = 0; x < post_fix.length; x++) {
      if (post_fix[x].is_operator) {
        let val2 = operands.pop();
        let val1 = operands.pop();
        let op = post_fix[x].value;
        if (op === '+') {
          operands.push(val1 + val2);
        } else if (op === '-') {
          operands.push(val1 - val2);
        } else if (op === '*') {
          operands.push(val1 * val2);
        } else if (op === '/') {
          operands.push(val1 / val2);
        }
      } else {
        operands.push(post_fix[x].value);
      }
    }
    return operands.pop();
  };
  
  let evaluate = function(expr) {
    return evaluate1(convert_to_postfix(expr));
  };
  
  let test = function(expr) {
  
    let result_lib = eval(expr);
    let result1 = evaluate(expr);
    console.log(result1);
  };
  
  test("4+5");
  test("3");
  test("      4   ");
  test("  3  +  2.45  /8");