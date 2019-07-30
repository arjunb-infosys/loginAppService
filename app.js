
var express = require('express');
var app = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var appConfig = require('config.json');
var myPort= process.env.PORT || 3000;

app.post('/authenticateUser',function(req,res){
 const userCreds = appConfig.loginCreds;
try{
 if(userCreds[req.body.username]){

}else{

}
 }catch(e){
 
 }
});

app.get('/test',function(req,res){
    res.send("This is a test value");
});


app.listen(myPort);
