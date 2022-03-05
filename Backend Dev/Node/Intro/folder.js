const fs = require("fs");
const folder = "./folder";

try {
  if (fs.existsSync(folder)) {
    console.log("Folder Exist");
    console.log(fs.readdirSync(folder));
  } else {
    console.log("Need to create a Folder");
    // Create Folder
    fs.mkdirSync(folder);
    console.log("Folder Created");
  }
} catch (err) {}
