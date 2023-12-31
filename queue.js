class Queue {
  constructor() {
    this.item = [];
  }

  enqueue(element) {
    this.item.push(element);
    // adiciona um novo item
  }

  dequeue() {
    return this.item.shift();
    //remove um item
  }

  front() {
    return this.item[0];
    //retorna o primeiro elemento da fila
  }

  isEmpty() {
    return this.item.length === 0;
    //verifica se a fila está vazia ou não
  }

  size() {
    return this.item.length;
    //verifica o tamanho da fila
  }

  print() {
    console.log(this.item.toString());
    // imprimi a fila no console
  }
}

// const queue = new Queue();

// queue.enqueue("carlos");
// queue.enqueue("joao");
// // queue.dequeue();
// // console.log(queue.front());
// console.log(queue.size());
// console.log(queue.isEmpty());

// // console.log(queue.print());

// class Node {
//   constructor(element, priority) {
//     this.element = element;
//     this.priority = priority;
//   }
// }

// class PriorityQueue {
//   constructor() {
//     this.items = [];
//   }

//   queue(element, priority) {
//     let added = false;
//     const newNode = new Node(element, priority);

//     for (let i = 0; i < this.items.length; i++) {
//       if (newNode.priority < this.items[i].priority) {
//         this.items.splice(i, 0, newNode);
//         added = true;
//         break;
//       }
//     }
//     if (!added) {
//       this.items.push(newNode);
//     }
//   }

//   dequeue() {
//     return this.items.shift();
//   }

//   print() {
//     for (let i = 0; i < this.items.length; i++) {
//       console.log(
//         `${this.items[i].element}, prioridade: ${this.items[i].priority}`
//       );
//     }
//   }
// }

// const pQueue = new PriorityQueue();

// pQueue.queue("lucas", 2);
// pQueue.print();

// function HotPotato(nameList, num) {
//   let queue = new Queue();

//   for (let i = 0; i < nameList.length; i++) {
//     queue.enqueue(nameList[i]);
//   }

//   let eliminated = "";

//   while (queue.size() > 1) {
//     for (let i = 0; i < num; i++) {
//       queue.enqueue(queue.dequeue());
//     }
//     eliminated = queue.dequeue();
//     console.log(`${eliminated} was eliminated`);
//   }
//   return queue.dequeue9;
// }

// class HotPotato {
//   constructor() {
//     this.queue = new Queue();
//   }

//   Game(nameList, num) {
//     for (let i = 0; i < nameList.length; i++) {
//       this.queue.enqueue(nameList[i]);
//     }

//     let eliminated = "";

//     while (this.queue.size() > 1) {
//       for (let i = 0; i < num; i++) {
//         this.queue.enqueue(this.queue.dequeue());
//       }
//       eliminated = this.queue.dequeue();
//       console.log(`${eliminated} was eliminated`);
//     }
//     return this.queue.dequeue();
//   }
// }

// const hotPotato = new HotPotato();

// const names = ["lucas", "barbara", "camel", "mary"];
// const winner = HotPotato.Game(names, 7);

// console.log(`the winner was ${winner}`);
