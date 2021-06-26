// Initialize a Singly Linked List
class SinglyLinkedList {
	constructor() {
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

		class Main {
			constructor() {
				// TODO
			}
		}
	}
}

export default SinglyLinkedList;
