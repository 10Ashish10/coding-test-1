const express = require('express');
var app = express();

var myroutes=require('./routes//payload.js');
   
     
app.use('/api',myroutes); 

app.listen(3001,()=>{
    console.log("listening at port 3001");
})