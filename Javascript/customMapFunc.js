function customMapFunc(array = [],
    callBack = (item, index) => { item, id }) {

    let finalArray = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        finalArray.push(callBack(element, index))

    }

    return finalArray



}

let demoArr = [32, 3, 5, 2, 56]

// console.log(customMapFunc(demoArr, (item, index) => {

//     return { item, index };

// }))

function customMapFuncForPrototype(callBack = (item, index) => { item, id }) {

    let finalArray = []

    for (let index = 0; index < this.length; index++) {
        const element = this[index];

        finalArray.push(callBack(element, index))

    }

    return finalArray



}


Array.prototype.customMapFunc = customMapFuncForPrototype

console.log(demoArr.customMapFunc((item, index) => {

    return { item, index };

}))