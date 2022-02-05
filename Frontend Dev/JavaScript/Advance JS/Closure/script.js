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
// let animal = {
//   eat: true
// };

// let rabbit = {
//   jump: true
// };

// rabbit.__proto__ = animal;

// Simple Setting up Property
// rabbit.eat = true;

let animal = {
  isWalking: false,
  isEating: false,
  makeWalk() {
    this.isWalking = true;
  },
  startEating() {
    this.isEating = true;
  }
};

let rabbit = {
  __proto__: animal
};

// let cat = {
//   __proto__: animal
// };

// console.log(animal);
// console.log(rabbit);
// console.log(cat);

// rabbit.startEating();
// console.log(animal);
// console.log(rabbit);
// console.log(cat);

// cat.makeWalk();
// console.log(animal);
// console.log(rabbit);
// console.log(cat);

// Problem with for...in loop
for (let key in rabbit) {
  console.log(key);
}
console.log(Object.keys(rabbit));
