class Queue {
  construtor(){
    this.storage = {};
    this.length = 0;
    this.headIndex= 0;
  }

  enqueue(value){
    this.storage[this.length] = value;
    this.length++;
  }

  dequeue(){
    const value = this.storage[this.headIndex];
    delete this.storage[this.headIndex]
    this.headIndex++
    return value;
  }

  size() {
    return this.length - this.headIndex
  }

  
}

const newQueue = new Queue();
console.log('starting @ queue ')
newQueue.enqueue('first');
console.log('newQueue', newQueue);
newQueue.dequeue();
console.log('final queue', newQueue);