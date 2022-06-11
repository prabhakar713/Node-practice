var fs=require("fs");
console.log("before readFile");

try{
    var data=fs.readFileSync("file.txt","utf8");
    console.log(data);
}
catch{
    console.log("error");
}
console.log("after readFile");