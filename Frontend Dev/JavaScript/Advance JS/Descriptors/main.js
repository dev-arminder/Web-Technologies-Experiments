// "use strict";
// let obj = {
//   name: "Arminder Singh",
//   role: "Dev",
//   love: "Github"
// };
// // console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// Object.defineProperty(obj, "name", {
//   writable: false
// });

// obj.name = "I had changed it";

// console.log(obj);

// Getter / Setter
let user = {
  fname: "Arminder",
  lname: "Singh",
  get fullName() {
    return `${this.fname} ${this.lname}`;
  },
  set fullName(value) {
    // console.log(value.split(''))
    [this.fname, this.lname] = value.split(" ");
  }
};
console.log(user.fullName);
user.fullName = "Balbit Singh";
console.log(user.fullName);
