class Product {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }
  print() {
    console.log(this.name, this.brand);
  }
  getCount() {
    console.log(this.__proto__.constructor.count);
  }
  printCode() {}
}

class ElectronicProduct extends Product {
  static count = 0;
  constructor(name, brand) {
    super(name, brand);
    ElectronicProduct.count++;
  }
}

class GroceryProduct extends Product {
  static count = 0;
  constructor(name, brand) {
    super(name, brand);
    GroceryProduct.count++;
  }
}
const galaxyWatch = new ElectronicProduct("galaxy watch", "samsung");
const iPhone = new ElectronicProduct("iPhone", "apple");
const galaxssyWatch = new ElectronicProduct("galaxy watch", "samsung");
const iPshone = new ElectronicProduct("iPhone", "apple");
galaxyWatch.print();
galaxyWatch.getCount();
// galaxyWatch.printCode();
