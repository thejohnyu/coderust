class stack_using_queue {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(data) {
      this.queue1.push(data);
    }
  
    isEmpty() {
      return ((this.queue1.length + this.queue2.length) === 0);
    }
  
  
    swap_queues() {
      let temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
    }
  
    pop() {
      if (this.isEmpty()) {
        throw "stack is empty";
      }
  
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      let value = this.queue1.shift();
  
      this.swap_queues();
  
      return value;
    }
  }
  
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Stack using Queues");
  console.log("---------------------------------------");
  let sq = new stack_using_queue();
  sq.push(1);
  sq.push(2);
  console.log(sq.pop());
  console.log(sq.pop());
  sq.push(1);
  sq.push(2);
  console.log("++++++ Test Done Successfully ++++++");