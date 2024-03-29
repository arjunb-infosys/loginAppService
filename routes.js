var express 		= require('express');
var session = require('express-session');
var router			= express.Router();	
router.use(session({secret: 'ssshhhhh'}));
var request			= require('request');	
var fs 				= require("fs");	
var request			= require('request');
var path			= require("path");	
var config			= require('./config.json');	
const uuidv1 		= require('uuid/v1');

//var Authentication = require('./utilities/Authentication');


//const sendOtp 		= new SendOtp('209393AILCgzYm2m675acd86a1');


router.get('/testing',function(req,res){
res.send("Success");
});
router.get('/pendingData',function(req,res){
  /*try{
  let username = req.query.uname;
let dataSet = config.data[username];
if(uname && uname != ""){
  var data={
  "val":dataSet
    ,"success":"true"
  };
res.json(JSON.stringify(data)).end();
}else{
  res.json([]).end();
}
    }catch(err){
    res.json({
    "error":err
      ,"uname":username
    }).end();
    }*/
  
  res.send({
    "dataSet":[{
            "reqId":"A1234"
            ,"status":"pending"
        },{
            "reqId":"K5511"
            ,"status":"pending"
        },{
            "reqId":"L1911"
            ,"status":"pending"
        },{
            "reqId":"L1912"
            ,"status":"pending"
        },{
            "reqId":"Q29313"
            ,"status":"pending"
        }]}).end();
});
router.post('/authenticateUser',function(req,res){
  try{
    const credConfig = config['loginCreds'];
if(credConfig[req.body.username]){
if(credConfig[req.body.username].password == req.body.password){
res.json({
"success":true
  ,"msg":credConfig[req.body.username].fullName
}).end();
}else{

    res.json({
        "success":false
          ,"msg":"Invalid credentials"
        })
}
}else{
    res.json({
        "success":false
          ,"msg":"Username does not exist"
        }).end();

}

    }catch(e){
        res.json({
            "success":false
              ,"msg":"Oops!! There seems to some problem in the back end. We regret the inconvenience."
            }).end();
    }
});
module.exports = router;
