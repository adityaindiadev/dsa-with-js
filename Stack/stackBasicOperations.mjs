import { Stack } from "./stack.mjs"


const myStack = new Stack([2, 3, 4, 5])

myStack.addElementAtTheBottom(1)
myStack.pop()
myStack.push(6)
myStack.peak()
myStack.printElements()