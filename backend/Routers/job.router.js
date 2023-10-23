const express=require("express");
const {JobModel}=require("../Model/job.model");

const jobRoute=express.Router()

jobRoute.post("/add",async(req,res)=>{
    const payload=req.body;
    try {
        const newuser=new JobModel(payload);
        await newuser.save();
        res.status(200).send({msg:"new job has been posted"});
    } catch (error) {
        res.status(200).send({msg:error.message});
    }
})

jobRoute.get("/",async(req,res)=>{
    const query=req.query;
    try {
        const data=await JobModel.find(query);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({msg:error.message});
    }     
})

jobRoute.delete("/delete/:userID", async(req,res)=>{
    const {userID}=req.params;
    try {
        await JobModel.findByIdAndDelete({_id:userID});
        res.status(200).send({msg:"post has been deleted"});
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})


jobRoute.patch("/update/:userID",async(req,res)=>{
    const {userID}=req.params;
    const payload=req.body;
    try {
        res.status(200).send({msg:"post has been updated"});
        await JobModel.findByIdAndUpdate({_id:userID},payload)
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})




module.exports={jobRoute};