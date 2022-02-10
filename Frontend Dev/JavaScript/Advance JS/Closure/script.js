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

// let animal = {
//   isWalking: false,
//   isEating: false,
//   makeWalk() {
//     this.isWalking = true;
//   },
//   startEating() {
//     this.isEating = true;
//   }
// };

// let rabbit = {
//   name: "Dear",
//   age: 4,
//   color: "Black",
//   __proto__: animal
// };

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
// for (let key in rabbit) {
//   if (rabbit.hasOwnProperty(key)) {
//     console.log(`This is Rabit's Property ${key}`);
//   } else {
//     console.log(`This is Inherited Property ${key}`);
//   }
// }
// console.log(Object.keys(rabbit));

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // This one found the food
// speedy.eat("apple");
// alert(speedy.stomach); // apple

// // This one also has it, why? fix please.
// alert(lazy.stomach); // apple

// let animal = {
//   eat: true
// };

// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype = animal;

// let rabbit = new Animal("kirat");
// console.log(rabbit);
// const pro = Function.prototype;
// console.log(Function.prototype);

// const author = "Arminder Sing";
// const stringPro = author.__proto__;
// author.__proto__.parent = "Jasvir";
// console.log(author);

// MODERN METHODS TO WORK WITH PROTOTYPE
// Object.create(prototype, [descriptors])
let emptyObj = Object.create(null);
console.log(Object.getPrototypeOf(emptyObj)); //Null

Object.setPrototypeOf(emptyObj, Array.prototype);
