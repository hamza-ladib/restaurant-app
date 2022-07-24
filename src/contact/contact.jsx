import './contact.css';
import React from 'react';
import {AiOutlineComment } from "react-icons/ai";
import {AiOutlineUser } from "react-icons/ai";
import {AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineSend} from "react-icons/ai";
import {BiHappy, BiHappyAlt} from "react-icons/bi";
import {motion } from "framer-motion";
import {BiAngry} from "react-icons/bi";
import {useState} from "react";
import NavBar from '../elements/navbar';
function Contact() {
  const [rate,setRate]=useState("Unset");
  const [bg,setBg]=useState(" linear-gradient(180.69deg, #4e3399 10.95%,#A26BFC 58.86%,#4e3399 99.4)");
  return (
    <div className='contact'>
    <div className='container' style={{backgroundImage:bg,}} >
        <div className='userRate' >
          <motion.div
animate={{scale:[1.2,1]}}  
transition={{ delay:1,duration: 1, type: "spring", stiffness: 300,yoyo:Infinity}}
          ><BiAngry onClick={()=>{setBg("linear-gradient(315deg, #feae96 20%, #fe0944 74%)");setRate("angry");}}/>
          </motion.div>


          <motion.div
          animate={{scale:[1.2,1],transition:{delay:0,duration: 1, type: "spring", stiffness: 300,yoyo:Infinity }  }}
          
          
          
          > <BiHappy onClick={()=> {setBg("linear-gradient(315deg, #fffcf9 0%, #ffd166 74%)");setRate("happy");}}/>
            
            </motion.div> 
          </div>
        <motion.div whileTap={{scale:1.1}} whileHover={{scale:1.1 }}  className="userName"><AiOutlineUser className='icon'/>
         <motion.input   type="email"     placeholder=' full name'/></motion.div>
         <motion.div whileTap={{scale:1.1}} whileHover={{scale:1.1 }} className="userEmail"> <AiOutlineGoogle className='icon'/><input type="email"    placeholder='example@gmail.com'/></motion.div>
         <motion.div whileTap={{scale:1.1}} whileHover={{scale:1.1 }}  className="userText"><AiOutlineComment className='icon'/><textArea placeholder="write something"></textArea></motion.div>
         <motion.div whileTap={{scale:1.1}} whileHover={{scale:1.1 }} className="userSubmit"><AiOutlineSend className='icon'/><button>send</button></motion.div>
        
        
    </div>
    <NavBar/>
    
    
    </div>
  )
}

export default Contact