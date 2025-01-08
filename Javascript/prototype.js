Object.prototype.trueLength = function () {
    // Convert `this` to its primitive value
    const value = this.valueOf();

    if (typeof value === 'string') {
        // Trim the string and return its length
        return value.trim().length;
    }
    return null;
}

console.log("hi  ".trueLength()); // Output: 2

Object.defineProperty(String.prototype, 'trueLen', {
    get: function () {
        // Return the length of the trimmed string
        return this.trim().length;
    }
});

console.log("trueLen","hi  ".trueLen); // Output: 2

console.log([].trueLength());

const num = 2
console.log(num.trueLength());

