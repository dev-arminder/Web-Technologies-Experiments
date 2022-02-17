class A {
  constructor(name) {
    this.name = name;
  }
  sayMyName() {
    alert(this.name);
  }
}

class B {
  constructor(name) {
    this.name = name;
  }
  sayMyName() {
    alert(this.name);
  }
}

class C {
  constructor(name) {
    this.name = name;
  }
  sayMyName() {
    alert(this.name);
  }
}

class D {
  constructor(name) {
    this.a = new A("a");
    this.b = new B("b");
    this.c = new C("c");
    this.name = name;
  }
}

let composedClass = new D("d");
