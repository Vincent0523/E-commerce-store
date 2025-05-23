import express from "express";
import dotenv from "dotenv";

import authRuotes from "./routes/auth.routes.js";
import { connect } from "mongoose";

import { connectDB } from "./lip/db.js";
dotenv.config();

const app= express();
const PORT = process.env.PORT || 5000;

app.use(express.json());//allow you to parse the body request


app.use("/api/auth",authRuotes);

app.listen(PORT,() =>{
    console.log("Server is runing on http://localhost:" + PORT)

    connectDB();
});
