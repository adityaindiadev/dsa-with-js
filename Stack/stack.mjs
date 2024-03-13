// let arr = [2, 3, 4, 5]


// function rec(arr = [], index, elementToAdd) {

//     if (arr.length == index) {

//         arr[index] = elementToAdd
//         console.log("return");
//         return
//     }
//     console.log("elem: ", arr[index]);

//     const copyElementToAdd = arr[index]

//     arr[index] = elementToAdd

//     rec(arr, index + 1, copyElementToAdd)



// }

// rec(arr, 0, 1)

// console.log(arr);



export class Stack {

    #stackArr = []

    constructor(stackArr = []) {
        this.#stackArr = stackArr
    }


    #isStackEmpty() {

        return this.#stackArr.length === 0

    }

    push(elem) {

        this.#stackArr.push(elem)
        // this.printElements("push")

    }

    pop() {

        if (this.#isStackEmpty()) {

            console.log("Stack is empty!");

            return
        }

        this.printElements("pop")
        return this.#stackArr.pop()


    }

    peak() {
        if (this.#isStackEmpty()) {

            console.log("Stack is empty!");

            this.printElements("peak")

            return
        }
        console.log("Peak Element is: ", this.#stackArr[this.#stackArr.length - 1]);

        this.printElements("peak")


        return this.#stackArr[this.#stackArr.length - 1]
    }

    #addElementAtTheBottomOfTheStack(arr = [], index, elementToAdd) {

        if (arr.length == index) {

            arr[index] = elementToAdd
            console.log("return");
            return
        }
        console.log("elem: ", arr[index]);

        const copyElementToAdd = arr[index]

        arr[index] = elementToAdd

        this.#addElementAtTheBottomOfTheStack(arr, index + 1, copyElementToAdd)



    }

    addElementAtTheBottom(elem) {

        this.#addElementAtTheBottomOfTheStack(this.#stackArr, 0, elem)
        this.printElements("addElementAtTheBottom")
    }

    #printElementsRecursively(arr = [], index, printStackString = " ]") {

        let copyPrintStackString = printStackString

        if (arr.length == index) {
            copyPrintStackString = `[ ${copyPrintStackString}`
            console.log("printElementsRecursively return");
            return copyPrintStackString
        }

        copyPrintStackString = ` ${arr[index]},${copyPrintStackString}`

        return this.#printElementsRecursively(arr, index + 1, copyPrintStackString)



    }

    printElements(msg = "") {

        msg.length !== 0 ? msg = msg + `, ` : null

        // const stackString = this.#printElementsRecursively(this.#stackArr, 0)

        console.log(msg + ` Stack Elements are: `, this.#stackArr);

    }

     #reverseStack(arr=[], index) {

        console.log("index: ", index)
    
        if (index === arr.length) {
    
            console.log("return")
            
            return
        }
    
        this.#reverseStack(arr, index+1)
    
        const addIndex = (arr.length-1) - index
    
        const tempElem = arr[addIndex]
    
        if (index < addIndex) {
            return
        }
    
        console.log({index, addIndex, tempElem, arr})
    
        arr[addIndex] = arr[index]
    
        arr[index] = tempElem
    
        console.log("After Swap: ", arr)
    
        
        
    }

    reverseStack(){
        this.#reverseStack(this.#stackArr, 0)

        this.printElements("reverseStack")
    }


    #reverseStackOptimized(arr=[], index) {

        console.log("index: ", index)
    
        const addIndex = (arr.length-1) - index
    
        if (index > addIndex) {
            return
        }
    
        if (index === arr.length) {
    
            console.log("return")
            
            return
        }
    
        
    
        const tempElem = arr[addIndex]
    
    
        console.log({index, addIndex, tempElem, arr})
    
        arr[addIndex] = arr[index]
    
        arr[index] = tempElem
    
        console.log("After Swap: ", arr)
    
        this.#reverseStackOptimized(arr, index+1)
    
        
        
    }

    reverseStackOptimized(){
        this.#reverseStackOptimized(this.#stackArr, 0)
        this.printElements("reverseStackOptimized")
    }

}








