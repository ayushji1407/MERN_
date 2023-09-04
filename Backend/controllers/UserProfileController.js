import UserProfileModal from "../models/UserProfileModel.js";


const UserProfile = async (req,res) => {    
     try{
         const userData = await UserProfileModal(req.body)
         if(userData){
         res.status(200).send({
             status:"Success",
             message:"User Profile Inserted",
             data:req.body,
         });
     } else {
         res.status(200).send({
             status:"Success",
             message:"No User Profile Found",
             userData,
         });
         
     }
     } catch (err){
         console.log(err);
         res.status(500).send({status:"Error",message:"Unable to Display User Profile Detail...."})
     }
 };

 export default {UserProfile}