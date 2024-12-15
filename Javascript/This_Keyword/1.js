const calc = {
    total: 0,
    add(num) {
        this.total += num
        return this
    },
    multiply(num) {
        this.total *= num
        return this
    },
    subtract(num) {
        this.total -= num
        return this
    },
}


const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total);
