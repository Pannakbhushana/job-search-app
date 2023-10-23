const express=require("express");
const cors=require("cors");
const {connection}=require("./db.js");
const {authenticationRoute}=require("./Routers/authentication.router.js");
const {employerAuthRoute}=require("./Routers/employerauth.router.js");
const {jobRoute}=require("./Routers/job.router.js");



const app=express();
app.use(express.json());
app.use(cors());
app.use("/userauth",authenticationRoute);
app.use("/employerauth",employerAuthRoute);
app.use("/job",jobRoute);




app.listen(8080, async()=>{
    try {
        await connection;
        console.log("connected to db");
    } catch (err) {
        console.log("not able to connecte to db");
        console.log(err.message);
    }
    console.log("server is running at port 8080");
})