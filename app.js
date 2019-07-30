
import { express } from 'express';
var app = express();
import { request } from 'request';
import { bodyParser } from 'body-parser';
import { appConfig } from 'config.json';
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

app.post('/test',function(req,res){
    res.send("This is a test value");
});


app.listen(myPort);
