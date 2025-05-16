// input: a.b.c.d.e
// output: { a: { b: { c: { d: e } } } }

const strForObj = "a.b.c.d.e";

function convertUsingArray(strForObj) {
  const strForObjArr = strForObj.split(".");
  let finalRes = strForObjArr.reduceRight((acc, next) => {
    return { [next]: acc };
  });
  return finalRes;
}

console.log(JSON.stringify(convertUsingArray(strForObj)));

function convertUsingString(strForObj = "") {
  let acc = strForObj[strForObj.length - 1];
  for (let index = strForObj.length - 2; index >= 0; index--) {
    const next = strForObj[index];
    if (next === ".") {
      continue;
    }
    acc = { [next]: acc };
  }
  return acc;
}
console.log(JSON.stringify(convertUsingString(strForObj)));
