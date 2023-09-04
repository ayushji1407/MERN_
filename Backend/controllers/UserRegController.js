import UserRegModel from "../models/UserRegModel.js";
import bcryptjs from "bcryptjs";

const UserRegistration = async (req, res) => {
    const { userName,userEmail,userMobile,userPassward,userRPassward} = req.body;
    if (userName && userEmail && userMobile && userPassward && userRPassward) {
        if (userPassward === userRPassward) {
            const data = req.body;
            console.log(data);
            try {
                console.log("try")
                const saltkey = await bcryptjs.genSalt(12);
                const hashPassward = await bcryptjs.hash(data.userPassward,saltkey);
                data.userPassward = hashPassward;
                const userData = new UserRegModel(data);
                await userData.save();
                res.status(200).send({status:"Success",message:"User Registered Successfully",data});
                
            }
            catch(err){
                console.log(err);
                console.log("catch")
                res.status(500).send({status:"Error",message:"Unable to Register",
            });
            }
        }
        else
        res.status(200).send({status:"Password Issue",message:"Re-entered Password is Incorrect"});
    }
    else
    res.status(200).send({status:"Data Issue",message:"All Fields are Required..."});
}

const Userlogin = async(req,res)=>{
    try {
        const {userEmail,userPassward}=req.body;
        const userData = await UserRegModel.find({userEmail:userEmail});
        if (userData.length >0) {
            const chkPass = await bcryptjs.compare(req.body.userPassward,userData.userPassward);
            console.log(chkPass);
            if(chkPass){
                res.status(200).send({
                    status:"Success",
                    message:"Login Succesful..",
                    userData
                })
            }
            else{res.status(200).send({
                status:"Fail",
                message:"Passward is Not Macthed...",
                userData
            })}

        }
    } catch (err){
        console.log(err);
        res.status(500).send({status:"Error",message:"Unable to Display User Detail..."})
    }
};

const UserDisplay = async (req,res) => {    
    try{
        const userData = await UserRegModel.find({});
        if(userData.length>0){
        res.status(200).send({
            status:"Success",
            message:"Get User  Records",
            userData,
        });
    } else {
        res.status(200).send({
            status:"Success",
            message:"No User Found",
            userData,
        });
        
    }
    } catch (err){
        console.log(err);
        res.status(500).send({status:"Error",message:"Unable to Display User Detail...."})
    }
};

const UserSearchByID = async (req,res) => {
    try {
        const userData = await UserRegModel.find({_id:req.params.id});
        if (userData.length >0) {
            res.status(200).send({
                status:"Success",
                message:"Get User Record",
                userData,
            });
        } else {
            res.status(200).send({
                status:"Success",
                message:"User Not Found",
                userData,
            });
        } 
    } catch (err){
        console.log(err);
        res.status(500).send({status:"Error",message:"Unable to Display User Detail..."})
    }
};

const UserDeletAll = async (req,res) => {
    try{
        const userData = await UserRegModel.deleteMany({});
        if(userData){
            res.status(200).send({
                status:"Success",
                message:"Delet All USer",
                userData,
            });
        } else {
            res.status(200).send({
                status:"Success",
                message:"User Not Found..",
                userData,
            })
        }
    } catch (err){
        console.log(err);
        res.status(500).send({status:"Error",message:"Unable to Delet User Detail..."})
    }
};

const UserDeletByID = async (req,res) =>{
    try{
        const userData = await UserRegModel.findByIdAndDelete({_id:req.params.id});
        if(userData){
            res.status(200).send({
                status:"Success",
                message:"User Deleted",
                userData,
            });
        } else {
            res.status(200).send({
                status:"Success",
                message:"User Not Deletd",
                userData,
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({status:"Error",message:"Unable to Delet User Detail..."})
    }
};

const UserUpdateByID = async (req,res) => {
    try{
        const userData = await UserRegModel.findByIdAndUpdate({_id:req.params.id},req.body);
        if(userData){
            res.status(200).send({
                status:"Success",
                message:"User Updated",
                userData,
            });
        } else {
            res.status(200).send({
                status:"Success",
                message:"User Not Found..",
                userData
            })
        }
    } catch(err){
        console.log(err);
        res.status(500).send({status:"Error",message:"Unable to User Details..."})
    }
};




export default {UserRegistration,Userlogin,UserDisplay,UserDeletAll,UserDeletByID,UserSearchByID,UserUpdateByID};