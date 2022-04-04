import React,{useState} from "react"
import NavBar from "../../Components/NavBar/NavBar"
import SideBar from "../../Components/SideBar/SideBar"
import  "./Admin.css"


const AdminPage =()=>{
  const [open,setOpen]=useState(false)
  
  const toggle =()=>{
  setOpen(!open)
  }
    
    return(
        <>
       
          <NavBar toggle= {toggle} open={open}/>
          <div className="container">
          <SideBar toggle={toggle } open={open}/>
        <div className="hero-container">
        <h1>shopping web Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dignissimos? Rerum, voluptas facilis eveniet sed repudiandae cupiditate sit. Nulla deserunt quas illum nam, quam aspernatur omnis expedita nihil eius dicta?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione in soluta est delectus dolorem qui porro voluptatem, iste suscipit sint commodi odio. Cum harum, quidem debitis veniam ad facilis!</h1>
        </div>
        </div>
        </>  
    )
    
}


export default AdminPage;