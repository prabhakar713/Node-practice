var fs=require('fs');
console.log("before rename ");
try{
    fs.renameSync("abc.txt","xyzsync.txt");
    console.log("Done")
}
catch{
    console.log("error");
}
console.log("After rename ");