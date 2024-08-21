class SinglyLinkedListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
    }

    getSize() {
        console.log(this.size);

        return this.size
    }

    addToFront(data) {
        this.size++
        const newNode = new SinglyLinkedListNode(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }

    addToEnd(data) {
        if (!this.head) {
            this.addToFront(data)
            return
        }

        const newNode = new SinglyLinkedListNode(data)
        let current = this.head
        while (current.next) {
            current = current.next
        }

        current.next = newNode
        this.size++
    }

    addAtSpecificIndex(indexToAddData, data) {
        if (indexToAddData < 0 || indexToAddData >= this.size) {
            console.log("Index is not valid");
            return
        }

        if (indexToAddData === 0) {
            this.addToFront(data)
            return
        }

        // if (indexToAddData === this.size - 1) {
        //     this.addToEnd(data)
        //     return
        // }

        const newNode = new SinglyLinkedListNode(data)
        let current = this.head
        for (let index = 0; index < indexToAddData - 1; index++) {
            current = current.next
        }

        newNode.next = current.next
        current.next = newNode
        this.size++
    }

    deleteAtSpecificIndex(indexToDelete) {
        if (indexToDelete < 0 || indexToDelete >= this.size) {
            console.log("Index is not valid");
            return -1
        }

        if (indexToDelete === 0) {
            this.head = this.head.next
            this.size--
            return
        }


        let current = this.head
        for (let index = 0; index < indexToDelete - 1; index++) {
            current = current.next
        }

        const val = current.next.data
        current.next = current.next.next
        this.size--
        return val
    }

    getAtIndex(indexToGetData) {
        if (indexToGetData < 0 || indexToGetData >= this.size) {
            return -1
        }

        let current = this.head
        for (let index = 0; index < indexToGetData; index++) {
            current = current.next
        }

        return current.data

    }

    printLinkedList() {
        console.log('\n');
        let current = this.head
        while (current) {
            console.log(current.data);

            current = current.next
        }
    }

    reverseThisList() {

        let prev = null
        let current = this.head
        let next = current.next

        while (next != null) {

            current.next = prev
            prev = current
            current = next
            next = current.next

        }

        current.next = prev
        this.head = current

        return this.head

    }

}


const singlyLinkedList = new LinkedList()
singlyLinkedList.addToFront(1)
singlyLinkedList.addToFront(2)
singlyLinkedList.addToFront(3)
singlyLinkedList.addToFront(4)
singlyLinkedList.addToEnd(11)
singlyLinkedList.printLinkedList()
console.log(singlyLinkedList.reverseThisList());
console.log("\n")
singlyLinkedList.printLinkedList()

console.log("\n", singlyLinkedList.deleteAtSpecificIndex(2));
singlyLinkedList.printLinkedList()

// singlyLinkedList.addAtSpecificIndex(3,123)
// singlyLinkedList.printLinkedList()
// singlyLinkedList.addAtSpecificIndex(1,25)
// singlyLinkedList.printLinkedList()
// console.log(singlyLinkedList);
