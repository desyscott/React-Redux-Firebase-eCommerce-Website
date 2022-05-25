import React,{useRef,useEffect,useState} from "react"
import NavBar from "../../Components/NavBar/NavBar"
import SideBar from "../../Components/SideBar/SideBar"
import  "./Admin.css"
import "../../GlobalStyle.css"
import { orders} from "./OrdersItems"
import {FaDollarSign} from "react-icons/fa"
import {BsGraphUp}from "react-icons/bs"
import {BsCartCheckFill}from "react-icons/bs"
import {GrDiamond}from "react-icons/gr"
import Products from "../../Components/Products/Products"
import Dashboard from "../Dashboard/Dashboard"


const AdminPage =()=>{
  const [open,setOpen]=useState(false)
  
  const toggle =()=>{
  setOpen(!open)
  }
  
  const [showDropDown,setShowDropDown]=useState(false)
  const [notification,setNotification]=useState(false)
  const ref =useRef()
  
  const MouseClick = () => {
    if (window.innerWidth > 960) {
      setShowDropDown(!showDropDown);
    } else {
      setShowDropDown(!showDropDown);
    }
  };
  const notificationToggle = () => {
    if (window.innerWidth > 960) {
      setNotification(!notification);
    } else {
      setNotification(!notification);
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      //check if the click outside the nav to close the dropdown
      if (showDropDown && ref.current && ref.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [showDropDown]);

    
    return(
        <div className="admin">
         <div ref={ref}>
          <NavBar toggle= {toggle} open={open} MouseClick={MouseClick} showDropDown={showDropDown} notification={notification} notificationToggle={notificationToggle}/>
          <div className="container">
          <SideBar toggle={toggle } open={open}/>
          <Dashboard/>
        </div>
        </div>
        </div>  
    )
    
}
export default AdminPage;


 