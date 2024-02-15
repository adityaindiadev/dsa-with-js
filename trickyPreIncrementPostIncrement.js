let i = 1;

(i++) + (i--) - (++i) + (i--) - (i++) - (i--);
console.log(i);

i = (i++) + (i--) - (++i) + (i--) - (i++) - (i--);

// i = 1 + 2 - 2 + 2 - 1 - 2
console.log(i);