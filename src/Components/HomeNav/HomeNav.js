import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import "./HomeNav.css"
import { BsCart4} from "react-icons/bs";


import {connect} from "react-redux"
import {auth} from "../../Firebase"
import { signOut } from 'firebase/auth';



const  HomeNav=(props)=>{
  const {Categories,products, Features,Reviews ,currentUser}=props

    const [scroll, setScroll] = useState(false)
      
   const ScrollToSection=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:"smooth",
    })
  }
   
  const ChangeNavBackground = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  
  useEffect(() => {
    // setCurrentSlide(0)
    window.addEventListener("scroll", ChangeNavBackground);
  }, []);
  
  
  const handleSignOut=()=>{
    signOut(auth).then((authUser)=>{
      console.log(authUser)
      
    }).catch((err)=>{
      console.log(err)
    })
  }
  
 
  return (
    <>
        <nav className={scroll ? "home-nav nav-active":"home-nav"}>
    
    <div className="nav-logo-container" >
    <Link   className="nav-logo" to="/"><BsCart4  size={30}  className="logo-icon" />Gro Mart </Link>
    </div>
    
     {currentUser &&  (
       
       <>
      <ul className="Nav-Items">
    <li><Link className="nav-link" to="/">Home</Link></li>
    
    <li onClick={()=>ScrollToSection(Categories)}><Link  className="nav-link" >Category </Link></li>
    
    <li onClick={()=>ScrollToSection(products)}><Link className="nav-link" >products</Link></li>
    
    <li onClick={()=>ScrollToSection(Features)}><Link className="nav-link">Features</Link></li>
    
    <li onClick={()=>ScrollToSection(Reviews)}><Link className="nav-link">Reviews</Link></li>
    </ul>
    
     <div className="nav-button">
    <button className="btn" onClick={handleSignOut}>logOut</button>
    </div>
    </>) }
      
       {!currentUser &&  (
      <div className="nav-button">
    <Link className="login-btn" to="/login">login</Link>
    <button className="btn primary-btn">get started</button>
    </div>
    )}
   
    </nav>
    </>
  )
}

HomeNav.defaultProps={
  currentUser: null
}


const mapStateToProps = ({User})=>({
  currentUser:User.currentUser
})
 

export default connect(mapStateToProps,null) (HomeNav)
