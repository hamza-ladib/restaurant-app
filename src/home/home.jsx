import React, { useState ,useEffect} from 'react'
import './home.css'
import { motion } from "framer-motion"
import burger from "../assets/brg.png"
import chicken from "../assets/Chicken.png"
import salad from "../assets/salad.png"
import nuggets from '../assets/nuggets.png'
import Navbar from '../elements/navbar';


export default function Home() {
    let text1 =["fik jou3 ?","matsnaach .. !","commander db "];
const textAnimation = {start:{x:800},animate:{x:0,transition:{delay :1.5,duration: 1, type: "spring", stiffness: 300}}};
const imageAnimation = {start:{scale :1},animate:{scale:[1,1.1,1],transition:{ repeat: Infinity, repeatDelay: 1,duration: 1.5, type: "spring", stiffness: 300}}};
const images =[burger , salad,chicken,nuggets];
  const [currentImage,nextImage]=useState(0);
  useEffect(() => {
 
  const interval = setInterval(() => {


  nextImage(img =>img+1);

  }, 2000); 
  return () => clearInterval(interval);
}, []);
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
        <div className='imghold' >
    <motion.img 
     variants={imageAnimation}
     animate="animate"
     initial="start"
    src={images[currentImage%4]} className='img'></motion.img>
    </div>
    <Navbar />
    </div>
  )
}
