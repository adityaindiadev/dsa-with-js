// Flatten an array const arr = [1, [2, [3, [4]]]];

const res = []

function flatArr(val = [1, [2, [3, [4]]]]){
    if(Array.isArray(val)){
        val.forEach((item,_)=>{
            flatArr(item)
        })
    }else{
        res.push(val)
    }
}


