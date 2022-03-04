// console.log(process.env);
const obj = {};
function turnStringIntroObj(str) {
  const equal2Idx = str.indexOf("=");
  const key = str.slice(0, equal2Idx);
  const value = str.slice(equal2Idx + 1);
  obj[key] = value;
}

console.log(process.argv);
turnStringIntroObj(process.argv[2]);
console.log(obj);
