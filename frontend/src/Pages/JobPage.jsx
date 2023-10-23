import React, { useEffect, useState } from 'react';
import {Text,Image ,Button,Link } from '@chakra-ui/react';
import Styles from "../Styles/Jobs.module.css";
import {useDispatch,useSelector} from "react-redux";
import { getTodoSuccessAction } from '../Redux/action';



function JobPage() {
    const [load, setLoad]=useState(false);
    const [page, setPage]=useState(1);
    const {data}=useSelector((store)=>{
        return store;
    })
    const dispatch=useDispatch();

    useEffect(()=>{
        getData(page)
    },[page])

    const getData=(page)=>{
        setLoad(true);
        fetch(`https://sapphire-elephant-vest.cyclic.app/job?page=${page}&limit=5`)
        .then(res=>res.json())
        .then((res)=>{
            dispatch(getTodoSuccessAction(res))
            setLoad(false);
            // console.log(res);
    
        })
        .catch((err)=>{
            console.log(err.message);
            setLoad(false);
        })
       }

       const handlePaginetion=(val)=>{
        if(val==-1 && page<=1){
            setPage(1);
        }
        else{
            setPage(page+val)
        }
       }

  return load ? <Text fontSize={'40px'} as={'b'} >Loading...</Text> :(
    <>
    <div className={Styles.container} >
     
     <div className={Styles.leftContainer} >

        {data.length && data.map((el)=>{
            return  <Link href={`/jobs/${el._id}`} key={el._id}>
            <div className={Styles.leftChild} >
                <div style={{display:"flex",width:"100%",justifyContent:"space-around"}}>
                    <div style={{width:'70%'}}>
                        <Text fontSize='20px'  as='b' >Company : {el.companyName}</Text>  
                        <Text fontSize='20px' >Role : {el.role}</Text>
                        <Text fontSize='16px' >Experience : {el.experience}</Text>
                        <Text fontSize='16px' >Salary : {el.salary}</Text>
                        <Text fontSize='16px' >Location : {el.location}</Text>
                        <Text fontSize='16px' >Posted : {el.date}</Text>
                        <Text fontSize='16px' >Type : {el.type}</Text>
                        <Text fontSize='16px' >Tech : {el.skill}</Text>
    
                    </div>
    
                    <div style={{border:"1px solid gray", width:'10%',height:"100px",borderRadius:"3px"}}>
                        <img src={el.logourl} 
                             alt="" 
                             style={{width:"100%",height:"100%"}} />
                    </div>
                </div>
            </div>
            </Link>
        })}
       
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

    <div className={Styles.pagination}>
    <Button colorScheme='teal' size='lg' w='150px' onClick={()=>{handlePaginetion(-1)}}>Prev</Button>
    <Button colorScheme='teal' variant='ghost' size='lg'>{page}</Button>
    <Button colorScheme='teal' size='lg'  w='150px' onClick={()=>{handlePaginetion(1)}}>Next</Button>
    </div>
                
    </>
  )
}

export default JobPage
