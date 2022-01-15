console.log("start");
var minName = "bar";
function hello() {
  var anotherName = "Singh";
}
hello();

//Leakage of Global Variable in non strict Mode
// var foo = "bar";
// function bar() {
//   var foo = "baz";
// }

// function baz(foo) {
//   foo = "bam";
//   bam = "yay";
// }
// bar();
// baz(foo);

// In strict mode above code with gave an error
