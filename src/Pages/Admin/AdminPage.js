import React,{useRef,useEffect,useState} from "react"
import NavBar from "../../Components/NavBar/NavBar"
import SideBar from "../../Components/SideBar/SideBar"
import  "./Admin.css"
import { orders} from "./OrdersItems"
import {FaDollarSign} from "react-icons/fa"
import {BsGraphUp}from "react-icons/bs"
import {BsCartCheckFill}from "react-icons/bs"
import {GrDiamond}from "react-icons/gr"
import Products from "../Products"


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
        <>
         <div ref={ref}>
          <NavBar toggle= {toggle} open={open} MouseClick={MouseClick} showDropDown={showDropDown} notification={notification} notificationToggle={notificationToggle}/>
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
        <h3 >Recent Orders</h3>
        
           <div className="orders-container">
           <div  className="orders-header">
           <div>OrderID</div>
           <div>Payment Method</div>
           <div>Order Date</div>
           <div>Delivery Date</div>
           <div>Status</div>
           <div>Amount</div>
           </div>
           
           {orders.map((order,index)=>{
             return(<>
                    <div className="order-row" key={index}>
                    <p>
                    {order.id}
                    </p>
                    <p>
                    {order.paymentMethod}
                    </p>
                    <div>
                     <p>{order.OrderDate}</p>
                   <p>{order.OrderTime}</p>
                    </div>
                    <p>
                    {order.DeliveryDate}
                    </p>
                    <p  >
                    {order.status}
                    </p>
                    <p>
                    {order.price}
                    </p>
                    </div>
             </>)
             
           })}
           
           
           </div>
           
     
      
    
        </div>
        
        
        </div>
        </div>
        </div>
        </div>
        </>  
    )
    
}
export default AdminPage;


