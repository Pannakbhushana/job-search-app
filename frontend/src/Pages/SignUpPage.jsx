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
import { useContext, useState } from 'react';
import { AuthContext } from '../Components/AuthContext';
import { useNavigate } from 'react-router-dom';


const initState={
    username:"",email:"",password:""
}

export default function SignUpPage() {
    const {state,LoginFromAuth,logoutFromAuth}=useContext(AuthContext);
    const [formState, setFormState]=useState(initState);
    const { username,avatar,email,password}=formState;
    const [load, setLoad]=useState(false);
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setFormState({...formState, [e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formState.username && formState.email && formState.password){
          postData(formState);
        }
        else{
          alert("Invalid Input")
        }
        setFormState(initState)
        
    }


    const postData=(data)=>{
      setLoad(true);
      fetch(`https://sapphire-elephant-vest.cyclic.app/userauth/register`,{
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
          setLoad(false);
      })
     }


  return  (
    <><Text fontSize={'40px'} as={'b'} display={load ? "block":"none"}>Loading...</Text>
    <Flex
      minH={'100vh'}
      display={load ? "none":"block"}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign Up</Heading>
          
        </Stack>
        <Box
        w={'200%'}
        marginLeft={'-50%'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>


            <FormControl >
              <FormLabel>Username</FormLabel>
              <Input placeholder='Username' onChange={handleChange} name="username" value={username} />
            </FormControl>

          

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input placeholder='Email'onChange={handleChange} name="email" value={email} />
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
                <Link href='/userlogin'><Text color={'blue.400'}>Go to Login page</Text></Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>


        </Box>
      </Stack>
    </Flex>
    </>
  )
              
}