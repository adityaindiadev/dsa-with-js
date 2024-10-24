// https://leetcode.com/problems/remove-linked-list-elements/

function removeElements(head, val) {
    let dummy = { next: head };  // Dummy node to simplify edge cases
    let current = head;
    let prev = dummy;
    
    while (current !== null) {
        if (current.val === val) {
            // Skip the node by adjusting the previous node's next pointer
            prev.next = current.next;
        } else {
            // Move the previous pointer forward
            prev = current;
        }
        // Move the current pointer forward
        current = current.next;
    }
    
    return dummy.next;  // Return the new head (may have changed if the original head was removed)
}


// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = { next: null };
    let current = dummy;
    for (let val of arr) {
        current.next = { val: val, next: null };
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print the linked list as an array
function printLinkedList(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test case
let head = createLinkedList([1, 2, 6, 3, 4, 5, 6]);
console.log(printLinkedList(removeElements(head, 6)));  // Output: [1, 2, 3, 4, 5]
