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

  insert(element, position) {
    if (position >= 0 && position <= this.length) {
      let node = new Node(element);
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    } else {
      return false;
    }

    // add a element in to a specific position
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
    // remove a element from specific position
  }

  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
    //remove a element
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (element) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
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
// linkedList.removeAt(0);
linkedList.print();
// console.log(linkedList.indexOf("josh"));
linkedList.insert("mary", 0);
linkedList.print();
console.log(linkedList.remove("jose"));
linkedList.print();
