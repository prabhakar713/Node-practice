//This function is used to read content of an existing file, asynchronously.
var fs=require("fs");
fs.readFile("file.txt","utf8",fun1);
console.log("after readfile");

function fun1(err,data)
{
    if(err)
    {
        console.log("error");
    }
    else
    {
        console.log(data);
    }
}