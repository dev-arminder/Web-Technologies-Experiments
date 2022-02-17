/*
  Make a functionality to:
  create objects with name, surname, and generated id
  log the properties 
  add object to array with the max length of array set
*/

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.id = this.name.slice(0, 3) + this.surname.slice(0, 3);
//   }
//   // method tightly coupled wth the class data
//   print() {
//     console.log(this.name, this.surname, this.id);
//   }
// }

// class UserCollection {
//   constructor(limit) {
//     this.users = [];
//     this.limit = limit;
//   }
//   add(user) {
//     if(this.users.length < this.limit) this.users.push(user);
//   }
// }

// const adam = new User('Adam', 'Kovalsky');
// const userCollection = new UserCollection();
// userCollection.add(adam);

function User(name, surname) {
  this.name = name;
  this.surname = surname;
  this.id = this.name.slice(0, 3) + this.surname.slice(0, 3);
}
User.prototype.log = function() {
  console.log(`${this.name} - ${this.surname}`);
};

function UserCollection(limit) {
  this.arr = [];
  this.limit = limit;
  this.length = 0;
}
UserCollection.prototype.addUser = function(user) {
  if (this.length < this.limit) {
    this.arr.push(user);
    this.length++;
  }
};

const user = new User("Alex", "Random");
const userColl = new UserCollection(3);
userColl.addUser(user);
userColl.addUser(user);
userColl.addUser(user);
userColl.addUser(user);
