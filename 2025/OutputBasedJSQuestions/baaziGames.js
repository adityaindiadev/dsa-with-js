// 1
console.log(1);

const promise1 = new Promise((resolve, reject) => {
    console.log(2);
})

console.log(3);

// 2
const promise2 = new Promise((resolve, reject) => {
    console.log(4);
    resolve(5)
})

promise2.then((val)=>{
    console.log(val);
    return val+1
}).then((val2)=>{
    console.log(val2);
    throw new Error("Just an Error");
}).catch((reason)=>{
    console.log(reason);
})

