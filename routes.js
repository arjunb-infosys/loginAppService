var express 		= require('express');
var session = require('express-session');
var router			= express.Router();	
router.use(session({secret: 'ssshhhhh'}));
var request			= require('request');	
var fs 				= require("fs");	
var request			= require('request');
var path			= require("path");	
var config			= require('./config');	
const uuidv1 		= require('uuid/v1');

//var Authentication = require('./utilities/Authentication');


//const sendOtp 		= new SendOtp('209393AILCgzYm2m675acd86a1');


router.get('/testing',function(req,res){
res.send("Success");
});

module.exports = router;
