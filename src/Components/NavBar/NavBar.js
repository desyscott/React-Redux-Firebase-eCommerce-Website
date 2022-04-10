import React,{useState} from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"
import { FaBars } from "react-icons/fa";
import { BsTextIndentRight } from "react-icons/bs";
import { BsCart4} from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoSearch} from "react-icons/go";
import { RiArrowDropDownLine} from "react-icons/ri";
import { IconContext } from "react-icons";
import profileImage from "../images/Lori Harvey.jpg"



function NavBar({toggle,open}) {
      
    
  return (
    <>
    {/* <IconContext.Provider value={{color:"rgba(6, 109, 51, 0.89)"}}> */}
    <div className="nav">
    
    <div className="nav-admin">
    
     
      <div className="menu-icon" onClick={toggle}>{open?  <BsTextIndentRight  size={20}/> : <FaBars   size={20}/>}</div>
      <div className="nav-logo">
      <Link   className="nav-logo-link" to="/">Gro Mart </Link>
      <BsCart4 size={20 } color="rgba(6, 109, 51, 0.89)"/>
      </div>
      </div>
      
      <div className="search-bar-container">
      <input type="text"  placeholder=" search" className="search-bar_input"/>
      <button className="search-bar_submit" >
      <GoSearch size={15} />
      </button>
      </div>
   
  

 
      
    
 
      
      
      <div className="nav-items">
      <div className="nav-notification">
      <IoIosNotificationsOutline size={24}/>
      </div>
      

     <img className="img-profile" src={profileImage} alt="profileImage"/>
     <div className="dropdown-icon">
     <RiArrowDropDownLine size={24}/>
     </div>

      </div>
      </div>
      {/* </IconContext.Provider> */}
    </>
  )
}

export default NavBar
