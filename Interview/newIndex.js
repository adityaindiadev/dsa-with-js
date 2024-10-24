const arr = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]

// put zero on right and on on left

// const one = []
// const zero = []


const resArray = [...arr.filter((item)=>item === 1), ...arr.filter((item)=>item === 0)]

console.log({resArray});
