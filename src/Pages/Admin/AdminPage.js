import React,{useState} from "react"
import NavBar from "../../Components/NavBar/NavBar"
import SideBar from "../../Components/SideBar/SideBar"
import  "./Admin.css"
import { orders} from "./OrdersItems"
import {FaDollarSign} from "react-icons/fa"
import {BsGraphUp}from "react-icons/bs"
import {BsCartCheckFill}from "react-icons/bs"
import {GrDiamond}from "react-icons/gr"


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
        <div className="hero-header">
        <h2 className="dash-board">Dashboard</h2>
        </div>
        <div className="features-grid">
        
        <div className="weekly-sales">
            <div className="feature-title">
                <h3 className="title">Total Sales </h3>
                <div className="graph-icon">
                <BsGraphUp color="#fff" size={24}/>
                </div>
                </div>
        <div className="sale-price">
        <div className="feature-icon">
         <FaDollarSign color="#fff" size={35}/></div>
        <p className="feature-price">349,678,976.56</p>
        </div>
        </div>
        
        
        <div className="weekly-orders">
        <div className="feature-title">
                <h3 className="title">Weekly Orders </h3>
                <div className="graph-icon">
                <BsCartCheckFill color="#fff" size={24}/>
                </div>
                </div>
        <div className="sale-price">
        <p className="feature-price">78976.56</p>
        </div>
        </div>
        
        
        
        
        <div className="visitors-online">
        <div className="feature-title">
                <h3 className="title">Visitor Online </h3>
                <div className="graph-icon">
                <GrDiamond color="#fff" size={20}/>
                </div>
                </div>
        <div className="sale-price">
        <p className="feature-price">447,8976.56</p>
        </div>
        </div>


        <div className="sales-statistics">sales statistics</div>
        <div className="visitors">visitor</div>
        
        
        <div className="Latest-orders">
        <h3 className="">Latest ordesr</h3>
        <ul className="orders-items">
        {orders.map((order,index)=>{
          return(
            <li key={index} className="orders-list-items">
            
            <div className="order-section">
         <div className="order-cred1">
         <p>{order.id}</p>
            <p className="order-name">{order.name}</p>
            </div>
            
            <div className="order-cred2">
           
            <p className="order-cred2Sub">{order.email}</p>
         
     
            <p className="order-cred2Sub">{order.price}</p>
            
         
            <p className="order-cred2Sub">{order.progress}</p>
         
       
            <p className="order-cred2Sub">{order.date}</p>
          
            </div>
            </div>
            </li>
          )
        })}
        </ul>

        </div>
        
        
        </div>
        </div>
        </div>
        </>  
    )
    
}


export default AdminPage;