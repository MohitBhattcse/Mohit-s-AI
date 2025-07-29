import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
import userRoutes from "./user.route.js";
import promtRoutes from "./routes/promt.route.js";
const app= express();
const port = process.env.PORT||4001;
 
//DBConnection Code frim Here!!!
const MONGO_URL = process.env.MONGO_URL;
//middleware
app.use(express.json());
app.use(cookieParser()); 
app.use(
    cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods:["GET", "POST", "PUT", "DELETE"],
    allowedHeaders:["Content-Type", "Authorization"],

})
);
mongoose
.connect(MONGO_URL).then(
    ()=> console.log("Connected to MongoDB Successfully"))
    .catch((error)=>
    console.error("MongoDB Connection Failed", error))
//routes

app.use("/api/v1/user",userRoutes);
app.use("/api/v1/mohitai",promtRoutes);

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})