class stack_using_queue_2 {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
    swap_queues() {
      let temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
    }
  
    push(data) {
      if (this.queue1.length === 0) {
        this.queue1.push(data);
      } else {
        this.queue2.push(data);
        while (this.queue1.length !== 0) {
          this.queue2.push(this.queue1.shift());
        }
        this.swap_queues();
      }
    }
    isEmpty() {
      return this.queue1.length + this.queue2.length === 0;
    }
    pop() {
      if (this.isEmpty()) {
        throw "stack is empty";
      }
      return this.queue1.shift();
    }
  }
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Stack using Queues");
  console.log("---------------------------------------");
  let sq = new stack_using_queue_2();
  sq.push(1);
  sq.push(2);
  console.log(sq.pop());
  console.log(sq.pop());
  sq.push(1);
  sq.push(2);
  console.log("++++++ Test Done Successfully ++++++");