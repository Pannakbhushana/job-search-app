import React, { useState } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { useContext } from 'react';
import { EmployerAuthContext } from '../Components/EmployerAuthContext';
import { useNavigate } from 'react-router-dom';

const initState={
    email:"",password:""
}

export default function EmployLogin() {
    const {Employstate,EmployerLogin,EmployerLogout}=useContext(EmployerAuthContext);
    const [formState, setFormState]=useState(initState);
    const {email,password}=formState;
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setFormState({...formState, [e.target.name]:e.target.value});
    }

    const handleLogin=()=>{
        EmployerLogin()
        navigate("/employers")
    //   postData(formState);
    //     setFormState(initState)
        
    }

    const handleLogOut=()=>{
        EmployerLogout()
    }
   
    const postData=(data)=>{
 
      fetch(`https://cute-rose-eagle-cuff.cyclic.cloud/authentication/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then((res)=>{
          
          console.log(res);
        //   LoginFromAuth()
          alert("login successful")
      })
      .catch((err)=>{
          console.log(err.message);
  
      })
     }

    

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
   
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Employer Login </Heading>
         
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
                <Link href='/employsignup'><Text color={'blue.400'}>Go to SignUp  page</Text></Link>
                
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
  )
}