import { Stack } from "./stack.mjs"

let problemArray = [6, 8, 0, 1, 3]
// let problemArray = [4, 5, 2, 10, 8]

let nexGreaterElemSolutionArray = []

const myStack = new Stack()

myStack.push(problemArray.length - 1)
nexGreaterElemSolutionArray.push(-1)


for (let index = problemArray.length - 2; index >= 0; index--) {
    const element = problemArray[index];

    // console.log(element);

    console.log("less", "((problemArray[myStack.peak] < element))", problemArray[myStack.peak()], element, ((problemArray[myStack.peak()] < element)));

    while ((problemArray[myStack.peak()] < element) && (!myStack.isEmpty())) {
        console.log("while");
        myStack.pop()
    }

    if (myStack.isEmpty()) {
        console.log("if");

        nexGreaterElemSolutionArray.push(-1)
        myStack.push(index)

    } else {
        console.log("else");

        nexGreaterElemSolutionArray.push(problemArray[myStack.peak()])
        myStack.push(index)
    }

}

console.log(nexGreaterElemSolutionArray.reverse());