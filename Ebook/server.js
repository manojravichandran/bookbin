var http=require('http');
var app=require('./app');
http.createServer(app.user_request).listen(8008);
console.log("Server is Running at localhost:8008 . . .  . .")