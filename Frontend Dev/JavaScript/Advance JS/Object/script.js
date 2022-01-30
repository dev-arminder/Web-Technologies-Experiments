// console.log(this);
// let user = {
//   name: "Kavya",
//   age: "21",
//   sayHi() {
//     console.log(this);
//     alert(this.name);
//   }
// };

// user.sayHi();

// Task Question
// let calculator = {
//   read() {
//     const numA = parseInt(prompt("Enter A Number"));
//     const numB = parseInt(prompt("Enter Another Number"));
//     this.numA = numA;
//     this.numB = numB;
//   },
//   sum() {
//     return this.numA + this.numB;
//   },
//   mul() {
//     return this.numA * this.numB;
//   }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() {
//     // shows the current step
//     alert(this.step);
//   }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() {
//     // shows the current step
//     alert(this.step);
//     return this;
//   }
// };

// ladder
//   .up()
//   .up()
//   .down()
//   .showStep()
//   .down()
//   .showStep(); // shows 1 then 0

// Calculator Construcutor Function
// function Calculator() {
//   this.read = function() {
//     const numA = parseInt(prompt("Enter A Number"));
//     const numB = parseInt(prompt("Enter Another Number"));
//     this.numA = numA;
//     this.numB = numB;
//   };
//   this.sum = function() {
//     return this.numA + this.numB;
//   };
//   this.mul = function() {
//     return this.numA * this.numB;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// const user = {
//   name: "Kyle"
// };
// function A() {
//   return user;
// }
// function B() {
//   return user;
// }

// let a = new A();
// let b = new B();

// alert(a == b); // true
