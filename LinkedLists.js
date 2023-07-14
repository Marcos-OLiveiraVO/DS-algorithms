class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    const node = new Node(element);

    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
    //add a element in to the final list
  }

  insert(position, element) {
    // add a element in to a especific position
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
    // remove a element from especific position
  }

  remove(element) {
    //remove a element
  }

  indexOf(element) {
    //return the position of element
  }

  isEmpty() {
    // return if the list is empty or not
  }

  size() {
    // return the size of list
  }

  toString() {
    let current = this.head;
    let string = " ";

    while (current) {
      string += current.element + " ";
      current = current.next;
    }

    return string;

    //return the string
  }

  print() {
    console.log(this.toString());
    // print the list
  }
}

const linkedList = new LinkedList();

linkedList.append("josh");
linkedList.append("jose");
linkedList.append("lucas");

// linkedList.removeAt(1);
linkedList.print();
