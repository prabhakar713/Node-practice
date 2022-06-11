//This function is used to rename a file, asynchronously.
var fs = require("fs");
fs.rename("abc.txt", "xyz.txt", fun1);
function fun1(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Done");
  }
}
