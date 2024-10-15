// https://leetcode.com/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-interview-150


//   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode()
    let sumList = dummy

    let curr1 = l1
    let curr2 = l2
    let carry = 0

    while (curr1 != null && curr2 != null) {
        sumList.next = new ListNode()
        sumList = sumList.next
        const sum = (curr1.val + curr2.val) + carry
        carry = Math.floor(sum / 10)
        sumList.val = sum % 10
        curr1 = curr1.next
        curr2 = curr2.next
    }

    while (curr1 != null) {
        sumList.next = new ListNode()
        sumList = sumList.next
        const sum = (curr1.val + carry)
        carry = Math.floor(sum / 10)
        sumList.val = sum % 10
        curr1 = curr1.next
    }

    while (curr2 != null) {
        sumList.next = new ListNode()
        sumList = sumList.next
        const sum = (curr2.val + carry)
        carry = Math.floor(sum / 10)
        sumList.val = sum % 10
        curr2 = curr2.next
    }

    if (carry > 0) {
        sumList.next = new ListNode()
        sumList = sumList.next
        sumList.val = carry
    }
    // console.log({sumList})
    return dummy.next
};