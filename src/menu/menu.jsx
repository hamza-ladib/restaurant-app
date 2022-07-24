import React from 'react'
import Card from "./card"
import "./menu.css"

import coldDrinks from "../assets/menu/pngwing.com (3).png"
import cola from "../assets/menu/pngwing.com (7).png"
import salade from "../assets/menu/pngwing.com (12).png"
import hotDrinks from "../assets/menu/pngwing.com (20).png"
import plate from "../assets/menu/pngwing.com (23).png"
import sandwich from "../assets/menu/pngwing.com.png"
import pizza from "../assets/menu/pizza-7972.png"




function Menu() {
let item = function(id,type,img,listItems,prices){
  this.id=id;
  this.type=type;
  this.img=img;
  this.listItems=listItems;
  this.prices=prices}
  let foods=[];
  return (
    <div className='menu'>
        <Card v={cola}/>
        <Card v={salade}/>
        <Card v={sandwich}/>
        <Card v={pizza}/>
        <Card v={coldDrinks}/>
        <Card v={hotDrinks}/>
        <Card v={plate}/>
  
    </div>
  )
}

export default Menu;