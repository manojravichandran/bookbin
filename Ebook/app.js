
var fs=require('fs');

var url=require('url');


function render (path,res){
    fs.readFile(path,function(error,data){
if(error){
    res.writeHead(404);
    res.write("Not Found");
}
else{
    res.write(data);
}
res.end();
    });
}
module.exports ={

    user_request:function(req,res){
    res.writeHead(200,{"Content_Type":"text/html"});
    var path=url.parse(req.url).pathname;
switch(path){
 case '/index.html':
render('./templates/index.html',res);
break;
case '/bin.html':
render('./templates/bin.html',res);
break;
case '/about.html':
render('./templates/about.html',res);
break;
case '/':
render('./templates/index.html',res);
break;
default:
res.writeHead(404);
res.write("Not Found");
res.end();
}

    }
};