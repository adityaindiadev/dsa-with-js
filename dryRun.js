// Define an object
let myObject = {
    value: 0,
    increment: function(amount) {
      this.value += amount;
      return this; // Return the object itself for chaining
    },
    double: function() {
      this.value *= 2;
      return this; // Return the object itself for chaining
    },
    display: function() {
      console.log(this.value);
      return this; // Return the object itself for chaining
    }
  };
  
  // Chain multiple method calls
  myObject.increment(5).double().display(); // Output: 10
  