var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/FoodDelivery');
var db=mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post("/register",function(req,res){
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
	db.collection('User').insertOne(data,function(err, collection){
		if (err) throw err;
	console.log("User Record inserted Successfully");
	alert("User created");
	}
	);
}).listen(5200)

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

china.find().then((products) => {
  //  console.log(products);
}).catch((error) => {
  console.error(error);
});
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










  
  const port = 3000;
  app.listen(port, () => {
    
    console.log(`Server running on port ${port}`);
  });
  
  // app.get('/',function(req,res){
  //   res.set({
  //     'Access-control-Allow-Orgin':'*'
  //   });

  // }).listen(3000);