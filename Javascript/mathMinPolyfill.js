function myMin(...args) {
    if (args.length == 0)
        return Infinity

    let min = Infinity

    args.forEach((item) => {
        if (item < min) {
            min = item
        }
    })

    return min
}