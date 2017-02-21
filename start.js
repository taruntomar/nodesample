var http = require('http');
var express = require('express');
var app= express();
var server = http.createServer(app);
var fs = require('fs');
var path = require('path');


app.get('/',function(req,res){

res.writeHead(200);
fs.createReadStream('./public/index.html').pipe(res);

});

app.use(express.static(path.join(__dirname,'\public')));


var io = require('socket.io')(server);
io.on('connection',function(socket){
    socket.on('forkserver',function(data){
        console.log('received from client: '+data)
    })
});
app.listen(8080);


console.log("LIsting on port 8080");