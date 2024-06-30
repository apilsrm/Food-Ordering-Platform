import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";


//app config
const app =express();


//configuration
dotenv.config();

//middleware
app.use(express.json());
app.use(cors());

//database connect
connectDB();

//endpoints apis
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));
app.use("/api/user",userRouter)


app.get("/",(req,res)=>{
    res.send("Api Working");
})




//run express server
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running at: http://localhost:${PORT}`)
})