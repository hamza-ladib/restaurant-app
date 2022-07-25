import React ,{useState }from 'react'
import "./card.css"
import {motion} from "framer-motion"

function Card(props) {
  //////////////////////////////////////////
  let id=props.item.id;
  const [card,list]=useState(false);
  const [hvr,nothvr]=useState(true);
  const [target,setTarget]=useState(300);
  
    return (
    <motion.div className='card' key={id}
    layout
    animate={{width:card ? "380px" :"300px"}}
     >
      { !card  && <motion.div 
      onHoverStart={()=>{nothvr(false)}}
      onHoverEnd={()=>{nothvr(true)}}
      className='item-card'
      animate={{width:"300px"}} 
      >
        <motion.p
        layout
        animate ={{scale:hvr?0:1.1,y:hvr?-10:100}} 
        >{props.item.type}</motion.p>
        <motion.img 
            layout
            animate ={{opacity:hvr?1:0.4}}
        src={props.item.img}></motion.img>
        <motion.button
        layout
        animate ={{scale:hvr?0:1.1}}

         onClick={()=>{list(!card);setTarget(!target)}}>List</motion.button> 
      </motion.div>}
      {card && <motion.div 
        initial={{width:"0px"}}
      animate={{width:"380px"}} 
      className='item-list'>
        <div className='listItem'>
       { props.item.listItems.map((item)=>{return (<div key ={item.id}>
          <motion.input 
          whileTap={{scale:1.3,x:10}}          
          type="checkbox"
          onChange={(event)=>{
            if(event.target.checked){
              props.select(item);
         
           } 

          }}
          
          
          />
          <p>{item.name} </p>
          <h3>{item.price}</h3>
        </div>)}) 
      }
      </div>
        

      <button onClick={()=>{list(!card);setTarget(!target)}}>card</button> 
      </motion.div>}
    </motion.div>
  )
}

export default Card