(function(a) {
    return (function () {
        console.log(a);
        a = 23;
    })()
}) (45);



console.log("----------------------------");
let hero = {
    powerLevel: 99,
    getPower() {
        return this.powerLevel;
    }
}

let getPower = hero.getPower;

let hero2 = { powerLevel: 42 };
console.log(getPower());
console.log(getPower.apply(hero2));

console.log("----------------------------");

const b = {
    name: "Vivek",
    f: function () {
        let self = this;
        console.log(this.name);
        (function () {
            console.log(this.name);
            console.log(self.name);
        })();
    }
}
b.f();
