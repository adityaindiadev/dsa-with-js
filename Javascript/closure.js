function add(arg) {
    return function (moreArg) {
        if(moreArg)
            return add(arg+moreArg)
        else 
            return arg
    }
}

add(1)()
console.log(add(1)(2)(3)());

