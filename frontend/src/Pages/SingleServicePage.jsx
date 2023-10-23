import React, { useEffect, useState } from 'react';
import {Text,Image ,Button,Link,Box } from '@chakra-ui/react';
import Styles from "../Styles/Jobs.module.css";
import {useParams} from "react-router-dom";

const initState={
    // companyName:"",
    aboutCompany:"",
    companyAddress:"",
    companyWebsite:"",
    // role:"",
    // experience:"",
    // salary:"",
    // location:"",
    // date:"",
    // type:"",
    // skill:"",
    highlights:"",
    // description:"",
    industryType:"",
    department:"",
    employmentType:"",
    logourl:"" 
   }

function SingleServicePage() {
    const [data, setData]=useState({});
    const [load, setLoad]=useState(false);
    const {id}=useParams()

    useEffect(()=>{
        getData(id);
    },[])

    const getData=(id)=>{
        setLoad(true);
        fetch(`https://sapphire-elephant-vest.cyclic.app/job?_id=${id}`)
        .then(res=>res.json())
        .then((res)=>{
            setData(res[0]);
            setLoad(false);
            console.log(res[0]);
    
        })
        .catch((err)=>{
            console.log(err.message);
            setLoad(false);
        })
       }
    
  return load ? <Text fontSize={'40px'} as={'b'} >Loading...</Text> :  (
    <div className={Styles.container}>
     
     <div className={Styles.leftContainer} >
      
        <div className={Styles.leftChild} >
            <div style={{display:"flex",width:"100%",justifyContent:"space-around"}}>
                <div style={{width:'70%'}}>
                <Text fontSize='20px'  as='b' >Company : {data.companyName}</Text>  
                        <Text fontSize='20px' >Role : {data.role}</Text>
                        <Text fontSize='16px' >Experience : {data.experience}</Text>
                        <Text fontSize='16px' >Salary : {data.salary}</Text>
                        <Text fontSize='16px' >Location : {data.location}</Text>
                        <Text fontSize='16px' >Posted : {data.date}</Text>
                        <Text fontSize='16px' >Type : {data.type}</Text>
                        <Text fontSize='16px' >Tech : {data.skill}</Text>

                </div>

                <div style={{border:"1px solid gray", width:'30%',height:"200px",borderRadius:"5%"}}>
                    <img src={data.logourl}
                         alt="" 
                         style={{width:"100%",height:"100%",borderRadius:"5%"}} />
                </div>
            </div>
          
            <div className={Styles.applySection}>
                <Button colorScheme='teal' size='lg' w='150px' borderRadius='50px' variant='outline' >Save</Button>
                <Box w='50px'></Box>
                <Button colorScheme='teal' size='lg' w='150px' borderRadius='50px'>Apply</Button>
            </div>
        </div>
     
        <div className={Styles.leftChild}>
            <Text fontSize='16px'  as='b' >Job description</Text> 
            <Text fontSize='16px' >
                {data.description}
             </Text> 

             <br />
             <br />
             <Text fontSize='16px'  as='b' >Roles and responsibilities:</Text> 
                <p>1. Spread awareness about the company, our app and portal.</p>
                <p>2. Impact Students careers by promoting our Brand.</p>
                <p>3. Need to do whatsapp promotions.</p>
                <p>4. Do Campaigning on the college campus.</p>
                <p>5. Building a network of students in your college using online strategies.</p>
                <p>6. Handing out Flyers, Posters and set up Standees.</p>
                <p>7. Collect feedback and report it to us.</p>

             <br />
             <br />
             <Text fontSize='16px'  as='b' >Requirements:</Text>   
             <p>Good Communication skills.</p> 
             <p>Confident and friendly</p> 
             <p>Critical thinking, logical analysis and ability to work independently, to prioritize and take initiative.</p> 
             <p>Should be able to complete the tasks within a given deadline.</p> 
             <p>Should be comfortable with Public speaking to host events and address groups of people.</p> 

             <br />
             <br />
             <Text fontSize='16px'  as='b' >Benefits:</Text>   
             <p>Flexible schedule.</p> 
             <p>Chance to win a paid Internship at Wonksknow.</p>
             <p>Campus ambassador Certificate</p>
             <p>Letter of Recommendation</p>
             <p>Incentives</p>
             <p>Wonksknow goodies.</p>
             <p>Free Python Program for 3 months.</p>
             

        </div>

        
        
     </div>




     <div className={Styles.rightContainer} >
        <div className={Styles.rightChild} >
            <Text fontSize='20px' as='b' >Jobs you might be interested in</Text>
            <br />
            <br />
            <Text fontSize='16px' color='gray' >Campus Ambassador (Only Bangalore College Students may apply)</Text>
            <br />
            <Text fontSize='16px' color='gray' >Wonksknow Technologies</Text>
            <br />
            <Button colorScheme='gray' size='md' borderRadius='20px' >Remote</Button>
            <Button colorScheme='gray' size='md' borderRadius='20px' >Bangalore/Bengaluru</Button>
            <br />

            <Text fontSize='16px' color='gray' >Preferred Salary</Text>
            <br />
            <Button colorScheme='gray' size='md' borderRadius='20px' >6 LPA</Button>
        </div>


        <div className={Styles.rightChild} >
            <Text fontSize='20px' as='b' >Join webinar for career growth</Text>
            <br />
            <br />
            <Text fontSize='16px' color='gray' >Powered by - Coding Ninja</Text>
            
            <Image
                borderRadius='10px'
                boxSize='100%'
                height='200px'
                src='https://www.besanttechnologies.com/wp-content/uploads/2021/05/Python-Full-Stack-VS-Java-Full-Stack.png'
                alt='Dan Abramov'
                />

            <Text fontSize='16px' color='gray' >Career Growth for Data Analyst vs Full Stack Developer vs Non Tech...</Text>
            <Link href='#'><Text color={'blue.400'}>View details</Text></Link>
        </div>


     </div>
        
    </div>
  )
}

export default SingleServicePage
