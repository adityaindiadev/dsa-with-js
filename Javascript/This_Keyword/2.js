const person = {
  name: "Aditya",
  greet: function () {
    function inner() {
      console.log(this.name);
    }
    inner.call(this);
  },
};

person.greet();
