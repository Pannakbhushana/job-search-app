const mongoose=require("mongoose");

const authenticationSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const EmployerAuthenticationModel=mongoose.model("employerauth",authenticationSchema)

module.exports={EmployerAuthenticationModel};