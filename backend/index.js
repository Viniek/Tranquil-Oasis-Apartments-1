import express from 'express';
import router from './routes/spaces.routes';
// import{config }from 'dotenv';
// config();

const app=express();
// app.use(express.json())
app.use("/spaces", router)

app.listen(6000,()=>{
    console.log("app running on port 6000 ....");
})