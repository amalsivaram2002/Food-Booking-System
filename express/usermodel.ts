// import { model, Schema } from "mongoose";

// export interface User{
//   id:string;
//   name:string;
//   email:string;
// }

// export const UserSchema=new Schema<User>({
//   name:{type:String,required:true},
//   email:{type:String,required:true,unique:true}
// },
// {
//   toJSON:{virtuals:true},toObject:{virtuals:true},timestamps:true
// })


// export const UserModel=model<User>('User',UserSchema);