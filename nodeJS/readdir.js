var fs = require("fs");
fs.readdir("myfolder", fun1);
function fun1(error, files) {
  if (error) {
    console.log(error);
  } else {
    console.log(files);
    for (var i = 0; i < files.length; i++) {
      console.log(
        files[i] + "-" + fs.statSync("myfolder/" + files[i]).isFile()
      );
    }
  }
}
