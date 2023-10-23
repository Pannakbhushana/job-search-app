import React from 'react';
import {Text,Box,Input,Button } from '@chakra-ui/react';

const arr=['Remot >','MNC >','Marketing >','Fresher Supply >','HR >' ];
const arr2=['Software &...>','Startup >','Sales >','Engineering >','Banking &...>' ];

function HomePage() {
  return (
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
            borderRightRadius='0px'     />

        <Button 
        colorScheme='teal' 
        w='20%' 
        h='68px' 
        borderRightRadius='50px'
        borderLeftRadius='0px'
        
        >Search</Button>
      </Box>


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
  )
}

export default HomePage
