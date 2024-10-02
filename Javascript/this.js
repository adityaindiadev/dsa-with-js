// "use strict"


// console.log(this);

// function ff(params) {
//     return this
// }

// console.log(ff());

// const hi = () => this

// console.log(hi());

function ff() {
    return 'ddd'
}

ff.prototype.callus = function () {
    return 'dd'
}

// const yo =  ff()
const yo =  new ff()

console.log(typeof yo);
// console.log(yo.callus());
