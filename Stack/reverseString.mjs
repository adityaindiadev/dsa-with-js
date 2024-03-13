import { Stack } from "./stack.mjs";

const myString = "CONST"

const revStringStack = new Stack()

for (let index = 0; index < myString.length; index++) {
    const element = myString.charAt(index);

    revStringStack.push(element)

}

let revMyString = ""

for (let index = 0; index < myString.length; index++) {
    // const element = myString.charAt(index);

    revMyString += revStringStack.pop()

}

console.log(revMyString);