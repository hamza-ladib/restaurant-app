import React from 'react'
import './about.css'
import restaurant  from '../assets/restaurant1.jpg'
import { useState} from 'react'
import { motion, useMotionValue } from "framer-motion"

export default function About() {
  const [imgEffectX,setimgeffectX]=useState(0);
  const [imgEffectY,setimgeffectY]=useState(0);
  const [i,s]=useState(0);

  return (
    <div    className='about'   onMouseMove={(e)=>{
      setimgeffectX((e.clientX/window.innerWidth)*20);
      setimgeffectY((e.clientY/window.innerHeight)*20);
      s(e.clientX);
      console.log(i);

    }}  >
      <div className='container'>
       <p className='paragraph'>
       <div className='title'>
        <motion.div  
     
          transition={{ delay:1, duration: 1, type: "spring", stiffness: 300}}
          style={{y:imgEffectX, x:imgEffectY}}
          key={[imgEffectX,imgEffectY]}    
        >About Us </motion.div>


      <div className=' textoContainer'>
<motion.div  className='texto'
        initial={{y:-500}}
          animate={{y:0}}  
          transition={{ delay:2, duration: 1, type: "spring", stiffness: 300}}
    ><span className='textosp' >Our  </span>  restaurant is <span className='textosp'>Unique</span></motion.div>

<motion.div  className='texto'
        initial={{y:500}}
          animate={{y:0}}  
          transition={{ delay:3, duration: 1, type: "spring", stiffness: 300}}
    ><span className='textosp'>Our  </span>  proriety is your  <span className='textosp'>Comfort</span></motion.div>

<motion.div  className='texto'
        initial={{y:-500}}
          animate={{y:0}}  
          transition={{ delay:4, duration: 1, type: "spring", stiffness: 300}}
    ><span className='textosp'>Visit Us :</span> restaurant  salam ouled berhil <span className='textosp'>Or</span></motion.div>



<motion.div  className='texto'
        initial={{y:500}}
          animate={{y:0}}  
          transition={{ delay:5, duration: 1, type: "spring", stiffness: 300}}
    ><span className='textosp'>Call  Us :</span> +212 6 22 93 08 45  <span className='textosp'> for your commands</span></motion.div>
</div>






















       
        </div>
       
      
        </p>
      <motion.img className='img' src={restaurant}
      style={{x:imgEffectX, y:imgEffectY}}
      key={[imgEffectX,imgEffectY]}
      ></motion.img>
      </div>
      </div>
  )
}
