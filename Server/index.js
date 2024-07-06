import express from 'express';
import { config } from 'dotenv';
import router from './routes/spaces.routes.js';
import routerr from './routes/users.routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app=express();
app.use(express.json())
app.use("/spaces", router)
app.use("/api/users/", routerr)

app.listen(7000,()=>{
    console.log("app running on port 7000 ....");
})