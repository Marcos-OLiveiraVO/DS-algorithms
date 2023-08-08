class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLL {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append(element) {
    let node = new Node(element);
    let current;

    if (this.head === null) {
      node.next = current;
      this.head = node;
      this.tail = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = node;
    }
    this.length++;
  }

  insert(element, position) {
    if (position >= 0 && position < this.length) {
      let node = new Node(element);
      let current = node;
      let previous;
      let index = 0;

      if (position === 0) {
        if (!this.head) {
          this.head = current;
          this.tail = current;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.next = node;
        node.prev = current;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(position) {}

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (element) {
      if (element === current.element) {
        return index;
      } else {
        index++;
        current = current.next;
      }
    }
    return -1;
  }

  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  toString() {
    let current = this.head;
    let string = " ";

    while (current) {
      string += current.element + " ";
      current = current.next;
    }
    return string;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    console.log(this.toString());
  }
}

const doubleLL = new DoubleLL();
doubleLL.append("lucas");
doubleLL.append("mary");
doubleLL.append("josh");
doubleLL.print();
