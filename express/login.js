var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const User = require('./up');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/FoodDelivery');
var db=mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
  console.log("connection succeeded");
})

app.post("/login",async (req,res)=>{
	res.set({
		'Access-Control-Allow-Origin':'*',
	});

	var mail=req.body.mail;
	var pass=req.body.pass;
	if(mail==null || pass==null){
		res.json({auth:'false'});
	}else{
		try{
			let pass=req.body.pass;
			console.log("send "+mail);
			const opass = await User.find({email:req.body.mail});
			console.log(opass);
			if(!opass || opass[0]==undefined){
				res.json({auth:'false'});
			}
			else if(pass==opass[0].password){
				res.json({auth:'true',email:req.body.email});
			}
			else{
				res.json({auth:'false'});
			}
		}catch(err){
			res.json({auth:'false'});
			console.log(err);
			res.sendStatus(500);
		}
	}


}
);

app.get('/',function(req,res){
    res.set({
      'Access-control-Allow-Orgin':'*',
    });

  }).listen(3000);