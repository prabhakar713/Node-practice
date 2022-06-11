var fs = require("fs");
console.log("before delete the file");
try {
  fs.unlinkSync("abcsync.txt");
  console.log("Deleted Done");
} catch {
  console.log("Error");
}
console.log("After delete the file");
