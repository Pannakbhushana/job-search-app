const mongoose=require("mongoose");

const jobSchema=mongoose.Schema({
    companyName:String,
    aboutCompany:String,
    companyAddress:String,
    companyWebsite:String,
    role:String,
    experience:String,
    salary:String,
    location:String,
    date:String,
    type:String,
    skill:String,
    highlights:String,
    description:String,
    industryType:String,
    department:String,
    employmentType:String, 
    logourl:String, 
})

const JobModel=mongoose.model("job",jobSchema)

module.exports={JobModel};