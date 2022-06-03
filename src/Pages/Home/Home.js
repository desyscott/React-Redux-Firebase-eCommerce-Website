import React,{useState,useEffect,useRef} from 'react'
import "../../Components/Button/Button.css"
import "../Home/Home.css"
import Feature from "../../Components/Feature/Feature"
import {Link} from "react-router-dom"
import {featureData} from "../../Components/Feature/featureData"
import HeroImg from "../../Components/images/bg-1.png"
import {slideHeroData} from "../../Components/Feature/featureData"
import Products from "../../Components/Products/Products"
import Category from "../../Components/Category/Category"
import Review from "../../Components/Reviews/Review"
import Services from "../../Components/Services/Services"
import Footer from "../../Components/Footer/Footer"
import "../../Components/Button/Button.css"
import ScrollToTopButton from "../../Components/ScrollToButton/ScrollToTop"
import appStoreImg from "../../Components/images/appstore-btn.png"
import googleplayImg from "../../Components/images/googleplay-btn.png"


function Home(props) {
  const {Categories,products,Features,Reviews }=props
  
  
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
  
  
  useEffect(() => {
    setCurrentSlide(0);
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
    <ScrollToTopButton/>
    <div className="Hero-container">
  

    <div className="Hero-content" style={{ backgroundImage: `url(${HeroImg})`,  backgroundRepeat: 'no-repeat',backgroundPosition:"center", height:"100%"}} >
    <div className="Hero-item" >
                <h1 className="heroH1">Order Your Daily Groceries</h1>
                <p className="heroP"> Free Delivery</p>
                <Link className="btn HeroBtn" to="/dashboard">Get Started</Link>
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
    
<div  ref={Features}>
<Services/>
</div>
   
   <div ref={products}>
    <Products />
    </div>

    <Feature featureData={featureData} />
    
    <div  ref={Categories}>
    <Category />
    </div>
    <div  ref={Reviews}>
    <Review/>
    </div>
 
    <Footer/>

    </div>
  )
}

export default Home