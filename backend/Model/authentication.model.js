const mongoose=require("mongoose");

const authenticationSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const AuthenticationModel=mongoose.model("userauth",authenticationSchema)

module.exports={AuthenticationModel};