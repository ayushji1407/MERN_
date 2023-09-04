import  express  from "express";
import cors from 'cors';
import connectDB from './config/connectdb.js';
import UserRegRoute from "./routes/UserRegRoute.js";
import UserProfiletRoute from "./routes/UserProfileroute.js";
// import JobPostRoute from "./routes/JobPostRoute.js";
// import JobApplyRoute from "./routes/JobApplyRoute.js";
// import EmployeerRegRoute from "./routes/JobPostRoute.js";
// import EmployeerProfileRoute from "./routes/EmployeerProfileRoute.js";



const app = express();
app.use(cors());

const port = 8000;
const DATABASE_URL = "mongodb+srv://user2024:User2024@cluster0.mlvyhub.mongodb.net/reglogindb?retryWrites=true&w=majority";
connectDB(DATABASE_URL);
app.use(express.json());

// Load Routes

app.use("/api/v1/userreg",UserRegRoute);
app.use("/api/v1/userprofile",UserProfiletRoute);
// app.use("/api/v1/jobpost",JobPostRoute);
// app.use("/api/v1/jobapply",JobApplyRoute);
// app.use("/api/v1/empreg",EmployeerRegRoute);
// app.use("./api/v1/empprofile",EmployeerProfileRoute);

app.listen(port,() => {
     console.log(`Server listening at http://localhost:${port}`);
});
 