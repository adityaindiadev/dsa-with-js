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

    addToSpecificIndex(indexToAddData, data) {
        if (indexToAddData < 0 || indexToAddData >= this.size) {
            console.log("Index is not valid");
            return
        }

        if (indexToAddData === 0) {
            this.addToFront(data)
            return
        }
        
        if (indexToAddData === this.size-1) {
            this.addToEnd(data)
            return
        }

        const newNode = new SinglyLinkedListNode(data)
        let current = this.head
        for (let index = 0; index < indexToAddData-1; index++) {
            current = current.next
        }

        newNode.next = current.next
        current.next = newNode
        this.size++
    }

    printLinkedList(){
        console.log('\n');
        let current = this.head
        while (current) {
            console.log(current.data);
            
            current = current.next
        }
    }

}


const singlyLinkedList = new LinkedList()
singlyLinkedList.addToFront(1)
singlyLinkedList.addToFront(2)
singlyLinkedList.addToFront(3)
singlyLinkedList.addToFront(4)
singlyLinkedList.addToEnd(11)
// singlyLinkedList.addToSpecificIndex(2,)
// singlyLinkedList.getSize()
singlyLinkedList.printLinkedList()
singlyLinkedList.addToSpecificIndex(3,123)
singlyLinkedList.printLinkedList()
singlyLinkedList.addToSpecificIndex(1,25)
singlyLinkedList.printLinkedList()
// console.log(singlyLinkedList);
