var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const UserModel = require('./up');
const adminmodel=require('./ap');
const cartModel=require('./cart')
//var registermodel=require('./register');
var cors = require('cors');

const app = express();
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/FoodDelivery');
var db=mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
  console.log("connection succeeded");
})


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post("/register",async(req,res)=>{
	console.log("register");
	res.set({
		'Access-Control-Allow-Origin':'*', 
	});
	console.log(req.body)
	var fname=req.body.fname;
	var lname=req.body.lname;
	var email=req.body.email;
	var pass=req.body.pass;
	var data = {
			"firstname": fname,
			"lastname": lname,
			"email":email,
			"password":pass
		}
	console.log(fname+email);
	const sts = await UserModel.find({"email":email});
	console.log(sts);	
	if (sts[0]==null)
	{
		
	db.collection('User').insertOne(data,function(err, collection){
		if (err) 
		{
			res.sendStatus(500)
			res.send("failed")
		
		}

		else
		{
			console.log("User Record inserted Successfully");}});
			
		}
	// else if(sts[0]!==null)
	// {
	// 	console.log("bye")
	// 	res.sendStatus(500);
	// }
})


app.post("/login",async (req,res)=>{
	res.set({
		'Access-Control-Allow-Origin':'*',
	});


	const {mail,pass}=req.body;

	if(mail==null || pass==null){

		res.sendStatus(500);
	}else{
		try{

			const opass = await UserModel.findOne({email:mail,password:pass});
			console.log(opass);
			if(opass ){

				res.json({auth:'true',email:req.body.email});

			}
			// else if(pass==opass.password){
			// 	res.sendStatus(500);
			// }
			else{
				res.sendStatus(500);
			}
		}catch(err){
			console.log(err);
			res.sendStatus(500);
		}
	}


}
);


app.post("/cart",async(req,res)=>{
	console.log("requestde");
	res.set({
		'Access-Control-Allow-Origin':'*',
	});

	const order=new cartModel({
		email:req.body.email,
		cartlist:req.body.cartlist
	})
	
	try{
		await order.save();
		res.send(order);
	}
	catch(ex)
	{
		console.log(ex.message);
	}
	
})




app.post("/adminlogin",async (req,res)=>{
	res.set({
		'Access-Control-Allow-Origin':'*',
	});


	const {mail,pass}=req.body;

	if(mail==null || pass==null){

		res.sendStatus(500);
	}else{
		try{

			const opass = await adminmodel.findOne({email:mail,password:pass});
			console.log(opass);
			if(opass ){

				res.json({auth:'true',email:req.body.email});

			}
			// else if(pass==opass.password){
			// 	res.sendStatus(500);
			// }
			else{
				res.sendStatus(500);
			}
		}catch(err){
			console.log(err);
			res.sendStatus(500);
		}
	}


}
);





app.post("/chineseadmin",function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
	console.log("Requested");
	var fname=req.body.fname;
	var lname=req.body.lname;
	var email=req.body.email;
	var path=req.body.path;
	var data = {
			"sno": fname,
			"name": lname,
			"price":email,
			"path":path
		}
	console.log(fname+email);
	db.collection('chinese').insertOne(data,function(err, collection){
		if (err) throw err;
	console.log("User Record inserted Successfully");

	}
	);
}).listen(5001)



app.post("/northadmin",function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
	var fname=req.body.fname;
	var lname=req.body.lname;
	var email=req.body.email;
	var path = req.body.path;
	console.log(path)
	var data = {
			"sno": fname,
			"name": lname,
			"price":email,
			"path":path
		}
	console.log(fname+email);
	db.collection('north').insertOne(data,function(err, collection){
		if (err) throw err;
	console.log("User Record inserted Successfully");
	}
	);
}).listen(5002)



app.post("/southadmin",function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
	var fname=req.body.fname;
	var lname=req.body.lname;
	var email=req.body.email;
	var path=req.body.path;
	var data = {
			"sno": fname,
			"name": lname,
			"price":email,
			"path":path
		}
	console.log(fname+email);
	db.collection('souths').insertOne(data,function(err, collection){
		if (err) throw err;
	console.log("User Record inserted Successfully");
	}
	);
}).listen(5003)



app.post("/westadmin",function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
	var fname=req.body.fname;
	var lname=req.body.lname;
	var email=req.body.email;
	var path=req.body.path;
	var data = {
			"sno": fname,
			"name": lname,
			"price":email,
			"path":path
		}
	console.log(fname+email);
	db.collection('western').insertOne(data,function(err, collection){
		if (err) throw err;
	console.log("User Record inserted Successfully");
	}
	);
}).listen(5004)






app.post("/chineseupdate",function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
	var fname=req.body.fname;	
	var pass=req.body.price;

	console.log(fname);
	db.collection("chinese").updateOne({name:req.body.fname},{$set:{price:req.body.price}}, function(err, res) {
		if (err) throw err;
	  });
}).listen(5010)


app.post("/northupdate",function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
	var fname=req.body.fname;	
	var pass=req.body.price;

	console.log(fname);
	db.collection("north").updateOne({name:req.body.fname},{$set:{price:req.body.price}}, function(err, res) {
		if (err) throw err;
	  });
})


app.post("/southupdate",function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
	var fname=req.body.fname;	
	var pass=req.body.price;

	console.log(fname);
	db.collection("souths").updateOne({name:req.body.fname},{$set:{price:req.body.price}}, function(err, res) {
		if (err) throw err;
	  });
})


app.post("/westupdate",function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
	var fname=req.body.fname;	
	var pass=req.body.price;

	console.log(fname);
	db.collection("western").updateOne({name:req.body.fname},{$set:{price:req.body.price}}, function(err, res) {
		if (err) throw err;
	  });
})






app.post("/chinadelete",async function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
  console.log("Delete requested");
	var fname=req.body.fname;
	var data = {
			"sno": fname,
		}
	console.log(fname);
	try{
		const result = await china.deleteOne({name:fname});
	}catch(err){
		console.log(err);
		res.sendStatus(500);
	}
}).listen(5005)


app.post("/northdelete",async function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
  console.log("Delete requested");
	var fname=req.body.fname;
	var data = {
			"sno": fname,
		}
	console.log(fname);
	try{
		const result = await north.deleteOne({name:fname});
	}catch(err){
		console.log(err);
		res.sendStatus(500);
	}
}).listen(5006)


app.post("/southdelete",async function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
  console.log("Delete requested");
	var fname=req.body.fname;
	var data = {
			"sno": fname,
		}
	console.log(fname);
	try{
		const result = await south.deleteOne({name:fname});
	}catch(err){
		console.log(err);
		res.sendStatus(500);
	}
}).listen(5007)


app.post("/westdelete",async function(req,res){
	res.set({
		'Access-Control-Allow-Origin':'*',
	});
  console.log("Delete requested");
	var fname=req.body.fname;
	var data = {
			"sno": fname,
		}
	console.log(fname);
	try{
		const result = await wester.deleteOne({name:fname});
	}catch(err){
		console.log(err);
		res.sendStatus(500);
	}
}).listen(5008)




const productSchema = new mongoose.Schema({
	_id: {
	  type: mongoose.Schema.Types.ObjectId,
	  required: true,
	  auto: true
	},
	sno: {
	  type: Number,
	  required: true
	},
	name: {
	  type: String,
	  required: true
	},
	price: {
	  type: Number,
	  required: true
	},
	
  });

const china = mongoose.model('chinese', productSchema,'chinese');

// china.find().then((products) => {
//   //  console.log(products);
// }).catch((error) => {
//   console.error(error);
// });
app.get('/chines', async (req, res) => {
    res.set({
      'Access-Control-Allow-Origin':'*'
    });
    try {
      const products = await china.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });



  app.get('/orders', async (req, res) => {
    res.set({
      'Access-Control-Allow-Origin':'*'
    });
    try {
      const products = await cartModel.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });




  const wester = mongoose.model('western', productSchema,'western');

wester.find().then((products) => {
   console.log(products);
}).catch((error) => {
  console.error(error);
});
app.get('/wester', async (req, res) => {
    res.set({
      'Access-Control-Allow-Origin':'*'
    });
    try {
      const products = await wester.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });





  const north = mongoose.model('north', productSchema,'north');

north.find().then((products) => {
   console.log(products);
}).catch((error) => {
  console.error(error);
});
app.get('/nort', async (req, res) => {
    res.set({
      'Access-Control-Allow-Origin':'*'
    });

    try {
      const products = await north.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });




  const south = mongoose.model('souths', productSchema,'souths');

south.find().then((products) => {
   console.log(products);
}).catch((error) => {
  console.error(error);
});
app.get('/sout', async (req, res) => {
    res.set({
      'Access-Control-Allow-Origin':'*'
    });
    try {
      const products = await south.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });










  
//   const port = 3000;
//   app.listen(port, () => {
    
//     console.log(`Server running on port ${port}`);
//   });
  
  app.post('/',function(req,res){
    res.set({
      'Access-control-Allow-Orgin':'*',
    });

  }).listen(3000);