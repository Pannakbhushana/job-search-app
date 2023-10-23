import React from 'react';
import {Text,Image ,Button,Link,Box } from '@chakra-ui/react';
import Styles from "../Styles/Jobs.module.css";


const data={
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
}


function SingleServicePage() {
  return (
    <div className={Styles.container}>
     
     <div className={Styles.leftContainer} >
      
        <div className={Styles.leftChild} >
            <div style={{display:"flex",width:"100%",justifyContent:"space-around"}}>
                <div style={{width:'70%'}}>
                    <Text fontSize='20px'  as='b' >Company : Beekin pvt. ltd</Text>  
                    <Text fontSize='20px' >Role : Backend Engineer</Text>
                    <Text fontSize='16px' >Experience : 0-1 yr</Text>
                    <Text fontSize='16px' >Salary : 6 LPA</Text>
                    <Text fontSize='16px' >Location : Bangaluru</Text>
                    <Text fontSize='16px' >Posted : 23-10-2023</Text>
                    <Text fontSize='16px' >Type : Remote</Text>
                    <Text fontSize='16px' >Tech : HTML ,Css, Reat, javascript</Text>

                </div>

                <div style={{border:"1px solid gray", width:'10%',height:"100px",borderRadius:"3px"}}>
                    <img src="https://img.naukimg.com/logo_images/groups/v1/1599918.gif" 
                         alt="" 
                         style={{width:"100%",height:"100%"}} />
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
                Wonksknow Technologies India Private Limited, a subsidiary of Wonksknow LLC USA, is 
               looking for highly energetic and talented candidates for a challenging role as a Campus Ambassador.
               understanding and promoting College.dev app which is one of Wonksknow LLCs products.
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
