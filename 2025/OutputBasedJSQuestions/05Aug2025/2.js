variable = 10;
(() => {
  foo = 100;
  console.log(variable);
  var foo = 100;

  variable = 20;
  console.log(variable);
})();

console.log(foo);
console.log(variable);

var variable = 30;

// - [ ] Find intersection of two array const a = [1, 2, 3, 4];const b = [3, 4, 5, 6]; output: [3,4]


function findIntersection(arr1=[1, 2, 3, 4],arr2=[3,3, 4, 5, 6]){
    const res = []
    for(let index1 = 0;index1<arr1.length;index1++){
        const elem = arr1[index1]
        for(let index2 = 0;index2<arr2.length;index2++){
        if(elem == arr2[index2])
        res.push(elem)
        }
        
    }
   console.log(res)
}

findIntersection()