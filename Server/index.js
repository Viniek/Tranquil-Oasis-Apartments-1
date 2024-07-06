import express from 'express';
import router from './routes/spaces.routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app=express();
app.use(express.json())
app.use("/spaces", router)

app.listen(7000,()=>{
    console.log("app running on port 7000 ....");
})