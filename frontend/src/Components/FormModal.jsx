import React, { useState } from 'react';
import { Textarea } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Select
  } from '@chakra-ui/react'

const initState={
    username:"",title:"",content:"",category:"",date:"",likes:0,comments:[]
}

function FormModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formState, setFormState]=useState(initState);
    const { username,title,content,category,date}=formState;
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    const handleChange=(e)=>{
        setFormState({...formState, [e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formState);
        setFormState(initState)
    }
  
    return (
      <>
    
        <Button size='md' height='48px'width='200px' border='2px' borderColor='green.500' onClick={onOpen}> Create Blog</Button>
       
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your blog</ModalHeader>
            <ModalCloseButton />




            <ModalBody pb={6}>

              <FormControl>
                <FormLabel>User name</FormLabel>
                <Input  placeholder='User name' name="username" onChange={handleChange} value={username} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Title</FormLabel>
                <Input placeholder='Title' name="title" onChange={handleChange} value={title} />
              </FormControl>

            <FormControl mt={4}>
                <FormLabel>Content</FormLabel>
                <Textarea  placeholder='Write your blog here' name="content" onChange={handleChange} value={content} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Category</FormLabel>
                <Select placeholder='Select category ' name="category" onChange={handleChange} value={category}>
                    <option value='Business'>Business</option>
                    <option value='Tech'>Tech</option>
                    <option value='Lifestyle'>Lifestyle</option>
                    <option value='Entertainment'>Entertainment</option>
                </Select>
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Date</FormLabel>
                <Input type='date' name="date" onChange={handleChange} value={date} />
              </FormControl>

            </ModalBody>

  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                Create Blog
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default FormModal