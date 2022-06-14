import React,{useState} from 'react'
import{ DropDownItems} from "./DropDownItems"
import {Link} from "react-router-dom"
import "./DropDown.css"

import {signOut} from "firebase/auth"
function Dropdown() {
    const [click,setClick] = useState(false)
  
    //function to toggle the state of the dropdown menu when it been click on 
    const handleClick=()=>{
      setClick(!click)
    }
    const closeDropDownMenu =()=>{
      setClick(false)
    }
    
//     const handleSignOut=()=>{
//   signOut(auth).then((authUser)=>{
//     console.log(authUser)
    
//   }).catch((err)=>{
//     console.log(err)
//   })
// }
    return (
        <>
        <ul onClick={handleClick} className={click? "dropdown-menu clicked":"dropdown-menu"}>
        {DropDownItems.map((item,index)=>{
            return(
            <li key={index} >
              <Link to={item.path} className={item.cName} onClick={closeDropDownMenu}>
         <div className="icons">{item.icon}</div>
           <div  className="dropdown-title"> {item.title}</div>
              </Link>
            </li>
            )
        })}
        </ul>
        </>
    )
}

export default Dropdown
