//This function is used to delete the file.

var fs=require('fs');
fs.unlink("abc.txt",fun1);

function fun1(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Deleted Done")
    }
}