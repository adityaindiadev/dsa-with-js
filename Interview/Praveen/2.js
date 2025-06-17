const input = [2, 3, 2, 3, 3, 3, 3, 3];

let mainResult = [];
// let nestedResult = [];
const resObj = {};

for (let index = 0; index < input.length; index++) {
  const element = input[index];
  // console.log(index, element)

  // resObj[element] ? console.log("hit") : console.log("miss")
  resObj[element] ? resObj[element]?.push(index) : (resObj[element] = [index]);
  // console.log("resObj", resObj)
}

// console.log(Object.keys(resObj));

const uniqueElemArr = Object.keys(resObj);

uniqueElemArr.forEach((elem, _) => {
  // if (resObj[elem].length === elem) {
  //     mainResult.push(resObj[elem])
  // } else {
  mainResult = [...mainResult, ...getChunck(elem, resObj[elem])];
  // }
});

function getChunck(chunkSize = 1, array) {
  console.log({ array });
  let nestedResult = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    console.log({ chunk });
    nestedResult.push(chunk);
  }
  return nestedResult;
}

console.log(mainResult);
