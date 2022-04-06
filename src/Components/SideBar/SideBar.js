import React,{useState}from 'react'
import { Link } from "react-router-dom";
import "./sidebar.css"
import {SideBarItems} from "../SideBar/SidebarItems"
import profileImage from "../images/Lori Harvey.jpg"
import {MdFeedback} from "react-icons/md"
import {MdOutlineBrush} from "react-icons/md"
import {MdSettings} from "react-icons/md"


function SideBar({open}) {
  const [click,setClick]=useState(false)

  const handleClick=()=>setClick(true)
  
  return (
    <aside className={open? "side-bar open":"side-bar"}>
 <div className="top-section">
 <a href="/"><img className="side-bar-img-profile" src={profileImage} alt="profileImage"/></a>
 <div className="side-bar-text-hidden">
 <p className="side-bar-Acc">Your Account </p>
 <p className="side-bar-AccName">Lory Harvey </p>
 </div>
 
 </div> 
 <div className="middle-section">
 <ul className="sidebar-items">
 {SideBarItems.map((item,index)=>{
   return (
    <li key={index} className={click? "sidebar-list-items active":"sidebar-list-items"}>
    <Link to={item.path} className={item.cName} onClick={handleClick} >
   <div className="sidebar-icons">{item.icon}</div> 
<div className="side-bar-text-hidden .link-title">{item.title}</div>
    </Link>
    </li>
   )
 })}
 
 </ul>

 </div> 
 
 <div className="bottom-section">
 <ul className="sidebar-items">
 <li  className={click? "sidebar-list-items active":"sidebar-list-items"}><Link to="/appearance" className="sidebar-Links"><div className="sidebar-icons">
 <MdOutlineBrush size={24}/></div><div className="side-bar-text-hidden">Appearance</div></Link></li>
 
 <li className={click? "sidebar-list-items active":"sidebar-list-items"}><Link to="/settings" className="sidebar-Links"> <div className="sidebar-icons"><MdSettings size={24}/></div>
 <div className="side-bar-text-hidden">Settings</div></Link></li>
 
 
 <li className={click? "sidebar-list-items active":"sidebar-list-items"}><Link to="/feedback" className="sidebar-Links">
 <div className="sidebar-icons">
 <MdFeedback size={24}/>
 </div>
<div className="side-bar-text-hidden">send feedBack</div></Link></li>


 </ul>
 </div> 
 </aside>
  )
}

export default SideBar