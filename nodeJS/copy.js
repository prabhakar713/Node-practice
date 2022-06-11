var fs = require("fs");
fs.readFile("file.txt", "utf-8", func1);

function func1(error, data) {
  if (error) {
    console.log("error");
  } else {
    fs.writeFile("copy.txt", data, fun2);
    function fun2(error) {
      if (error) {
        console.log(error);
      } else {
        console.log("copied");
      }
    }
  }
}
