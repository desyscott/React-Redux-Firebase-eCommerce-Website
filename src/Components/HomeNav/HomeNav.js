import React,{useState,useEffect,useRef} from 'react'
import {Link} from "react-router-dom"
import "./HomeNav.css"
import { BsCart4} from "react-icons/bs";

const  HomeNav=(props)=>{
  const {Categories,products, Features,Reviews ,currentUser}=props
  
  console.log({currentUser:currentUser})
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
    // console.log(window.scrollY);
  };

  
  useEffect(() => {
    // setCurrentSlide(0)
    window.addEventListener("scroll", ChangeNavBackground);
  }, []);
  
 
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
    <Link className="login-btn" to="/login">logOut</Link>
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

export default HomeNav
