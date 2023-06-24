// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     return this.items.pop();
//     //remove the last element from stack
//   }

//   peek() {
//     return this.items.length - 0;
//     // return the last element of stack
//   }

//   isEmpty() {
//     return this.items.length === 0;
//     // return if stack is empty
//   }

//   clear() {
//     this.items = [];
//     // clear all stack
//   }

//   size() {
//     return this.items.length;
//     //return the size of stack
//   }

//   print() {
//     console.log(this.items.toString());
//     //print the stack
//   }
// }

// const stack = new Stack();

// stack.push(5);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

// // stack.clear();
// // console.log(stack.size());
// // console.log(stack.isEmpty());
// // console.log(stack.peek());
// // stack.pop();
// // stack.print();

// algorithm that transform a dec number to binary number
// class DecToBinary {
//   constructor() {
//     this.restStack = [];
//     this.binaryString = "";
//   }

//   convert(decNumber) {
//     while (decNumber > 0) {
//       const rest = Math.floor(decNumber % 2);
//       this.restStack.push(rest);
//       decNumber = Math.floor(decNumber / 2);
//     }

//     while (this.restStack.length > 0) {
//       this.binaryString += this.restStack.pop().toString();
//     }

//     return this.binaryString;
//   }
// }

// const decToBinary = new DecToBinary();

// console.log(decToBinary.convert(25));
