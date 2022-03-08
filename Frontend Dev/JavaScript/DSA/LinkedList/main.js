// Node - Individual Item in LinkedList
class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;

    this.previous = null;
  }
}

class LinkedList {
  constructor(iterable = [], ListNod = Node) {
    //   Head Pointer - First ELement
    this.head = null;
    // Tail Pointer - Last ELement
    this.tail = null;
    // Size of LinkedList
    this.size = 0;
    // NodeClass
    this.ListNod = ListNod;
  }
  //   Adds Element to Begining of LL - array.unshift
  //Runtime - O(n)
  addFirst(value) {
    //   Creating A New Node
    const newNode = new this.ListNod(value);
    // Pointing next of new Node to Null
    newNode.next = this.head;
    if (this.head) {
      //   If head exist already
      this.head.previous = newNode;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
    this.size += 1;

    return newNode;
  }

  addLast(value) {
    const newNode = new this.ListNod(value);
    //   Check is there is any Last Node
    if (this.tail) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    } else {
      // this.tail = newNode;
      this.head = newNode;
      this.tail = newNode;
    }

    this.size += 1;
    return newNode;
  }
}

const ll = new LinkedList();
ll.addFirst(5);
// 5 -> null
ll.addFirst(3);
//  3 <=> 5 <=> null
ll.addFirst(2);
//  2 <=> 3 <=> 5 <=> null
ll.addLast(1);
