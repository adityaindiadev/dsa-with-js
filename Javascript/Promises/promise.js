const pr =new Promise((resolve, reject) => {
    resolve('dd')
    console.log("fff");
    
})

pr.then((params) => {
    console.log(params);
    
})