import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router= Router();
const prisma=new PrismaClient();

router.get("/",(req,res)=>{
    res.send("getting all tenants")
})


router.get("/:id",(req,res)=>{
    res.send("getting a single space")
})

router.post("/",async(req,res)=>{
    try{
        const{  id,  vacancy,  location,  floor}= req.body;
        const newSpace =await prisma.spaces.create({
            data:{
                vacancy:vacancy,
                location:location,
                floor:floor
            }
        })
res.status(201).json(newSpace);
    }catch(e){
  res.status(500).json({success:false,message:e.message})
    }
})

router.patch("/:id",(req,res)=>{
    res.send("Updating a single space")
})

router.delete("/:id",(req,res)=>{
    res.send("deleting a single space")
})
export default router