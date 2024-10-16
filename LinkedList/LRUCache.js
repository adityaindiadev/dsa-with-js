// https://leetcode.com/problems/lru-cache/description/?envType=study-plan-v2&envId=top-interview-150

function LRUNode(key, val, prev, next) {
    this.key = (key === undefined ? null : key)
    this.val = (val === undefined ? 0 : val)
    this.prev = (prev === undefined ? null : prev)
    this.next = (next === undefined ? null : next)
};


/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map()
    this.capacity = capacity
    this.head = null
    this.tail = null
    // this.sizeOfLRUNode = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!(this.cache.get(key)))
        return -1

    // console.log("get", key, this.head)
    let node = this.cache.get(key)
    const val = node.val
    const prev = node.prev
    const next = node.next

    console.log({ node })
    // removeNode and connect others
    prev && (prev.next = next)
    next && (next.prev = prev)

    // insert at Start
    let temp = this.head
    this.head = node
    node.next = temp
    temp.prev = this.head
    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.size === this.capacity) {
        this.cache.delete(this.tail.key)
        console.log("this.cache.size", this.tail.key)
        // delete node
        let curr = this.tail.prev
        curr.next = null
        this.tail = curr

        // insert at Start
        let node = new LRUNode(key, value, null, null)
        let temp = this.head
        this.head = node
        node.next = temp
        temp.prev = this.head
        this.cache.set(key, this.head)
        return
    }
    if (this.cache.size === 0) {
        this.head = new LRUNode(key, value, null, null)
        this.tail = this.head
        this.cache.set(key, this.head)
        return
    }

    let node = new LRUNode(key, value, null, null)
    let temp = this.head
    this.head = node
    node.next = temp
    temp.prev = this.head
    this.cache.set(key, this.head)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */