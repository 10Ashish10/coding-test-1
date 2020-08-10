var express =require('express')
var app=express();
var myrouter1 =express.Router();
myrouter1.use(express.json())

myrouter1.post("/",(req,res)=>
{
   
var data=(req.body);

var original_output_file=JSON.stringify(data.payload);

Object.keys(data.referenceData).
forEach(key =>
{
   var input_file =`{${key}}`;

   var output_file = new RegExp(input_file,"g");

   original_output_file = original_output_file.replace(output_file,data.referenceData[key])
})

var solution= JSON.parse(original_output_file);
res.send(solution);
})

module.exports=myrouter;