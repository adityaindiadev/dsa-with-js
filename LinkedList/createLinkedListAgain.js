
class Node {
    constructor(data, next) {
        this.data = data
        this.next = next ? next : null
    }
}

// function Node(data, next) {
//     this.data = data
//     this.next = next ? next : null
// }

let head = new Node(1)
const n1 = new Node(2, head)
head = n1
const n2 = new Node(3, head)
head = n2
const n3 = new Node(4, head)
head = n3
const n4 = new Node(5, head)
head = n4

// Traverse LinkedList

// let copy = head

// while (copy != null) {
//     console.log(copy.data);
//     copy = copy.next
// }

// Reverse Code

let linkedList = head
let nextNode = linkedList.next
linkedList.next = null

while (nextNode) {
    const tempNode = nextNode.next
    console.log({ tempNode });
    // linkedList.next = null
    nextNode.next = linkedList
    // linkedList.next = null
    linkedList = nextNode
    nextNode = tempNode
    console.log({ nextNode,linkedList })
    console.log('---------------------------------')
}


// 2 -> 2 -> 3

// ln=2   nx=1   tp=null

console.log("linkedList", JSON.stringify(linkedList));


