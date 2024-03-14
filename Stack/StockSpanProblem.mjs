import { Stack } from "./stack.mjs";

// const array = [100, 80, 60, 70]
// const array = [100, 80, 60, 70, 60, 85, 100]
const array = [100, 90, 95, 85, 80, 110, 105, 115, 120, 100, 95, 105, 110, 125, 130, 115, 120, 110]

const StockSpanArray = []

const StockSpanStack = new Stack([])

StockSpanStack.push(0)
StockSpanArray.push(1)

function pushIntoStockSpanArray(elem) {
    console.log("StockSpanArray", StockSpanArray, elem);
    StockSpanArray.push(elem)


}

for (let index = 1; index < array.length; index++) {
    const element = array[index];
    const stackElement = array[StockSpanStack.peak()]

    if (stackElement > element) {

        console.log("stackElement > element", { stackElement, element });

        const span = index - StockSpanStack.peak()
        pushIntoStockSpanArray(span)
        StockSpanStack.push(index)


    }

    else {
        let stackElement = array[StockSpanStack.peak()]

        console.log("else", { stackElement, element }, ((stackElement <= element) && (StockSpanStack.length() > 0)), StockSpanStack.length());

        while ((array[StockSpanStack.peak()] <= element) && (StockSpanStack.length() > 0)) {

            StockSpanStack.pop()
            

            // if (StockSpanStack.length() == 0) {
            //     const span = index + 1
            //     pushIntoStockSpanArray(span)
            //     StockSpanStack.push(index)
            //     console.log("break");
            //     break;
            // }

            console.log("exitArray");

        }

        if (StockSpanStack.length() != 0) {

            const span = index - StockSpanStack.peak()
            pushIntoStockSpanArray(span)
            StockSpanStack.push(index)

        }

        else if (StockSpanStack.length() == 0) {
            const span = index + 1
            pushIntoStockSpanArray(span)
            StockSpanStack.push(index)
            // console.log("break");
        }

    }

}

console.log("StockSpanArray: ", StockSpanArray);