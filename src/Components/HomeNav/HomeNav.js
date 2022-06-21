import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import "./HomeNav.css"
import { BsCart4} from "react-icons/bs";
import { GrCart } from 'react-icons/gr';
import AdminToolbar from "../AdminToolbar/index"
import { signOutStart} from "../Redux/Reducer/userReducer/userAction.js"
import {selectCartItemCount} from "../Redux/Reducer/cartsReducer/cartSelector"

//redux
import {useSelector,useDispatch} from "react-redux"

const mapState= (state)=>({
  currentUser:state.User.currentUser,
  totalNumCartItems:selectCartItemCount(state)
})
 

const  HomeNav=(props)=>{
  const dispatch=useDispatch()
  const {currentUser,  totalNumCartItems}=useSelector(mapState)
  
  
  const {Categories,products, Features,Reviews }=props

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
   dispatch( signOutStart())
  }
  
 
  return (
    <>
 <AdminToolbar/> 
        <nav className={scroll ? "home-nav nav-active":"home-nav"}>
       
    <div className="nav-logo-container" >
    <Link   className="nav-logo" to="/">Gro Mart </Link>
    </div>
    
     {currentUser &&  (
       
      <ul className="Nav-Items">
    <li><Link className="nav-link" to="/">Home</Link></li>
    
    <li onClick={()=>ScrollToSection(Categories)}><Link  className="nav-link" >Category </Link></li>
    
    <li onClick={()=>ScrollToSection(products)}><Link className="nav-link" >products</Link></li>
    
    <li onClick={()=>ScrollToSection(Features)}><Link className="nav-link">Features</Link></li>
    
    <li onClick={()=>ScrollToSection(Reviews)}><Link className="nav-link">Reviews</Link></li>
    <li ><Link className="nav-link" to="/search">Search</Link></li>
    </ul>
    ) }
    
    <div className="nav-button">
   <Link   className="cart" to="/cart">cart(  {totalNumCartItems})</Link>
    {currentUser &&  (
   <>
    <Link className="myAcc-btn" to="/dashboard" >my account</Link>
    <button className="btn logout-btn" onClick={handleSignOut}>logOut</button>
    </>
    ) }
    
     
      
       {!currentUser &&  (
   <>
    <Link className="login-btn" to="/login">login</Link>
    <Link className="btn primary-btn" to="/register" >get started</Link>
</>
    )}
    </div>
    </nav>
    </>
  )
}

HomeNav.defaultProps={
  currentUser: null
}

export default  HomeNav
