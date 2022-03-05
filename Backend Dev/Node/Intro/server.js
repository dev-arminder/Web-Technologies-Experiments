const http = require("http");
const PORT = process.env.PORT || 3000;

function init() {
  console.log("inisde init");
}
init();
console.log("Hello");

const server = http.createServer((req, res) => {
  console.log("Resuqest");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Node Server</h1>");
});

server.listen(PORT, () => {
  console.log("Listening on Port - 3000");
});
