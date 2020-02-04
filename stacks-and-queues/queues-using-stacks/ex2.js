class queue_using_stack_2 {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(data) {
  
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
      this.stack1.push(data);
  
      while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
      }
    }
    empty() {
      return (this.stack1.length === 0 && this.stack2.length === 0);
    }
    dequeue() {
      if (this.empty()) {
        throw "stack is empty";
      }
      return this.stack1.pop();
    }
  }
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Queue using Stacks");
  console.log("---------------------------------------");
  let qs = new queue_using_stack_2();
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