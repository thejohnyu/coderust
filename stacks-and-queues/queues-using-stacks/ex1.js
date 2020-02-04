class queue_using_stack {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(data) {
      this.stack1.push(data);
    }
    empty() {
      return (this.stack1.length === 0 && this.stack2.length === 0);
    }
    dequeue() {
      if (this.empty()) {
        throw "stack is empty";
      }
  
      if (this.stack2.length === 0) {
        while (this.stack1.length !== 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      return this.stack2.pop();
    }
  }
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Queue using Stacks");
  console.log("---------------------------------------");
  let qs = new queue_using_stack();
  qs.enqueue(1);
  qs.enqueue(2);
  console.log(qs.dequeue());
  qs.enqueue(3);
  console.log(qs.dequeue());
  qs.enqueue(4);
  qs.enqueue(5);
  console.log(qs.dequeue());
  console.log(qs.dequeue());
  console.log(qs.dequeue());
  qs.enqueue(1);
  qs.enqueue(2);
  console.log("++++++ Test Done Successfully ++++++");