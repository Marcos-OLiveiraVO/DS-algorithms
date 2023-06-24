class Stack {
  constructor() {
    this.item = [];
  }

  push(element) {
    this.item.push(element);
  }

  pop() {
    this.item.pop();

    //remove the last element from stack
  }

  peek() {
    this.item.peek();
    // return the last element of stack
  }

  isEmpty() {
    this.item.empty();

    // return if stack is empty
  }

  clear() {
    this.item.clear();
    // clear all stack
  }

  size() {
    this.item.size();
    //return the size of stack
  }

  print() {
    this.item.print;
    //print the stack
  }
}
