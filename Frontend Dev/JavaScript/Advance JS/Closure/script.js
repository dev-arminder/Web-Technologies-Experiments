// let myModule = (function() {
//   let authorName = "Arminder";
//   return {
//     sayHello: function() {
//       console.log(authorName);
//     }
//   };
// })();

// myModule.sayHello();
// console.log(myModule.authorName);

// Most Tricker Question
// let author = "Arminder Singh";
// function trickyClosure() {
//   let author = "Navdeep Singh";
//   return function() {
//     debugger;
//   };
// }

// const aTrickyFunction = trickyClosure();
// aTrickyFunction();

// Object Oritendted Basics
// const obj = {
//   name: "Arminder Singh"
// };

// console.log(obj.__proto__);
let animal = {
  eat: true
};

let rabbit = {
  jump: true
};

rabbit.__proto__ = animal;
