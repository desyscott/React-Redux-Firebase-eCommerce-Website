import React,{useRef,useEffect,useState} from "react"
import NavBar from "../../DashboardNav/index"
import SideBar from "../../SideBar/SideBar"
import  "./AdminLayout.css"






const AdminPage =(props)=>{
  const {currentUser} = props
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
          {props.children}
        </div>
        </div>
        </div>  
    )
    
}
export default AdminPage;


 