import React,{useState,useEffect} from 'react'
import "../../Components/Button/Button.css"
import "../Home/Home.css"
import Feature from "../../Components/Feature/Feature"
import { BsCart4} from "react-icons/bs";
import {featureData} from "../../Components/Feature/featureData"
import {Link} from "react-router-dom"
import HeroImg from "../../Components/images/bg-1.png"
import {slideHeroData} from "../../Components/Feature/featureData"
import Products from "../../Components/Products/Products"
import Services from "../../Components/Services/Services"
import "../../Components/Button/Button.css"
import appStoreImg from "../../Components/images/appstore-btn.png"
import googleplayImg from "../../Components/images/googleplay-btn.png"


function Home() {
  const [scroll, setScroll] = useState(false)
  const [currentSlide,setCurrentSlide]=useState(0)
  const slideLength =slideHeroData.Length;
  
           //slideLength 1 2 3
         //currentSlide 0 1 2
  
  const nextSlide=()=>{
    setCurrentSlide(currentSlide===slideLength-1? 0: currentSlide+1)
    
  }
  
  const prevSlide=()=>{
    setCurrentSlide( currentSlide===0 ? slideLength-1:currentSlide-1)
    
  }
  
       const autoScroll = true;
       let slideInterval;
       let intervalTime = 4000;

 function auto(){
  slideInterval = setInterval(nextSlide, intervalTime)
 }

 
  const ChangeNavBackground = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    console.log(window.scrollY);
  };
  
  useEffect(() => {
    setCurrentSlide(0)
    window.addEventListener("scroll", ChangeNavBackground);
  }, []);
  
  
  useEffect(() => {
    if(autoScroll){
      auto()
    }
   return  ()=>clearInterval(slideInterval)
  }, [currentSlide]);
  
  if(!Array.isArray(slideHeroData) || slideHeroData.length <= 0){
    return null;
  }
  return (
    <div className="home-container">

    <div className="Hero-container">
    <nav className={scroll ? "home-nav-active":"home-nav"}>
    
    <div className="nav-logo-container" >
    <Link   className="nav-logo" to="/"><span className="logo-icon"><BsCart4  size={30} /></span>Gro Mart </Link>
    </div>
     
    <ul className="Nav-Items">
    <li><Link className="nav-link">Home</Link></li>
    
    <li><Link  className="nav-link">Category </Link></li>
    
    <li><Link className="nav-link" >Products</Link></li>
    
    <li><Link className="nav-link">Features</Link></li>
    
    <li><Link className="nav-link">Reviews</Link></li>
    </ul>
    
    <div className="nav-button">
    <Link className="login-btn">login</Link>
    <button className="btn primary-btn">get started</button>
    </div>
    </nav>
    
    <div className="Hero-content" style={{ backgroundImage: `url(${HeroImg})`,  backgroundRepeat: 'no-repeat',backgroundPosition:"center", height:"87.9%"}} >
   
    <div className="Hero-item" >
                <h1 className="heroH1">Order Your Daily Groceries</h1>
                <p className="heroP"> Free Delivery</p>
                <button className="btn HeroBtn">Get Started</button>
                <div className="download-btn">
                <img src={appStoreImg} alt="" className="appStore-btn"/>
                <img src={googleplayImg} alt="" className="appStore-btn"/>
                </div>
      </div>
      
    <div className="hero-right-item">
    <div className="slide-frame" >
    {slideHeroData.map((slide,index)=>{
      return(
        <div key={index}   className={index=== currentSlide? "slideUp current":"slideUp"}>
        {
          index===currentSlide &&(
            <>
            <span className="slide-details">{slide.detail}</span> 
            <img src={slide.image} alt="img" className="left-img" style={{width:slide.WIDTH}}/>
            </>
          )
        }
          
        
        </div>
      )
    })}
      </div>
      </div>
    
    </div>
    </div>
    

<Services/>
   
    <Products />

    <Feature featureData={featureData}/>

    <h3>welcome to Gro mart </h3>
    <Link to ="/dashboard" className="btn secondary-btn">Dashboard</Link>

    
    </div>
  )
}

export default Home