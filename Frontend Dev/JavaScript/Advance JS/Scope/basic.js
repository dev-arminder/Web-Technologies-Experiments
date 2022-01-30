// console.log("start");
// var minName = "bar";
// function hello() {
//   var anotherName = "Singh";
// }
// hello();

//Leakage of Global Variable in non strict Mode
// var foo = "bar";
// function bar() {
//   var foo = "baz";
// }

// function baz(foo) {
//   foo = "bam";
//   bam = "yay";
// }
// bar();
// baz(foo);

// In strict mode above code with gave an error

// Lecutre - 3 Scope and Excution
// var foo = "bar";
// function bar() {
//   // Variable Shadowing
//   var foo = "baz";
//   function baz(foo) {
//     foo = "bam";
//     bam = "yay";
//   }
//   baz();
// }
// bar();
// console.log(foo);
// console.log(bam);
// baz();

// Shadowing in JS
// var foo = "bar";

// function bar() {
//   var foo = "barInsideBarFunction";
//   console.log(foo);
// }
// bar();

// let foo = "bar";

// function bar() {
//   let foo = "barInsideBarFunction";
//   console.log(foo);
// }
// bar();

// IIFE
// var foo = "bar";
// (function() {
//   var foo = "anotherFO";
//   console.log(foo);
// })();
// console.log(foo);

// {
//   var foo = "Hello";
//   let bar = "Hasl";
// }
// console.log(foo);

// if (true) {
//   var foo = "foo";
// }
// console.log(foo);

// if (true) {
//   let foo = "foo";
// }
// console.log(foo);

//Shallow Cloning
// let fName = "singh";

// let user = {
//   name: "Arminder",
//   age: 34,
//   "school name": "MSP",
//   [fName]: fName
// };

// let anotherUser = user;
// anotherUser.name = "anotherName";
// let anotherUser = {};

// for (let key in user) {
//   anotherUser[key] = user[key];
// }

//Second Way to Clone
// let anotherUser = { ...user };

// Third way
// let anotherUser = Object.assign({}, user);

// anotherUser.name = "anotherName";

//DEEP CLONING
const user = {
  userName: "Arminder",
  age: 22,
  school: {
    schoolName: "MSP",
    duration: 2,
    class: {
      standard: 12,
      section: "E",
      stream: "Science"
    }
  }
};
//Failed Version - 1
// function deepClone(dest, ref) {
//   for (let key in ref) {
//     if (typeof ref[key] === "object") {
//       dest[key] = {};
//       deepClone(dest[key], ref[key]);
//     }
//     dest[key] = ref[key];
//   }
// }

//Failed Version - 2

// function deepClone(dest, ref) {
//   Object.assign(dest, ref);
//   for (let key in ref) {
//     if (typeof ref[key] === "object") {
//       deepClone(dest[key], ref[key]);
//     }
//   }
// }

// let anotherUser = {};
// deepClone(anotherUser, user);
// anotherUser.school.class.section = "a";

// More Experiment With JS


