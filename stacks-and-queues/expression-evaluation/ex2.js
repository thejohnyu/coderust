class token {
    constructor(value, is_operator) {
      this.value = value;
      this.is_operator = is_operator;
    }
  }
  
  let is_div_or_mul = function(ch) {
    return (ch === '*' || ch === '/');
  };
  
  let is_operator = function(c) {
    return (c === '+' || c === '-' || c === '*' || c === '/');
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
  
  let evaluate = function(expr) {
    let operators = [];
    let operands = [];
  
    let op = 0;
    let prev = 0;
  
    let i = 0;
    let n = expr.length;
    while (i < n) {
      let ch = expr[i];
      if (ch === ' ' || ch === '\t') {
        i++;
        continue;
      }
  
      if (is_operator(ch)) {
        op = ch;
        operators.push(ch);
        i++;
      } else {
        let re = str_to_double(expr, i);
        let d = re.digit;
        i = re.index;
  
        if (is_div_or_mul(op)) {
          operators.pop();
          operands.pop();
          prev = (op === '*') ? (prev * d) : (prev / d);
          operands.push(prev);
          op = 0;
        } else {
          operands.push(d);
          prev = d;
        }
      }
    }
  
    let t = (operands.length > 0) ? operands[0] : 0;
    i = 1;
    for (let k = 0; k < operators.length; k++) {
      let operator = operators[k];
      let operand = operands[i];
      t = (operator === '+') ? (t + operand) : (t - operand);
      i++;
    }
    return t;
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