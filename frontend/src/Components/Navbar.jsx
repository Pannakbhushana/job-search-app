import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from "../Styles/Navbar.module.css";
import {Text  } from '@chakra-ui/react'

const paths=[
{title:"Jobs",path:"/jobs"},
,{title:"Employer",path:"/employers"},
{title:"Login/Register",path:"/userlogin"}
]

function Navbar() {

  return (
    <div className={Styles.container}>
      <NavLink to="/" ><Text fontSize='40px' as='b'   color='white'>Beekin-Job</Text></NavLink>
      
      {paths.map((el,i)=>{
        return <NavLink key={i} to={el.path} className={({isActive})=>{
            return isActive ? Styles.active :Styles.default
        }}>{el.title}</NavLink>
      })}
    </div>
  )
}

export default Navbar
