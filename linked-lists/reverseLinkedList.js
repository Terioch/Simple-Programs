// Initialize a singly linked list and a list node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
  }
}

// Main logic
class Main {
  constructor() {
    console.log(this.reverseLinkedList([1, 2, 3, 4, 5, 6]));
  }

  // Reverse a linked list
  reverseLinkedList(nums) {
    let list = new LinkedList(nums[0]);
    let head = list.head;

    if (head == null) return head;

    // Create a singly linked list from the array of values
    for (let i = 1; i < nums.length; i++) {
      let current = head;
      current.next = new Node(nums[i]);
      current = current.next;
    }

    head = this.reversal(head);
    return head;
  }

  // Implement reversal
  reversal(head) {
    if (head.next == null) return head;

    let current = head;

    while (current.next != null) {
      let next = current.next;
      current.next = next.next;
      next.next = current;
      head = next;
    }

    return head;
  }
}

const main = new Main();