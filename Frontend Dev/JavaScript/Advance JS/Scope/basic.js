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

if (true) {
  let foo = "foo";
}
console.log(foo);
