const a = { x: 1 };
const b = { y: 2 };
const c = { z: 3 };

// Object.setPrototypeOf(a, b);
// Object.setPrototypeOf(b, c);

a.__proto__ = b;
b.__proto__ = c;

console.log(a);
console.log(b);
