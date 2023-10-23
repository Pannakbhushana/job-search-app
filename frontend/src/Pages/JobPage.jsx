import React from 'react';
import {Text,Image ,Button,Link } from '@chakra-ui/react';
import Styles from "../Styles/Jobs.module.css";

function JobPage() {
  return (
    <div className={Styles.container}>
     
     <div className={Styles.leftContainer} >
        <Link href='/jobs/1'>
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
        </div>
        </Link>


        
        
     </div>

     <div className={Styles.rightContainer} >
        <div className={Styles.rightChild} >
            <Text fontSize='20px' as='b' >Add preferences to get matching jobs</Text>
            <br />
            <br />
            <Text fontSize='16px' color='gray' >Preferred job role</Text>
            <Button colorScheme='teal' size='md' borderRadius='20px' variant='outline' >Add</Button>
            <br />
            <br />
            <Text fontSize='16px' color='gray' >Preferred work location</Text>
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

        <div className={Styles.rightChild} >
            <Text fontSize='20px' as='b' >Join webinar for Data Science</Text>
            <br />
            <br />
            <Text fontSize='16px' color='gray' >Powered by - Coding Ninja</Text>
            
            <Image
                borderRadius='10px'
                boxSize='100%'
                height='200px'
                src='https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg'
                alt='Dan Abramov'
                />

            <Text fontSize='16px' color='gray' >Executive Post Graduate Programme in Data Science & AI</Text>
            <Link href='#'><Text color={'blue.400'}>View details</Text></Link>
        </div>

     </div>
        
    </div>
  )
}

export default JobPage
