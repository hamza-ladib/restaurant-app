import React ,{useState }from 'react'
import "./card.css"
import {motion} from "framer-motion"

function Card(props) {
  //////////////////////////////////////////

  const [card,list]=useState(false);
  const [hvr,nothvr]=useState(true);
  return (
    <motion.div className='card'
    layout
    initial={{width:"0px"}}
    animate={{width:card ? "380px" :"300px"}}
     >
      { !card && <motion.div 
      onHoverStart={()=>{nothvr(false)}}
      onHoverEnd={()=>{nothvr(true)}}
      className='item-card'
      animate={{width:"300px"}} 
      >
        <motion.p
        layout
        animate ={{scale:hvr?0:1.1,y:hvr?-10:100}}
        
        
        >burgers</motion.p>
        <motion.img 
            layout
            animate ={{opacity:hvr?1:0.4}}
        src={props.v}></motion.img>
        <motion.button
        layout
        animate ={{scale:hvr?0:1.1}}

         onClick={()=>{list(!card)}}>List</motion.button> 
      </motion.div>}
      {card && <motion.div 
        initial={{width:"0px"}}
      animate={{width:"380px"}} 
      className='item-list'><p>hello</p>
      <button onClick={()=>{list(!card)}}>card</button> 
      </motion.div>}
    </motion.div>
  )
}

export default Card