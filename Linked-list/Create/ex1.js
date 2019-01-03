/*
  A linked list is an ordered, linear structure, similar to an array.
  Instead of items being placed at indices, however, they are connected through a chain
  of references, with each item containing a reference to the next item. There are benefits
  to using a linked list over an array, and the benefits for using an array over a linked
  list. The two differ in the amount of memory they use and the speed of various tasks
  related to accessing, adding, and removing data.

  const list = {
    head: {
        value: 12
        next: {
            value: 99
            next: {
                value: 37
                next: null
            }
        }
    }
  };

  This is refered to as  singly-linked because each item has only a one-way
  link to its next item. Each link in the chain is called a node.
  Each node is just a plain old JavaScript object.
  
  A linked list, as you can see, is nothing more than objects nested deeply inside of each other.
  The next property of each node object in the list is a reference to the next node object.
*/

class LinkedList{
  constructor(value){
    this.head =  null;
    this.length = 0;
    this.addToHead(value);
  }

  addToHead(value) {
    // standard way of adding node to the head.
    // 1. create "new Node"
    // 2. attach the new Node with the head. This step is known as the "chaining part"
    // 3. Now each node is linked together, we finally reassigned the head to the new Node.
    const newNode = { value }
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    return this;
  }
};
const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third');
console.log(list);