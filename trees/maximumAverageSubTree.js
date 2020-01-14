class Tree {
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }
}

const node = new Tree(20, [new Tree(12), new Tree(18)])