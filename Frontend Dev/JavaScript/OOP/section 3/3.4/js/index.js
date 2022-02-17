function Constructor1(x) {
  this.x = x;
}

function Constructor2() {
  this.y = 12;
}

Constructor1.prototype.f = function() {
  console.log(this);
};

Constructor1.prototype.__proto__ = new Constructor2();
Constructor1.prototype.__proto__.constructor = Constructor1;

const obj1 = new Constructor1(10);
const obj2 = new Constructor2(20);
