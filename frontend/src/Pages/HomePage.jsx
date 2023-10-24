import React, { useState } from 'react';
import {Text,Box,Input,Button,Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import { getTodoSuccessAction } from '../Redux/action';
import Styles from "../Styles/Jobs.module.css";

const arr=['Remot >','MNC >','Marketing >','Fresher Supply >','HR >' ];
const arr2=['Software &...>','Startup >','Sales >','Engineering >','Banking &...>' ];

function HomePage() {
    const [search, setSearch]=useState("");
    const [load, setLoad]=useState(false);

    const navigate=useNavigate();

    const {data}=useSelector((store)=>{
        return store;
    })
    const dispatch=useDispatch();


    const handleChange=(e)=>{
        setSearch(e.target.value);
    }

    const handleSearch=()=>{
        if(search){
            getData(search)
        }
    }

    const getData=(val)=>{
        setLoad(true);
        fetch(`https://sapphire-elephant-vest.cyclic.app/job?role=${val}`)
        .then(res=>res.json())
        .then((res)=>{
            dispatch(getTodoSuccessAction(res))
            setLoad(false);
            if(res.length===0){
                alert("No result found, try with another keyword")
            }
    
        })
        .catch((err)=>{
            console.log(err.message);
            setLoad(false);
        })
       }

       

  return load ? <Text fontSize={'40px'} as={'b'} >Loading...</Text> : (
    <div>
      <div style={{marginTop:"5%"}}>
        <Text fontSize='50px' as='b' > Find your dream job now</Text>
        <Text fontSize='30px' > 5 lakh+ jobs for you to explore</Text>
      </div>

        <br />
        <br />
      <Box  w='60%' marginLeft='20%'  display="flex">
        <Input 
            size='lg' 
            h='70px' 
            variant='filled'  
            placeholder='Search jobs' 
            name="username"
            borderLeftRadius='50px'
            borderRightRadius='0px' 
            value={search}
            onChange={handleChange}    />

        <Button 
        colorScheme='teal' 
        w='20%' 
        h='68px' 
        borderRightRadius='50px'
        borderLeftRadius='0px'
        onClick={handleSearch}
        >Search</Button>
      </Box>


    <div style={{display:data.length ? "none":"block"}}>

      <Box 
        w='80%' 
        h='70px'
        marginLeft='10%'
        marginTop='5%'
        display='flex'
        justifyContent='space-around'
        >
        {arr.map((el,i)=>{
            return <Button key={i} 
                w='18%' 
                h='70px'
                display='flex' 
                alignItems='center' 
                justifyContent='center' 
                border='1px solid gray' 
                borderRadius='10px'
                cursor='pointer'
                background='white'
                onClick={()=>{navigate("/jobs")}}
                >{el}</Button>
            })}
      </Box>

      <Box 
        w='70%' 
        h='70px'
        marginLeft='15%'
        marginTop='1%'
        display='flex'
        justifyContent='space-around'
        >
             {arr2.map((el,i)=>{
                 return <Button key={i} 
                 w='18%' 
                 h='70px'
                 display='flex' 
                 cursor='pointer'
                 alignItems='center' 
                 justifyContent='center' 
                 borderRadius='10px' 
                 border='1px solid gray'
                 background='white'
                 >{el}</Button>
                })}
      </Box>
    </div>

      <div className={Styles.leftContainer} style={{marginLeft:"16%",marginTop:"5%", display:data.length ? "block":"none"}} >

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

    </div>
  )
}

export default HomePage
