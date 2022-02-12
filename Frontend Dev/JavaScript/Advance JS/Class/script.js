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
class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(speed) {
    this.speed = speed;
    alert("Speed is " + this.speed);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} has been stopped`);
  }
}

let animal = new Animal("Lio");

class Rabbit extends Animal {
  constructor() {
    this.earlength = 0;
  }
  hide() {
    alert(`${this.name} hides`);
  }
  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit hides!
