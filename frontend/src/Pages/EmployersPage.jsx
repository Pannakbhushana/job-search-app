import React, { useState } from 'react';
import Styles from "../Styles/Employers.module.css";
import {Text,FormLabel,Input,Button,FormControl } from '@chakra-ui/react';

const initState={
    companyName:"",
    aboutCompany:"",
    companyAddress:"",
    companyWebsite:"",
    role:"",
    experience:"",
    salary:"",
    location:"",
    date:"",
    type:"",
    skill:"",
    highlights:"",
    description:"",
    industryType:"",
    department:"",
    employmentType:"", 
    logourl:""
}


function EmployersPage() {
    const [formState, setFormState]=useState(initState);
    const [load, setLoad]=useState(false);

    const {companyName,aboutCompany,companyAddress,companyWebsite,role,
           experience,salary,location,date,type,skill,highlights,
           description,industryType,department,employmentType,logourl}=formState;

    const handleChange=(e)=>{
        setFormState({...formState, [e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        postData(formState);
        setFormState(initState)
    }


    const postData=(data)=>{
        setLoad(true);
        fetch(`https://sapphire-elephant-vest.cyclic.app/job/add`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then((res)=>{
            setLoad(false);
            console.log(res);
            alert("Job Posted Successfully !")
        })
        .catch((err)=>{
            console.log(err.message);
            setLoad(false);
        })
       }

  return load ? <Text fontSize={'40px'} as={'b'} >Loading...</Text> : (
    <div>
        <br />
        <br />
        <Text fontSize='25px' as='b' >Post your job</Text>
      <div className={Styles.container}>
        <FormControl>
           
                <Input type='text' placeholder='Company Name' name='companyName' value={companyName} onChange={handleChange} />
                    <br />
                    <br />
           
                <Input type='text' placeholder='About Company' name='aboutCompany' value={aboutCompany} onChange={handleChange} />
                    <br />
                    <br />
         
                <Input type='text' placeholder='Company Address' name='companyAddress' value={companyAddress} onChange={handleChange} />
                    <br />
                    <br />
        
                <Input type='text' placeholder='Company Website' name='companyWebsite' value={companyWebsite} onChange={handleChange} />
                    <br />
                    <br />
               
                <Input type='text' placeholder='Role' name='role' value={role} onChange={handleChange} />
                    <br />
                    <br />
           
                <Input type='text' placeholder='Experience' name='experience' value={experience} onChange={handleChange} />
                    <br />
                    <br />
           
                <Input type='text' placeholder='Salary' name='salary' value={salary} onChange={handleChange} />
                    <br />
                    <br />
           
                <Input type='text' placeholder='Location' name='location' value={location} onChange={handleChange} />
                    <br />
                    <br />
               
                <Input type='date' placeholder='Date' name='date' value={date} onChange={handleChange} />
                    <br />
                    <br />
           
                <Input type='text' placeholder='Nature of work /type' name='type' value={type} onChange={handleChange} />
                    <br />
                    <br />
          
                <Input type='text' placeholder='Skill' name='skill' value={skill} onChange={handleChange} />
                    <br />
                    <br />
          
                <Input type='text' placeholder='Highlights' name='highlights' value={highlights} onChange={handleChange}/>
                    <br />
                    <br />
               
                <Input type='text' placeholder='Description' name='description' value={description} onChange={handleChange}  />
                    <br />
                    <br />
          
                <Input type='text' placeholder='IndustryType' name='industryType' value={industryType} onChange={handleChange} />
                    <br />
                    <br />
            
                <Input type='text' placeholder='Department' name='department' value={department} onChange={handleChange} />
                    <br />
                    <br />

                <Input type='text' placeholder='employmentType' name='employmentType' value={employmentType} onChange={handleChange} />
                    <br />
                    <br />

                <Input type='text' placeholder='Logo Url' name='logourl' value={logourl} onChange={handleChange} />
                    <br />
                    <br />
            

            <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    onClick={handleSubmit}
                >Submit
          </Button>
            
            </FormControl>
      </div>
    </div>
  )
}

export default EmployersPage
