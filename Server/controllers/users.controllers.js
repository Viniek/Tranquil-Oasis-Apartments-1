import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma =new PrismaClient();
export const createUser=async(req,res)=>{
    try{
        const{firstname,lastname,emailaddress,phonenumber,password}=req.body;
        const hashedPassword =bcrypt.hashSync(password, 10);
        const newUser= await prisma.user.create({
            data:{
                firstname:firstname,
                lastname:lastname,
                emailaddress:emailaddress,
                phonenumber:phonenumber,
                password:hashedPassword
            }
        })
        res.status(201).json({success:true,message:"hurray!!user created successfuly..."})
    }catch(e){
        res.status(500).json({success:false,message:e.message})
    }
    
    }