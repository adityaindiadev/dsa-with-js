var SinglyLinkedListNode = function (val) {
    this.val = val
    this.next = null
};

var MyLinkedList = function () {
    this.size = 0
    this.head = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1
    }

    let current = this.head
    for (let i = 0; i < index; i++) {
        current = current.next
    }

    return current.val


};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {

    this.size++
    const newNode = new SinglyLinkedListNode(val)
    if (!this.head) {
        this.head = newNode
        return
    }
    newNode.next = this.head
    this.head = newNode

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {

    if (!this.head) {
        this.addAtHead(val)
        return
    }

    const newNode = new SinglyLinkedListNode(val)
    let current = this.head
    while (current.next) {
        current = current.next
    }

    current.next = newNode
    this.size++

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    console.log("addAtIndex", { size: this.size, index, val });


    if (index < 0 || index > this.size) {
        console.log("Index is not valid");
        return
    }

    if (index === 0) {
        this.addAtHead(val)
        return
    }

    if (index === this.size) {
        this.addAtTail(val)
        return
    }

    const newNode = new SinglyLinkedListNode(val)
    let current = this.head
    for (let i = 0; i < index - 1; i++) {
        current = current.next
    }

    newNode.next = current.next
    current.next = newNode
    this.size++

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {

    if (index < 0 || index >= this.size) {
        console.log("Index is not valid");
        return -1
    }

    if (index === 0) {
        this.head = this.head.next
        this.size--
        return
    }


    let current = this.head
    for (let i = 0; i < index - 1; i++) {
        current = current.next
    }

    const val = current.next.val
    current.next = current.next.next
    this.size--
    return val

};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

["MyLinkedList", "addAtHead", "addAtHead", "addAtHead", "addAtIndex", "deleteAtIndex", "addAtHead", "addAtTail", "get", "addAtHead", "addAtIndex", "addAtHead"]
[[], [7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]]

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(7);
myLinkedList.addAtHead(2);
myLinkedList.addAtHead(1);
console.log(JSON.stringify(myLinkedList))
myLinkedList.addAtIndex(3, 0);
myLinkedList.deleteAtIndex(2);
myLinkedList.addAtHead(6);
myLinkedList.addAtTail(4);
myLinkedList.get(4);
myLinkedList.addAtHead(4);
myLinkedList.addAtIndex(5, 0);
myLinkedList.addAtHead(6);


