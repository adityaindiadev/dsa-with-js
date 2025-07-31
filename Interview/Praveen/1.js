const input = [2, 3, 2, 3, 3, 3, 3, 3];

const mainResult = [];
let nestedResult = [];
let lastElem = null
for (let index = 0; index < input.length; index++) {
  const element = input[index];
  // console.log(index,{element});
  // console.log("nestedResult.length", nestedResult[nestedResult.length-1], lastElem);


  if (nestedResult.length === 0) {
    // console.log('nestedResult.length === 0');

    nestedResult.push(index);
    lastElem = element
    continue
  }

  if (element === lastElem) {
    // console.log('element === nestedResult');
    if (nestedResult.length === element) {
      mainResult.push(nestedResult);
      lastElem = element
      nestedResult = [index];
    } else {
      nestedResult.push(index);
    }
    continue
  } else {
    // console.log('else');

    mainResult.push(nestedResult);
    lastElem = element
    nestedResult = [index];
  }


}
// console.log({nestedResult});
if (nestedResult.length !== 0) {
  mainResult.push(nestedResult);
}
console.log({ mainResult });