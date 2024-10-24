const promise1 = new Promise((resolve,reject)=>{
    resolve("It is Resolved")
}) 


promise1.then((res)=>{
    console.log(res);
    
})


await promise1

