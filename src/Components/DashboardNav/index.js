import React,{useRef,useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import useDarkMode  from "../useDarkMode"
import "./NavBar.css"
import { FaBars } from "react-icons/fa";
import { BsTextIndentRight } from "react-icons/bs";
import { BsCart4} from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoSearch} from "react-icons/go";
import {IoMdArrowDropdown} from "react-icons/io";
import {IoMdArrowDropup} from "react-icons/io";
import {IoMdClose} from "react-icons/io";
import {BiSun} from "react-icons/bi";
import {HiOutlineMoon} from "react-icons/hi";
import profileImage from "../images/Lori Harvey.jpg"
import Dropdown from "../DropDown/Dropdown"
import Notification from "../Notification/index"





function NavBar({toggle,open,showDropDown, notification,MouseClick,notificationToggle}) {
  
   const [input,setInput]=useState("")
   const [isDark,setIsDark]=useDarkMode()
   


const handleChange=(event)=>{
setInput(event.target.value);
  
}

  


  return (
    <>
    <div className="nav" >
    
    <div className="nav-admin">
    
     
      <div className="menu-icon" onClick={toggle}>{open?  <BsTextIndentRight  size={20}/> : <FaBars   size={20}/>}</div>
      <div className="nav-logo">
      <Link   className="nav-logo-link" to="/">Gro Mart </Link>
      <BsCart4 size={20} color="rgba(6, 109, 51, 0.89)"/>
      </div>
      </div>
      
      <div className="search-bar-container">
      <input type="text"  placeholder=" search" className="search-bar_input" value={input} onChange={handleChange}/>
   
     {input && <div className="close-button" onClick={()=>setInput("")}>
       <IoMdClose  size={19} />
       </div>}
      <button className="search-bar_submit" >
      <GoSearch size={15} />
      </button>
   
      </div>
   
  

      
      <div className="nav-items">
      <div className="nav-notification"  onClick={notificationToggle}>
      <IoIosNotificationsOutline size={24}/>
      {notification && <Notification/>}
      </div>
      
     <div onClick={()=>setIsDark(!isDark)}>{isDark? <BiSun/>:<HiOutlineMoon />}</div>
   
      
 <div  className="profile-container"   onClick={MouseClick}
             >
     <img className="img-profile" src={profileImage} alt="profileImage"/>
     <div className="dropdown-icon">
     {showDropDown ? <IoMdArrowDropup  size={20}/> : <IoMdArrowDropdown size={20}/>}
     </div>
     {showDropDown && <Dropdown />}
     </div>
   

      </div>
      </div>
    </>
  )
}

export default NavBar
