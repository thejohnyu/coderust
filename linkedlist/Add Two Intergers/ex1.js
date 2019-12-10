let add_integers = function(integer1, integer2) {
  let result = null;
  let last = null;

  while (integer1 || integer2) {
    let first = !integer1 ? 0 : integer1.data;
    let second = !integer2 ? 0 : integer2.data;
    let sum = first + second;
    let pNew = create_linked_list([sum]);
    console.log('pNew ===>', pNew)
    if (!result) {
      result = pNew;
    } else {
      last.next = pNew;
    }

    last = pNew;
    if (integer1) {
      integer1 = integer1.next;
    }

    if (integer2) {
      integer2 = integer2.next;
    }
  }

  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Add Integers");
console.log("---------------------------------------");

const create_linked_list = arr => {
  return arr.reduce((acc, cur) => {
    const node = {
      data: cur,
      next: acc
    };

    acc = node;
    return acc;
  }, null);
};

let first = create_linked_list([1, 2, 3]);
let second = create_linked_list([1, 2]);
console.log("first", first, "second", second);

console.log("Sum:");
let result = add_integers(first, second);
console.log("Result ===>", result);
