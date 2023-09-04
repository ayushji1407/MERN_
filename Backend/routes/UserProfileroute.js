import  express  from "express";
import UserProfileController from "../controllers/UserProfileController.js";
const router = express.Router();

// Publiuc Routes 
router.post("/register",UserProfileController.UserProfile);

export default router;