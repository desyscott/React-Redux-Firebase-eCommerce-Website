import React,{useState} from 'react'
import "./Dropdown.css"

const Notification=()=> {
    const [click,setClick] = useState(false);
  
    //function to toggle the state of the dropdown menu when it been click on 
    const handleClick=()=>{
      setClick(!click)
    }
    // const closeDropDownMenu =()=>{
    //   setClick(false)
    // }
    return (
        <>
        <ul onClick={handleClick} className={click? "notification-menu clicked":"notification-menu"}>
       
        </ul>
        </>
    )
}

export default Notification;
