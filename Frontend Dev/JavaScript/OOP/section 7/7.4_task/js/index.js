/* Create a Box class that:
expects to get one argument in constructor
has method show() that when called calls console.log on the passed argument to the constructor method
has method perform() that:
expects one argument
returns undefined if the provided argument is not a function
when called with function this functions is called with argument passed to constructor method
*/
// class Box {
//   constructor(argument) {
//     this.argument = argument;
//   }

//   show() {
//     console.log(this.argument);
//   }
//   perform(argument) {
//     if (typeof argument !== "function") return undefined;
//     argument(this.argument);
//   }
// }

// const obj = new Box("Hi");
// obj.show();
// console.log(
//   obj.perform(function(name) {
//     alert(name);
//   })
// );

function Box(argument) {
  this.argument = argument;
}
Box.prototype.show = function() {
  console.log(this.argument);
};

Box.prototype.perform = function(argument) {
  if (typeof argument !== "function") return undefined;
  argument(this.argument);
};

const obj = new Box("i");
obj.show();
console.log(
  obj.perform(function(name) {
    alert(name);
  })
);
