var express = require('express')
var app = express;
app.length('/server/list',function(req,res){
    res.send('this is response');
})

app.listen(8080);
console.log('server start on 8080');