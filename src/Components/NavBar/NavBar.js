import React,{useRef,useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"
import { FaBars } from "react-icons/fa";
import { BsTextIndentRight } from "react-icons/bs";
import { BsCart4} from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoSearch} from "react-icons/go";
import {IoMdArrowDropdown} from "react-icons/io";
import {IoMdArrowDropup} from "react-icons/io";
import profileImage from "../images/Lori Harvey.jpg"
import Dropdown from "../DropDown/Dropdown"



function NavBar({toggle,open}) {
  
  const [showDropDown,setShowDropDown]=useState(false)
  const ref =useRef()
  
  const MouseHover = () => {
    if (window.innerWidth > 960) {
      setShowDropDown(!showDropDown);
    } else {
      setShowDropDown(!showDropDown);
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showDropDown && ref.current && !ref.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [showDropDown]);

      
    
  return (
    <>
    <div className="nav" ref={ref} >
    
    <div className="nav-admin">
    
     
      <div className="menu-icon" onClick={toggle}>{open?  <BsTextIndentRight  size={20}/> : <FaBars   size={20}/>}</div>
      <div className="nav-logo">
      <Link   className="nav-logo-link" to="/">Gro Mart </Link>
      <BsCart4 size={20} color="rgba(6, 109, 51, 0.89)"/>
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
      
 <div  className="profile-container"   onClick={MouseHover}
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
