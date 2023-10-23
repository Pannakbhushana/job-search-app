const express=require("express");
const {AuthenticationModel}=require("../Model/authentication.model.js");
const jwt=require("jsonwebtoken");


const authenticationRoute=express.Router()

authenticationRoute.post("/register", async(req,res)=>{
    const payload=req.body;
   try {
            const user=new AuthenticationModel(payload);
            await user.save();
            res.status(200).send({"msg":"user SignUp successfully"});
   } catch (error) {
        res.status(200).send({"msg":"user SignUp successfully"});
   }
})

authenticationRoute.post("/login", async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user= await AuthenticationModel.findOne({email});
        const pass= await AuthenticationModel.findOne({password});
       
        if(user.email===pass.email){
            res.status(200).send({msg:"Login successfully !", token:jwt.sign({"name":user._id},"ironmen")});
        }
        else{
            res.status(400).send({msg:"user not found !"});
        }
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})




module.exports={authenticationRoute};