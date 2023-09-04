import  express  from "express";
import UserRegController from "../controllers/UserRegController.js";
const router = express.Router();

// Publiuc Routes 
router.post("/register",UserRegController.UserRegistration);
router.post("/login",UserRegController.Userlogin);
router.get("/display",UserRegController.UserDisplay);
router.get('/display:id',UserRegController.UserSearchByID);
router.delete("/delet",UserRegController.UserDeletAll);
router.delete("/delet:id",UserRegController.UserDeletByID);
router.put("/update:id",UserRegController.UserUpdateByID);


export default router;
