var express 		    = require('express');
var app			        = express();	
var request			    = require('request');
var bodyParser          = require('body-parser');
var myPort= process.env.PORT || 3000;
app.post('/authenticateUser',function(req,res){
 
})
app.listen(myPort);
