import mongoose from "mongoose";
const UserProfileSchema = new mongoose.Schema({
     userID:{type:mongoose.Schema.Types.ObjectId,ref:"userreg",required:[true,"User ID id Required"],unique:true,trim:true},
     userName: {type:String, required: [true,"User Name is Required"],trim: true},
     userSkill: {type:String, required: [true,"User Skill is Required"],trim: true},
     userExp: {type:String,required:['true','User Exp is Required'],enum:["Yes","No"],trim:true},
     userExpDetails: {type:String, required:false,unique:true,trim: true},
     userOtherInfo: {type:String, required:false, trim: true},
});

const UserProfileModal = mongoose.model("userprofile",UserProfileSchema);

export default UserProfileModal;