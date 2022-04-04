import React,{useState}from 'react'
import { Link } from "react-router-dom";
import "./sidebar.css"
import {SideBarItems} from "../SideBar/SidebarItems"
import profileImage from "../images/Lori Harvey.jpg"


function SideBar({open}) {
  const [click,setClick]=useState(false)

  const handleClick=()=>setClick(true)
  
  return (
    <div className={open? "side-bar open":"side-bar"}>
 <div className="top-section">
 <a href="/"><img className="side-bar-img-profile" src={profileImage} alt="profileImage"/></a>
 <div className="side-bar-text">
 <p className="side-bar-Acc">Your Account </p>
 <p className="side-bar-AccName">Lory Harvey </p>
 </div>
 
 </div> 
 <div className="middle-section">
 <ul className="sidebar-items">
 {SideBarItems.map((item,index)=>{
   return (
    <li key={index} className="sidebar-list-items">
    <Link to={item.path} className={item.cName} onClick={handleClick} >
   <div className="side-bar-icons">{item.icon}</div> 
<div className="side-bar-text">{item.title}</div>
    </Link>
    </li>
   )
 })}

 </ul>

 </div> 
 
 <div className="bottom-section">
 <ul className="bottom-section-links">
 <li><Link to="/appearance">Appearance</Link></li>
 <li><Link to="/settings">Settings</Link></li>
 </ul>
 </div> 
 </div>
  )
}

export default SideBar