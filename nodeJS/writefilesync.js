//This function is used to write content to a file, synchronously.
var fs=require("fs");
console.log("before writeFile");

var data="hello\nhow\nare\nyou";
try{
    fs.writeFileSync("file2.txt",data,"utf8");
    console.log("written successfully");
}
catch{
    console.log("error");
}

console.log("After writefile")
