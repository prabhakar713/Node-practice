var fs=require("fs");
var data="hello\nhow\nare\nyou";
fs.writeFile("crud.txt",data,"utf8",fun1);
function fun1(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("written successfully");
        fs.readFile("crud.txt",fun2);
        function fun2(error,data){
            if(error){
                console.log(error);
            }
            else{
                console.log(data);
                fs.writeFile("copycrud2.txt",data,"utf8",fun3);
                function fun3(error){
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log("copied");
                        fs.stat("copycrud2.txt",fun4);
                        function fun4(error,stats){
                            if(error){
                                console.log(error);
                            }
                            else{
                                console.log(stats);
                                fs.rename("copycrud2.txt","renamecrud.txt",fun5);
                                function fun5(error){
                                    if(error){
                                        console.log(error);
                                    }
                                    else{
                                        console.log("rename successfully");
                                        fs.unlink("renamecrud.txt",fun6);
                                        function fun6(error){
                                            if(error){
                                                console.log(error);
                                            }
                                            else{
                                                console.log("deleted successfully");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}