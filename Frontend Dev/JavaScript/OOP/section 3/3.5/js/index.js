// class A {
//   constructor(x) {
//     this.x = x;
//   }
//   show() {
//     console.log(this.x);
//   }
// }

// class B extends A {
//   constructor(x) {
//     super();
//     this.y = 12;
//   }
//   show() {
//     super.show();
//     console.log(this.y);
//   }
// }

// const b = new B(10);
// console.log(b);

function A(x) {
  this.x = x;
}
A.prototype.show = function() {
  console.log(this.x);
};

A.prototype.anotheShow = function() {
  console.log(this.x);
};
function B() {
  A.call(this, 5);
  this.y = 12;
}
B.prototype.__proto__ = Object.assign({}, A.prototype);
B.prototype.show = function() {
  console.log(this.y);
};

let obj = new B();
