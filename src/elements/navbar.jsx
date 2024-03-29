import React from 'react';
import './elements.css';
import { useState } from "react";
/// nav icons 
import { MdHome } from "react-icons/md";
import { motion } from "framer-motion"
import {CgBoy } from "react-icons/cg";

import {BiBookOpen } from "react-icons/bi";
import {BiDialpad} from "react-icons/bi";
import {AiOutlinePhone } from "react-icons/ai";


// social icons 
import {AiFillFacebook } from "react-icons/ai";
import {AiFillInstagram } from "react-icons/ai";
import {AiFillGooglePlusSquare} from "react-icons/ai";
////////////////
import { useNavigate } from 'react-router-dom';


export default function NavBar(props) {
const [seeNav, hideNav] =useState(false);
const [hovered,notHovered]=useState(false);
const socialsAnimationHover = { hover: { scale: 1.3 } ,start:{y:-100},animate:{y:0,transition:{delay :0.5,duration: 2, type: "spring", stiffness: 300}}};
  let navigate=useNavigate();
return (
  <motion.div className='navbar'
  
  
  >
      <motion.ul className='socials' animate={{display:props.showContact?"none":"flex"}}> 
  <motion.li
   variants={socialsAnimationHover}
  animate="animate"
  initial="start"
  whileHover="hover"
  ><a href='www.facebook.com'><  AiFillFacebook     className='socialIcon' /></a></motion.li>
  <motion.li
     variants={socialsAnimationHover}
     animate="animate"
      initial="start"
     whileHover="hover"
  ><a href='www.instagram.com'><AiFillInstagram     className='socialIcon'/></a></motion.li>
   <motion.li
   variants={socialsAnimationHover}
  animate="animate"
  initial="start"
  whileHover="hover"
  ><a href='www.gmail.com'><AiFillGooglePlusSquare  className='socialIcon'/></a></motion.li>
</motion.ul>


 <motion.ul  
 className='nav'  
  
 layout
  onHoverStart={()=>{notHovered(true)}}
  onHoverEnd={()=>{notHovered(false)}}
  drag
 initial={{ y: -600}} 
 animate={{opacity:hovered?1:0.4, y:0, transition:{duration: 1, type: "spring", stiffness: 300}}}>
          
{ seeNav && <motion.li onClick={ ()=>{
  if(seeNav)
  navigate('/about') 
}}
          whileHover={{scale :1.1}}
          animate={{ y:-80 ,x:-22}}  
          transition={{ duration: 1, type: "spring", stiffness: 300}}
          ><a ><CgBoy   className='icon'/></a></motion.li>}
{ seeNav && <motion.li 

onClick={ ()=>{
  if(seeNav)
  navigate('/contact') 
}}

          whileHover={{scale :1.1}}
          animate={{ y:-22, x:30}}  
          transition={{ duration: 1, type: "spring", stiffness: 300}}
          ><a><AiOutlinePhone className='icon'/></a></motion.li>}
{ seeNav && <motion.li 

onClick={ ()=>{
  if(seeNav)
  navigate('/menu') 
}}
          whileHover={{scale :1.1}}
          animate={{ y:-22, x:-80}}  
          transition={{ duration: 1, type: "spring", stiffness: 300}}
          >  <a><BiBookOpen className='icon' /></a></motion.li>}
{ seeNav && <motion.li    

onClick={ ()=>{
  if(seeNav)
  navigate('/') 
}}
          whileHover={{scale :1.1}}
          animate={{ y:30, x:-22}}  
         
          transition={{ duration: 1, type: "spring", stiffness: 300}}
          ><a><MdHome className='icon'/></a></motion.li>}


          <li  onClick={()=>hideNav(!seeNav)}><a><BiDialpad className='icon'/></a></li>
        </motion.ul>
    </motion.div>
  )
}
