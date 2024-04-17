// import express from 'express';
// import { Router } from "express";
// import  userrouter  from "./userrouter"
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { dbConnect } from './dbconfig';
// import dotenv from 'dotenv';
// import { connect,ConnectOptions, set } from "mongoose";
// import { UserModel } from './usermodel';
// const router= Router();
// const app=express();

// dbConnect();

// new UserModel({
//     name: 'Amal',
//     email: 'amal@gmail.com',
//   }).save();
  

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// app.use(cors({
//     credentials:true,
//     origin:["http://localhost:4200"]
//   }));

// app.use("/api/users",userrouter);
// app.listen(9999,()=>{console.log("server connected")});


// const LOCAL_DB_CON="mongodb://127.0.0.1:27017/db";
// export const dbConnect =()=>{
//   connect(LOCAL_DB_CON!,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
//   } as ConnectOptions).then(
//     ()=>console.log("connected successful"),
//     (error)=>console.log(error)
//   )
// }
