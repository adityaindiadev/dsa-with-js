// 2)Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
// 	Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

async function sum() {
    
    const num1 = await promise1
    const num2 = await promise2

    console.log({num1,num2});

    return new Promise(resolve => resolve(num1+num2))
    
}

sum().then((val)=>{
    console.log({val});
})