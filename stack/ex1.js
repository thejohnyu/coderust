class Stack {
  constructor(){
    this.storage = {};
    this.length = 0;
  }

  push(value){
    // this will push the value inside storage
    // this will increate length by 1
    this.storage[this.length] = value;
    this.length++;
  }

  pop(){
    const value = this.storage[this.length - 1];
    this.storage[this.length - 1] = undefined;
    this.length--;
    return value;
  }
}

const newStack = new Stack();

console.log('starting');
console.log('newStack ==>', newStack);
newStack.push('first');
console.log('new stack after ==>', newStack)
newStack.push('second');
console.log('2nd ==>', newStack);
console.log('pop')

console.log(newStack.pop())
console.log('final stack ==>', newStack)
