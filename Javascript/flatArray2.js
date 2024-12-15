function flat(sourceArr = []) {
    let arr = []

    sourceArr.forEach((item,_)=>{
        if (Array.isArray(item)) {
           let res= flat(item)
            arr = [...arr, ...res]
        }
       else arr.push(item)
    })

    return arr
    
}