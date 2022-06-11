var fs=require('fs');
fs.stat("file.txt",fun1);
function fun1(error,stats){
    if(error){
        console.log(error);
    }
    else{
        console.log(stats);
    }
}
