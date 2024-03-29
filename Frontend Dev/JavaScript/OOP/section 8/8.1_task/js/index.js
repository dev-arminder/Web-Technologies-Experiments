/*
1. Create a prototypal chain with constructor functions:
Product, ElectronicProduct and GroceryProduct
ElectronicProduct and GroceryProduct should 'inherit' from Product

Product should take as arguments name and brand. Those variables should be public (avaliable as object properties).
Product should instance objects having access to methods:
1. 'print' to log name and brand on the console
2. 'getCount' to log count of all products of the 'type that inherits' from Product (in our case we define two of such types: ElectronicProduct and GroceryProduct)
3. 'printCode' that will print the code in format typeCode#brand#name. typeCode depends on the constructor function (see below) brand and name on the instance.

Product constructor should not be invoked directly.

ElectronicProduct and GroceryProduct are constructors that takes 2 arguments: name and brand. 
Calling from the instance of ElectronicProduct method printCode() should pass typeCode as 'Electronic'
Calling from the instance of GroceryProduct method printCode() should pass typeCode as 'Grocery'

const galaxyWatch = new ElectronicProduct('galaxy watch', 'samsung');
const iPhone = new ElectronicProduct('iPhone', 'apple');
galaxyWatch.print(); // galaxy watch samsung
galaxyWatch.getCount(); // 2 
galaxyWatch.printCode(); // Electronic#samsung#galaxy watch

2. How is called the technique of having, in the prototypal chain, methods of the same name but working diffriently?
*/

function Product(name, brand) {
  if (this.constructor === Product)
    throw new TypeError("Product constructor cannot be invoked directly");
  this.name = name;
  this.brand = brand;
}
Product.prototype.print = function() {
  console.log(this.name, this.brand);
};
Product.prototype.getCount = function() {
  console.log(this.count);
};
Product.prototype.printCode = function() {
  console.log(`${this.typeCode}#${this.brand}#${this.name}`);
};
function ElectronicProduct(name, brand) {
  Product.call(this, name, brand);
  ElectronicProduct.prototype.count++;
}
ElectronicProduct.prototype.count = 0;
ElectronicProduct.prototype.typeCode = "Electronic";
ElectronicProduct.prototype.__proto__ = Product.prototype;

function GroceryProduct(name, brand) {
  Product.call(this, name, brand);
  GroceryProduct.prototype.count++;
}
GroceryProduct.prototype.count = 0;
GroceryProduct.prototype.typeCode = "Grocery";
GroceryProduct.prototype.__proto__ = Product.prototype;

const galaxyWatch = new ElectronicProduct("galaxy watch", "samsung");
const iPhone = new ElectronicProduct("iPhone", "apple");
galaxyWatch.print();
galaxyWatch.getCount();
galaxyWatch.printCode();
