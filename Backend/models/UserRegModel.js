import mongoose from "mongoose";
const UserRegSchema = new mongoose.Schema({
     userName: {type:String, required: [true,"User Name is Required"],trim: true},
     userEmail: {type:String, required: [true,"User Email is Required"],unique:true,trim: true},
     userMobile: {type:Number, required: [true,"User Mobile Number is Required"],unique:true,trim: true},
     userPassward: {type:String, required: [true,"Passward is Required Field"], trim: true,minlength:6,maxlength:100},
     userStatus: {type:String, required: [true,"Status is Required Field"], trim: true},
});

const UserRegModal = mongoose.model("userreg",UserRegSchema);

export default UserRegModal;