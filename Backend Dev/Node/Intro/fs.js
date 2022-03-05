const fs = require("fs");
const path = require("path");
const file = "./test.txt";
// fs.open("./test.txt", "r", (err, fd) => {
//   if (err) {
//     console.log("Erro");
//     console.log(err);
//     return;
//   }
//   console.log(fd);
// });
// fs.stat("./test.txt", "r", (err, stat) => {
//   if (err) {
//     console.log("Erro");
//     console.log(err);
//     return;
//   }
//   console.log(stat.isDirectory());
// });

// console.log(path.dirname(file));
// console.log(path.extname(file));
// console.log(path.basename(file));

// Read a FIle
// fs.readFile(file, "utf8", (err, data) => {
//   if (err) {
//     console.log("Error");
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// try {
//   const data = fs.readFileSync(file, "utf-8");
//   console.log(data);
// } catch (err) {
//   console.log("Error");
//   console.log(err);
// }

// console.log("File Read");
// Write A File
const content = "Written with Node.js";
fs.writeFile(file, content, { flag: "a+" }, err => {
  if (err) {
    console.log(`Error - ${err}`);
    return;
  }
  console.log("Chek ot File");
});
