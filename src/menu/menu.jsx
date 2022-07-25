import React, { useState,useEffect } from 'react'
import Card from "./card"
import "./menu.css"
import Navbar from '../elements/navbar'
import { AiOutlineHeatMap } from "react-icons/ai";
import {motion} from "framer-motion"


import coldDrinks from "../assets/menu/pngwing.com (3).png"
import burger from "../assets/menu/b.png"
import cola from "../assets/menu/pngwing.com (7).png"
import salade from "../assets/menu/pngwing.com (12).png"
import hotDrinks from "../assets/menu/pngwing.com (20).png"
import plate from "../assets/menu/pngwing.com (23).png"
import sandwich from "../assets/menu/pngwing.com.png"
import pizza from "../assets/menu/pizza-7972.png"
function Menu() {
  let listitem=[
    {id :1,name:"some item name",price:"3$"},
    {id :2,name:"some item name",price:"3$"},
    {id :3,name:"some item name",price:"3$"},
    {id :4,name:"some item name",price:"3$"},
    {id :5,name:"some item name",price:"3$"},
    {id :6,name:"some item name",price:"3$"},
    {id :7,name:"some item name",price:"3$"},
    {id :8,name:"some item name",price:"3$"},
    {id :9,name:"some item name",price:"3$"},
    {id :10,name:"some item name",price:"3$"}
   
  ]
let item = function(id,type,img,listItems){
  this.id=id;
  this.type=type;
  this.img=img;
  this.listItems=listItems;
  }
  let foods=[
 new item(1,"burgers",burger,listitem),
 new item(2,"plates",plate,listitem),
 new item(3,"cola",cola,listitem),
 new item(4,"salades",salade,listitem),
 new item(5,"cold Drinks",coldDrinks,listitem),
 new item(6,"pizzas",pizza,listitem),
 new item(7,"sandwiches",sandwich,listitem),
 new item(8,"hot Drinks",hotDrinks,listitem)
];
let [selected,setSelected]=useState([]);

let showcont=true;
let [number,setNumber]=useState(0);
let [total,setTotal]=useState(0);
let [show,hide]=useState(false);
const [hovered,notHovered]=useState(false);
let calculTotal=()=>{
  let total=0;
  for(let i=0;i<selected.length;i++){
    total+=Number(selected[i].price.substring(0,selected[0].price.length-1));
  }
  return total;
}
useEffect(()=>{
  setNumber(selected.length);
  setTotal(calculTotal);
  
},[selected])
  return (
    <div className='menu'>
      <div className='foods'> 
      { foods.map((food)=>{return (<Card key={food.id}
       item={food} 
       select={
        (newSelection)=>{
          setSelected([...selected,newSelection]);
        }


       }
       />)}) }</div>
      <Navbar showContact={showcont}/>

















      <motion.div className="selectedList"
layout
onHoverStart={()=>{notHovered(true)}}
onHoverEnd={()=>{notHovered(false)}}
drag
initial={{ y: -600}} 
animate={{opacity:hovered?1:0.4, y:0, transition:{duration: 1, type: "spring", stiffness: 300}}}>
        
          
      
        <div className='showingPart' onClick={()=>{hide(!show);} }>
          <div className='middle'><AiOutlineHeatMap/><p className='p'>{number}</p></div>
        </div> 
        {show && <motion.div className='hiddenPart'
        


  
        initial={{ y: -600}} 
        animate={{y:0, transition:{duration: 1, type: "spring", stiffness: 300}}} >
            <div className="allSelected">
           {      
            selected.map((item)=>{
            return(<div className='selectedItem'> 
            <p>{item.id}</p>
             <p>{item.price}</p> 
             <button
              onClick={()=>{
                setSelected(
                selected.filter((x)=>{
                  return x.id!=item.id
                }))
              }}
             >delete</button></div>)
             }) }
              </div>
                  <p className='total'>total :{total}$</p>
                  <button className='commander'>Commander</button>
          </motion.div>}
   
    
    </motion.div>
    </div>
  )
}

export default Menu;