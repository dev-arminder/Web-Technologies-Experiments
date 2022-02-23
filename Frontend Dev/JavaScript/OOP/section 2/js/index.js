// const a = true // boolean
// const b = null // null
// const c = undefined // undefined
// const d = 4 // number
// const e = 'hello' // string
// const f = Symbol('symbol description') // symbol

// const g = {
//   key: 'value'
// }

// // string String
// // boolean Boolean
// // number Number
// // symbol Symbol

// class A {
//   constructor() {
//     this.x = 12;
//   }
// }
// class B extends A {
//   m(){}
// }
// const instance = new B();
// instance.y = 12;
// delete instance.x;
// console.log(instance instanceof A);
// instance.m && instance.m();

// class PowerArr extends Array {
//   isEmpty() {
//     return this.length === 0;
//   }
// }

// let arr = new PowerArr(1, 2, 5, 6);
// let filteredArr = arr.filter(item => item >= 10);
// alert(filteredArr); // 10, 50

// class Rabit {
//   constructor(name) {
//     this.name = name;
//   }
//   hide() {
//     console.log(`${this.name} hides`);
//   }
// }

// let rabbit = new Rabit("Smush");
// console.log(rabbit instanceof Rabit);
// console.log(rabbit instanceof Object);

// MIXINS.....................
// let sayMixin = {
//   sayHi() {
//     alert(`hello say my name ${this.name}`);
//   },
//   sayBye() {
//     alert(`Hello Bye from ${this.name}`);
//   }
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(User.prototype, sayMixin);

// const user = new User("Bagga");

// Experiments With super
// let parentObj = {
//   name: "parentObj",
//   sayMyName() {
//     console.log(this.name);
//   }
// };

// let obj = {
//   __proto__: parentObj,
//   name: "obj",
//   sayMyName() {
//     console.log(this.name);
//     // console.log(super)
//   }
// };
// function ParentObj() {
//   this.name = "parent Object";
// }

// ParentObj.prototype.sayMyName = function() {
//   console.log(this.name);
// };

// function Obj() {
//   this.name = "Object";
// }
// Obj.prototype.__protp__ = ParentObj.prototype
// Obj.prototype.sayMyName = function() {
//   console.log(this.name);
//   console.log(super)
// };

let eventMixin = {
  trigger(name) {},
  on(name, handler) {},
  off(name, handler) {}
};

class User {
  constructor() {}
}
Object.assign(User.prototype, eventMixin);

let user = new User();
user.on("login", function handleUserLogin() {
  alert("I had handled that");
});
