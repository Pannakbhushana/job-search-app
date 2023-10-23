const express=require("express");
const {EmployerAuthenticationModel}=require("../Model/employerauth.model");
const jwt=require("jsonwebtoken");


const employerAuthRoute=express.Router()

employerAuthRoute.post("/register", async(req,res)=>{
    const payload=req.body;
   try {
            if(payload.username && payload.email && payload.password){
                const user=new EmployerAuthenticationModel(payload);
                await user.save();
                res.status(200).send({"msg":"user SignUp successfully",token:jwt.sign({"name":user._id},"ironmen")});
            }
            else{
                res.status(400).send({msg:"Invalid Input !",});
            }
            
   } catch (error) {
        res.status(200).send({"msg":error.message});
   }
})

employerAuthRoute.post("/login", async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user= await EmployerAuthenticationModel.findOne({email});
        const pass= await EmployerAuthenticationModel.findOne({password});
       
        if(user.email===pass.email){
            res.status(200).send({msg:"Login successfully !", token:jwt.sign({"name":user._id},"ironmen")});
        }
        else{
            res.status(400).send({msg:"Wrong Credentials !"});
        }
    } catch (error) {
        res.status(400).send({msg:"Wrong Credentials !"});
    }
})




module.exports={employerAuthRoute};