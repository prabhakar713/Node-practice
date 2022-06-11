//This function is used to write content into a file, asynchronously.

var fs=require('fs');
var data="hello\nhow\nare\nyou";
fs.writeFile("file1.txt",data,"utf8",fun1);

function fun1(err)
{
    if(err)
    {
        console.log("error");
    }
    else
    {
        console.log("written successfully");
    }
}