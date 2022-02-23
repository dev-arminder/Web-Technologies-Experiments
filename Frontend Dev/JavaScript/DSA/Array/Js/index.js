function basic() {
  const arr = [1, 2, 3];
  console.log(arr[2]);

  let str = "string";
  console.log(str[0]);

  arr[0] = 5;
  str[0] = "a";
  str += "b";
}

// Insertion
function Insertion() {
  const arr = [1, 2, 3];
  arr.push(4);
  arr.pop();

  arr.unshift(0);
  arr.shift();

  arr.splice(1, 0, 1.5);
}
