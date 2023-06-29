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

const queue = new Queue();

queue.enqueue("carlos");
queue.enqueue("joao");
// queue.dequeue();
// console.log(queue.front());
console.log(queue.size());
console.log(queue.isEmpty());

// console.log(queue.print());
