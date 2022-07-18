import React from 'react'
import './home.css'
import { motion } from "framer-motion"
import burger from "../assets/brg.png"
import chicken from "../assets/Chicken.png"
import salad from "../assets/salad.png"
import nuggets from '../assets/nuggets.png'

export default function home() {
    let text1 =["fik jou3 ?","matsnaach .. !","commander db "];
const textAnimation = {start:{x:800},animate:{x:0,transition:{delay :1.5,duration: 1, type: "spring", stiffness: 300}}};
const imageAnimation = {start:{x:800},animate:{x:0,transition:{delay :1.5,duration: 1, type: "spring", stiffness: 300}}};
const images =[]


  return (
    <div className='home'>
    <div className='text'>
       {text1.map((txt)=>
     <motion.p
     variants={textAnimation}
     animate="animate"
     initial="start"
     >{txt}</motion.p>
        )}
        </div>
    <img src={nuggets} className='img'/>
    </div>
  )
}
