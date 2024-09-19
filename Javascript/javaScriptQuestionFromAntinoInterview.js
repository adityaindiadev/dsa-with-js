(function(a) {
    return (function () {
        console.log(a);
        a = 23;
    })()
}) (45);

let hero = {
    powerLevel: 99,
    getPower() {
        return this.powerLevel;
    }
}

console.log("----------------------------");

let getPower = hero.getPower;

let hero2 = { powerLevel: 42 };
console.log(getPower());
console.log(getPower.apply(hero2));

console.log("----------------------------");

const b = {
    name: "Vivek",
    f: function () {
        var self = this;
        console.log(this.name);
        (function () {
            console.log(this.name);
            console.log(this.name);
        })();
    }
}
b.f();
