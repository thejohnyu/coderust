const STATE = {
  INTEGER: "INTEGER",
  DECIMAL: "DECIMAL",
  START: "START",
  UNKNOWN: "UNKNOWN",
  AFTER_DECIMAL: "AFTER_DECIMAL"
};

let get_next_state = function(current_state, ch) {// ('start', '4')
  const isInterger = ch >= "0" && ch <= "9";
  const isDecimal = ch === ".";

  if (current_state === STATE.START || current_state === STATE.INTEGER) {
    if (isDecimal) {
      return STATE.DECIMAL;
    } else if (isInterger) {
      // make sure the number is not 2 digits.
      return STATE.INTEGER;
    } else {
      return STATE.UNKNOWN;
    }
  }
  if (current_state === STATE.DECIMAL) {
    if (isInterger) {
      // this ensures that the next number is an interger
      return STATE.AFTER_DECIMAL;
    } else {
      return STATE.UNKNOWN;
    }
  }
  if (current_state === STATE.AFTER_DECIMAL) {
    if (isInterger) {
      return STATE.AFTER_DECIMAL;
    } else {
      return STATE.UNKNOWN;
    }
  }
  return STATE.UNKNOWN;
};

 // At a high level: we will split each string and iterate over each element.
 // As we iterate over 

let is_number_valid = function(s) {

  // "4.325"
  if (s.length === 0) {
    return true;
  }

  let i = 0;
  if (s[i] === "+" || s[i] === "-") {
    // check for positive / negative operator... this is edge case
    i++;
  }

  let current_state = STATE.START; // acc

  for (let l = i; l < s.length; l++) {
    // We iterate over the string ['4', '.', '3', '2', '5']
    current_state = get_next_state(current_state, s[l]); // ('start', '4')
    if (current_state === STATE.UNKNOWN) {
      return false;
    }
  }

  if (current_state === STATE.DECIMAL) return false;

  return true;
};
// Constraits ---> decimals are valid, negative, positive operators are valid. everything else is false
// Input = "4.325"
// 1. STATE.START
// 2. STATE.INTEGER
// 3. STATE.DECIMAL
// 4. STATE.AFTER_DECIMAL
// 5.

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Is Valid Number");
console.log("---------------------------------------");

console.log('is this number valid "4.325" = ' + is_number_valid("4.325"));
console.log('is this number valid "4.325a" = ' + is_number_valid("4.325a"));
console.log('is this number valid "x4.325" = ' + is_number_valid("x4.325"));
console.log('is this number valid "4.32.5" = ' + is_number_valid("4.32.5"));
console.log('is this number valid "4325" = ' + is_number_valid("4325"));
console.log('is this number valid "1." = ' + is_number_valid("1."));
console.log('is this number valid "1.1." = ' + is_number_valid("1.1."));
console.log('is this number valid "1.1.1" = ' + is_number_valid("1.1.1"));
console.log('is this number valid "1.1.1." = ' + is_number_valid("1.1.1."));
console.log('is this number valid "+1.1." = ' + is_number_valid("+1.1."));
console.log('is this number valid "+1.1" = ' + is_number_valid("+1.1"));
console.log('is this number valid "-1.1." = ' + is_number_valid("-1.1."));
console.log('is this number valid "-1.1" = ' + is_number_valid("-1.1"));
console.log('is this number valid "" = ' + is_number_valid(""));

const getNextState = (current_state, character) => {
    const state = {
        'START': 'START',
        'DECIMAL': 'DECIMAL',
        'AFTER_DECIMAL': 'AFTER_DECIMAL',
        'INTERGER': 'INTERGER',
        'UNKNOWN' : 'UNKNOWN'
    }

    if (current_state === state.START || current_state === state.INTERGER) {
        if (character === '.') {
            return state.DECIMAL
        } else if ( character > 0 && character < 9) {
            return state.INTERGER
        } else {
            return state.UNKNOWN
        }
    }

    if (current_state === state.DECIMAL){
        if (character > 0 && character < 9) {
            return state.INTERGER
        } else {
            return state.UNKNOWN
        }
    }

    if (current_state === state.AFTER_DECIMAL) {
        if (character === '.') {
            return state.DECIMAL
        } else if ( character > 0 && character < 9) {
            return state.INTERGER
        } else {
            return state.UNKNOWN
        }
    }

    return state.UNKNOWN
}
const isNumberValid = s => {
    if (s.length === 0) {
        return true
    }

    let currentState = null

    for (let i = 0; i < s.length; i++) {
        currentState = getNextState(currentState, s[i])
        if (currentState === 'UNKNOWN') {
            return false
        }
    }

    if (currentState === 'DECIMAL') {
        return false
    }

    return true
}