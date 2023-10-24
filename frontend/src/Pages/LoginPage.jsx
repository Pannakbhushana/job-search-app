import React, { useState } from 'react'
import {Flex,Box,FormControl,FormLabel,Input,Checkbox,Stack,Button,Heading,Text,useColorModeValue,Link} from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../Components/AuthContext';
import { useNavigate } from 'react-router-dom';


const initState={
    email:"",password:""
}

export default function LoginPage() {
    const {state,LoginFromAuth,logoutFromAuth}=useContext(AuthContext);
    const [formState, setFormState]=useState(initState);
    const {email,password}=formState;
    const [load, setLoad]=useState(false);
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setFormState({...formState, [e.target.name]:e.target.value});
    }

    const handleLogin=()=>{
      if(email && password){
        postData(formState);
      }
      else{
        alert("Invalid Input")
      }
        setFormState(initState)
        
    }

    const handleLogOut=()=>{
        logoutFromAuth()
    }
   
    const postData=(data)=>{
      setLoad(true)
      fetch(`https://sapphire-elephant-vest.cyclic.app/userauth/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then((res)=>{
        setLoad(false)
          console.log(res);
          if(res.token){
            LoginFromAuth()
            navigate("/jobs")
          }
          else{
            alert("Wrong Credentials !")
          }
      })
      .catch((err)=>{
          console.log(err.message);
          setLoad(false)
      })
     }

  return (
    <><Text fontSize={'40px'} as={'b'} display={load ? "block":"none"}>Loading...</Text>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      display={load ? "none":"block"}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login to your account</Heading>
         
        </Stack>
        <Box
        w={'200%'}
        marginLeft={'-50%'}
        
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>


            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='Email'onChange={handleChange} name="email" value={email} />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder='Password' onChange={handleChange} name="password" value={password} />
            </FormControl>


            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link href='/usersignup'><Text color={'blue.400'}>Go to SignUp  page</Text></Link>
                
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} 
                onClick={handleLogin}
                >
                Sign in
              </Button>

              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogOut}
                >
                Sign out
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
                  </>
  )
}