// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }

// const kirat = new User("Kirat");
// console.log(kirat);

/*
 * Working With getter / setter in Classes
 */

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       alert("This Name is Too Short");
//     }
//     this._name = value;
//   }
// }

// let user = new User("Rohan");
// user.name = "Bilb";
// console.log(user);

//
// ** Compute Propeties
//
// const num = prompt("Enter Property Number");
// class UserFriendly {
//   ["property-" + num]() {
//     alert(`property-${num}`);
//   }
// }
// const user = new UserFriendly();
// console.log(user);

//
// ** Class Fields
//
// class User {
//   // Class Fields Property on Class
//   author = "Arminder";
//   constructor(name) {
//     this.name = "name";
//   }
// }

// const ammy = new User("Ammy");

// Working with Class Inheritance
// class Animal {
//   constructor(name) {
//     this.name = name;
//     this.speed = 0;
//   }
//   run(speed) {
//     this.speed = speed;
//     alert("Speed is " + this.speed);
//   }
//   stop() {
//     this.speed = 0;
//     alert(`${this.name} has been stopped`);
//   }
// }

// let animal = new Animal("Lio");

// class Rabbit extends Animal {
//   constructor() {
//     this.earlength = 0;
//   }
//   hide() {
//     alert(`${this.name} hides`);
//   }
//   stop() {
//     super.stop();
//     this.hide();
//   }
// }

// let rabbit = new Rabbit("White Rabbit");

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.stop(); // White Rabbit hides!

//
/*
 * Class static properties and methods
 */
// //
// class User {
//   static staticMethod() {
//     alert(this === User);
//   }
// }

// User.staticMethod(); // true

// EG - 1

// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//   static compareA(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }
// }

// Static Properties and Methods
// class Animal {
//   static planet = "Earth";

//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }

//   run(speed = 0) {
//     this.speed += speed;
//     alert(`${this.name} runs with speed ${this.speed}.`);
//   }

//   static compare(animalA, animalB) {
//     return animalA.speed - animalB.speed;
//   }
// }

// // Inherit from Animal
// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} hides!`);
//   }
// }

// let rabbits = [new Rabbit("White Rabbit", 10), new Rabbit("Black Rabbit", 5)];

// rabbits.sort(Rabbit.compare);

// rabbits[0].run(); // Black Rabbit runs with speed 5.

// alert(Rabbit.planet); // Earth

//  Public - accessible from all code
//  Private - accessible only in class
//  Protected - accessible inside class and it's dervied classes
// class CoffeeMachine {
//   _waterAmount = 0;

//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     }
//     this._waterAmount = value;
//   }
//   get waterAmount() {
//     return this._waterAmount;
//   }
//   constructor(power) {
//     this._power = power;
//   }
//   get power() {
//     return this._power;
//   }
// }
// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);

// alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

// coffeeMachine.power = 25; // Error (no setter)

// #Private
// class CoffeeMachine {
//   #waterLimit = 200;

//   #fixWaterAmount(value) {
//     if (value < 0) return 0;
//     if (value > this.#waterLimit) return this.#waterLimit;
//   }

//   setWaterAmount(value) {
//     this.#waterLimit = this.#fixWaterAmount(value);
//   }
// }

// let coffeeMachine = new CoffeeMachine();

// // can't access privates from outside of the class
// coffeeMachine.#fixWaterAmount(123); // Error
// coffeeMachine.#waterLimit = 1000; // Error
